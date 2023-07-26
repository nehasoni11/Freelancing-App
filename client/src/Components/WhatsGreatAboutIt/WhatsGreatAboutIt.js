import React from "react";
import BrowsePortfolio from "./BrowsePortfolio";
import FastBids from "./FastBids";
import QualityWork from "./QualityWork";
import TrackProgress from "./TrackProgress";

const WhatsGreatAboutIt = () => {
  return (
    <div>
      <br />
      <h1 style={{ fontWeight: "bolder" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;What's great about it?
      </h1>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-3">
            <BrowsePortfolio />
          </div>
          <div class="col-3">
            <FastBids />
          </div>
          <div class="col-3">
            <QualityWork />
          </div>
          <div class="col-3">
            <TrackProgress />
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default WhatsGreatAboutIt;
