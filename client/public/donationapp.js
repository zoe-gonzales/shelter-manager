// Recording donations
//

// Loads results onto the page
function getResults() {
    // Grab all of the current donations
    $.getJSON("/all", function(data) {
      // For each donation...
      for (var i = 0; i < data.length; i++) {
        // ...populate #results with a p-tag that includes the donation's dollars and object id
        $("#results").prepend("<p class='data-entry' data-id=" + data[i]._id + "><span class='dataTitle' data-id=" +
          data[i]._id + ">" + data[i].dollars + "</span><span class=delete>X</span></p>");
      }
    });
  }
  
  // Runs the getResults function as soon as the script is executed
  getResults();
  
  // When the #make-new button is clicked
  $(document).on("click", "#make-new", function() {
    // AJAX POST call to the submit route on the server
    // This will take the data from the form and send it to the server
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/submit",
      data: {
        dollars: $("#dollars").val(),
        donation: $("#donation").val(),
        created: Date.now()
      }
    })
    // If that API call succeeds, add the dollars and a delete button for the donation to the page
      .then(function(data) {
      // Add the dollars and delete button to the #results section
        $("#results").prepend("<p class='data-entry' data-id=" + data._id + "><span class='dataDollars' data-id=" +
        data._id + ">" + data.dollars + "</span><span class=delete>X</span></p>");
        // Clear the donation and dollars inputs on the page
        $("#donation").val("");
        $("#dollars").val("");
      });
  });
  
  // When user clicks the delete button for a donation
  $(document).on("click", ".delete", function() {
    // Save the p tag that encloses the button
    var selected = $(this).parent();
    // Make an AJAX GET request to delete the specific donation
    // this uses the data-id of the p-tag, which is linked to the specific donation
    $.ajax({
      type: "GET",
      url: "/delete/" + selected.attr("data-id"),
  
      // On successful call
      success: function(response) {
        // Remove the p-tag from the DOM
        selected.remove();
        // Clear the donation and dollars inputs
        $("#donation").val("");
        $("#dollars").val("");
        // Make sure the #action-button is submit (in case it's update)
        $("#action-button").html("<button id='make-new'>Submit</button>");
      }
    });
  });
  
  // When user click's on donation dollars, show the donation, and allow for updates
  $(document).on("click", ".dataDollars", function() {
    // Grab the element
    var selected = $(this);
    // Make an ajax call to find the donation
    // This uses the data-id of the p-tag, which is linked to the specific donation
    $.ajax({
      type: "GET",
      url: "/find/" + selected.attr("data-id"),
      success: function(data) {
        // Fill the inputs with the data that the ajax call collected
        $("#donation").val(data.donation);
        $("#dollars").val(data.dollars);
        // Make the #action-button an update button, so user can
        // Update the donation s/he chooses
        $("#action-button").html("<button id='updater' data-id='" + data._id + "'>Update</button>");
      }
    });
  });
  
  // When user click's update button, update the specific donation
  $(document).on("click", "#updater", function() {
    // Save the selected element
    var selected = $(this);
    // Make an AJAX POST request
    // This uses the data-id of the update button,
    // which is linked to the specific donation dollars
    // that the user clicked before
    $.ajax({
      type: "POST",
      url: "/update/" + selected.attr("data-id"),
      dataType: "json",
      data: {
        dollars: $("#dollars").val(),
        donation: $("#donation").val()
      },
      // On successful call
      success: function(data) {
        // Clear the inputs
        $("#donation").val("");
        $("#dollars").val("");
        // Revert action button to submit
        $("#action-button").html("<button id='make-new'>Submit</button>");
        // Grab the results from the db again, to populate the DOM
        getResults();
      }
    });
  });
  