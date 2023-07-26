import React from "react";
import Claim from "./Claim";
import Share from "../Share/Share";

const Acknowledgement = () => {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-4">
            <Claim />
          </div>
          <div class="col-4">
            <Share />
          </div>
          <div class="col-4">
            <h3 style={{color: 'blue'}}>ACKNOWLEDGEMENTS</h3>
            <p>
              These rankings were originally inspired by the Detailed.com list
              of best blogs. SVG Patterns are from Hero Patterns and many icons
              are from Devicon. Thanks also to everyone who's submitted blogs
              and shared their feedback!
            </p>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Acknowledgement;
