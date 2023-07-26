import React from "react";
import Pay from "../../Resources/pay-safely (1).svg";

const Content = () => {
  return (
    <div className="text-center">
      <br />
      <h1 style={{ fontWeight: "bolder" }}>
        {/*     &nbsp;&nbsp;&nbsp;&nbsp; */}Safe and secure
      </h1>
      <br />
      <p>
        Developers Inc. is a community that values your trust and safety as our
        number one priority. Our representatives are available 24/7 to assist
        you with any issues.
      </p>
      <div className="text-center">
        <img src={Pay} alt="" />
        <h3>Pay with confidence</h3>
        <br />
        <p>
          Pay safely and securely in over 39 currencies through the Milestone
          Payments system. Only release payments when you are satisfied with the
          work.
        </p>
      </div>
    </div>
  );
};

export default Content;
