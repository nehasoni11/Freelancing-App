import React from "react";
import PostJob from "../../Resources/post-a-project.svg";

const PostAJob = () => {
  return (
    <div><div className="text-center">
      <img src={PostJob} alt="" />
      <h3>Post a Job</h3><br/>
      <p>
        It’s free and easy to post a job. Simply fill in a title, description
        and budget and competitive bids come within minutes.
      </p>
    </div>    </div>
  );
};

export default PostAJob;
