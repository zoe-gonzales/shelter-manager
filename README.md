# JOURNEY'S SHELTER MANAGEMENT APPLICATION

### Overview:

Our intended application offers management for shelters via animal and donation
databases. Our product is valuable due to a strong and personable UI, and
donation management feature, which competitors do not have.

### User Stories:

As an intake person at a busy shelter, I want to be able to easily and efficiently input new animals into the system or update the system so that animal can be tracked through the intake process, and easily update the system when animals gets adopted.

As a user I would be able to log in to the system to see the shelter animals’ details.

### Deployed at: 
[Journey App](https://journey-shelter-manager.herokuapp.com/)

### Using the Application:

#### Sign Up/Log In

Users can sign up or sign in via AuthO from the welcome page:

![Sign Up/Log In](client/src/images/SignLogin.png)

#### Home Page

Users are then presented with cards of currenet shelter residents. Users can also search by animal if desired.

![Home](client/src/images/Home.PNG)

#### Add Animal Page

Users can add new animals to the database:

![Home](client/src/images/AddAnimal.png)

Added animals will then show up in a card on the main page.

#### Donations

Clicking on the Donation tab in the upper navbar opens a dropdown menu. Users may then select to use the material donation form to add donated supplies, the monetary donation form to add donated funds, or to view the shelter's current donations.

### Technologies Used:
<ul>
<li>React</li>
<li>Mongoose</li>
<li>MongoDB</li>
<li>Express</li>
<li>AuthO</li>
<li>pdfkit npm package</li>
<li>React Bootstrap</li>
<li>Bootswatch</li>
</ul>



### Team Member Roles:
<ul>
<li>Lynn Amsbury - UI/UX (Front End)</li>
<li>Bindhu Sivanand - UI/UX (Front End)</li>
<li>Sara Overby - Back End</li>
<li>Zoë Gonzales - Back End - Routes</li>
<li>Sarah Jaffe - Scrum Master/Project Manager, Backend - Front End if needed</li>
<li>Ben Zamora - Front and Back End</li>
</ul>

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations are complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.