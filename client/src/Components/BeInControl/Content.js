import React from "react";
import LiveChat from "../../Resources/live-chat.svg";

const Content = () => {
  return (
    <div className="text-center">
      <br />
      <h2 style={{ fontWeight: "bolder" }}>
        {/*     &nbsp;&nbsp;&nbsp;&nbsp; */}Be in control. Keep in contact.
      </h2>
      <br />
      <p>
        Use our collaboration tools to work efficiently with your freelancer.
        Share files, chat in real-time, monitor progress, and so much more.
      </p>
 <div className="text-center">
        <img src={LiveChat} alt="" />
        <h3>Live chat</h3>
        <br />
        <p>
          You can live chat with your freelancers to ask questions, share
          feedback and get constant updates on the progress of your work.
        </p>
     </div></div>
    

  );
};

export default Content;
