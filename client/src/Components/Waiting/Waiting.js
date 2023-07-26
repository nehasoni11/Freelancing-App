import React from "react";
import { useNavigate } from "react-router-dom";

const Waiting = () => {
  const navigate = useNavigate();
  const postProjectHandler = () => {
    navigate("/post-project")
  }
  return (
    <div>
      <h1 style={{fontWeight: 'bolder'}} class="d-block p-2 bg-dark text-white">
        {" "}
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; So what are you waiting for? <br />
        <br />
        <h4>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Post a project today
          and get bids from talented freelancers.
        </h4>
        <br /> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          style={{
            fontWeight: "bolder",
            textDecoration: "none",
            backgroundColor: "#F51663",
          }}
          onClick={postProjectHandler}
        >
          Post a Project
        </button>
        <br/>  <br/>
      </h1>
    </div>
  );
};

export default Waiting;
