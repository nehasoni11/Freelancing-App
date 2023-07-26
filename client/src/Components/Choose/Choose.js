import React from "react";
import AnySizedProject from "./AnySizedProject";
import FlexiblePayment from "./FlexiblePayment";
import DiverseTalent from "./DiverseTalent";

const Choose = () => {
  return (
    <div>
      <br /><br/>
      <h1 style={{ fontWeight: "bolder" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Choose from endless possibilities
      </h1><br/>
      <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get anything done, exactly how you want it. Turn that spark of an idea into reality.</h3>
      <br /><br/> <div class="container">
        <div class="row justify-content-center">
          <div class="col-4"><AnySizedProject/></div>
          <div class="col-4"><FlexiblePayment/></div>
          <div class="col-4"><DiverseTalent/></div>
        </div>
      </div>
    </div>
  );
};

export default Choose;