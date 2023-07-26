import React from "react";
import { useNavigate } from "react-router-dom";

const HowDoesItWork = () => {
  const navigate = useNavigate();
  const postProjectHandler = () => {
    navigate("/post-project")
  }
  return (
    <div>
      <br />
      <h1 style={{ fontWeight: "bolder" }}>
    {/*     &nbsp;&nbsp;&nbsp;&nbsp; */}Need Something Done?
      </h1>
      <br/>
      <h3 style={{ fontWeight: "bolder" }}>1. Post a project or contest</h3>
      <p>
        Simply post a project or contest for what you need done and receive
        competitive bids from freelancers within minutes.
      </p>  <br/>
      <h3 style={{ fontWeight: "bolder" }}>2. Choose the perfect freelancer</h3>
      <p>
        Browse freelancer profiles. Chat in real-time. Compare proposals and
        select the best one. Award your project and your freelancer starts work.
      </p>  <br/>
      <h3 style={{ fontWeight: "bolder" }}>3. Pay when you’re satisfied</h3>
      <p>
        Pay securely using our Milestone Payment system. Release payments when
        it has been completed and you're 100% satisfied.
      </p> <br/>
      <button
          style={{ textDecoration: "none", backgroundColor: '#F51663' }}
          onClick={postProjectHandler}
        >
          Post a Project
        </button>
    </div>
  );
};

export default HowDoesItWork;
