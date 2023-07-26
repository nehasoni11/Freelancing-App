import React from "react";
import PostAJob from "./PostAJob";
import ChooseFreelancers from "./ChooseFreelancers";
import PaySafely from "./PaySafely";
import WeAreHereToHelp from "./WeAreHereToHelp";

const NeedSomethingDone = () => {
  return (
    <div>
      <br />
      <h1 style={{ fontWeight: "bolder" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Need Something Done?
      </h1>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-3"><PostAJob/></div>
          <div class="col-3"><ChooseFreelancers/></div>
          <div class="col-3"><PaySafely/></div>
          <div class="col-3"><WeAreHereToHelp/></div>
        </div>{" "}
      </div>
    </div>
  );
};

export default NeedSomethingDone;
