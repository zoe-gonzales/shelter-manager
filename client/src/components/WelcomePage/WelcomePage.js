import React from "react";
import SignInButton from '../SignInButton/SignInButton';
import Journey from "../../images/Journey.jpeg";

const WelcomePage = () => {
    const divStyle = {
        backgroundImage: `url(${Journey})`,
        backgroundPosition: "50% 35%",
        backgroundSize: "cover",
        padding: "300px 100px",
        color: "white"
    }

  return (
      
    <div id="ll"className="container text-center">
    <SignInButton />
    <br/>
    <div style={divStyle}></div>
    </div>
  )
}

export default WelcomePage;