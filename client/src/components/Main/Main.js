import React from "react";

import Find from "./Search";
import ImageHome from "./ImageCard";





const LandingPage = () => {

  return (
    <div id="ll"className="container">
      <Find />
      <br />
      <ImageHome />

      {/* <h1>This is the landing page after sign-in or sign-up(Animal Page)</h1> */}
    </div>
  )
}

export default LandingPage;