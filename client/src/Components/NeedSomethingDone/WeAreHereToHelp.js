import React from "react";
import WeAreHere from "../../Resources/about-me.svg";

const WeAreHereToHelp = () => {
  return (
    <div>
        <div className="text-center">
      <img src={WeAreHere} alt="" />
      <h3>We’re here to help</h3><br/>
      <p>
        Our talented team of recruiters can help you find the best freelancer
        for the job and our technical co-pilots can even manage the project for
        you.
      </p></div>
    </div>
  );
};

export default WeAreHereToHelp;
