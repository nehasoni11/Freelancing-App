import React from "react";
import NewYork from "../../Resources/the-new-york-times.svg";
import CNBC from "../../Resources/cnbc.svg";
import WallStreet from "../../Resources/wall-street-journal.svg";
import CNN from "../../Resources/cnn.svg";
import Bloomberg from "../../Resources/bloomberg.svg";
import Yahoo from "../../Resources/yahoo-finance.svg";
import Business from "../../Resources/business-insider.svg";
import Forbes from "../../Resources/forbes.svg";

const AsSeenBy = () => {
  return (
    <div className="text-center">
            <br/> <br/>    <br/> 
      <span style={{ fontWeight: "bolder" }}>As seen on</span>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={NewYork} alt="" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={CNBC} alt="" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={WallStreet} alt="" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={CNN} alt="" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Bloomberg} alt="" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Yahoo} alt="" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Business} alt="" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Forbes} alt="" />
      <br/>    <br/>   <br/>    <br/> 
    </div>
  );
};

export default AsSeenBy;
