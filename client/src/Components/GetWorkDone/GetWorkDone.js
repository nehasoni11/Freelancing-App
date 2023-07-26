import React from "react";
import Four from "./Four";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Five from "./Five";

const GetWorkDone = () => {
  return (
    <div style={{ padding: 10 }}>
      <br />
      <h1 style={{ fontWeight: "bolder" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Get work done in over 1800 different categories
      </h1>
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-2">
            <One />
          </div>
          <div class="col-2">
            <Two />
          </div>
          <div class="col-2">
            <Three />
          </div>
          <div class="col-2">
            <Four />
          </div>
          <div class="col-2">
            <Five />
          </div>
          <div class="col-2">
            <One />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetWorkDone;
