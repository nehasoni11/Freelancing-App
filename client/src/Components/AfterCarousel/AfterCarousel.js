import React from "react";
import Amazon from "../../Resources/amazon_logo2.svg";
import Facebook from "../../Resources/facebook-corporate-logo2.svg";
import Deloitte from "../../Resources/deloitte-logo2.svg";
import NASA from "../../Resources/nasa-logo3.svg";
import IBM from "../../Resources/ibm-logo2.svg";
import Airbus from "../../Resources/airbus-logo2.svg";
import Telstra from "../../Resources/telstra-logo.svg";
import Fujitsu from "../../Resources/fujitsu-logo.svg";
import Google from "../../Resources/google-logo.svg";

const AfterCarousel = () => {
  return (
    <div className="text-center">
      <span style={{fontWeight: 'bolder'}}>As used by</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Amazon} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Facebook} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Deloitte} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={NASA} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={IBM} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Airbus} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Telstra} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Fujitsu} alt="" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Google} alt="" />
      <hr/>
    </div>

  );
};

export default AfterCarousel;
