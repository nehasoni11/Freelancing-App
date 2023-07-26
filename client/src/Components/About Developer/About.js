import React from "react";
import { Link } from "react-router-dom";
import Image from "../../Resources/avatar9.jpg";

const About = () => {
  return (
    <>
      <h3 style={{ color: "blue" }}>Hello and Welcome!</h3>
      <div>
        Blogging for Devs Trends is meant to be a fun way to discover the most
        discussed technical content on Twitter, without doomscrolling your day
        away. <br />
        <br />
        To do this, we track 354 of the best technical blogs by developers and
        industry experts, across over two dozen categories. <br />
        <br />
        Points are weighted to reward mentions and replies by individual
        developers more than likes and retweets. <br />
        <br />
        You can help by recommending your favorite developer blogs & blogs about
        software, or telling your friends and followers if you like this
        resource. <br />
        <br />
        Hope you find something cool here. <br />
        <br />
        <Link to="/">Learn how it works</Link>
        <br /> <br />
        <img
          style={{ width: 60, height: 50, borderRadius: 500 }}
          src={Image}
          alt=""
        />
        <p>Kanishka Palani</p>
        <span>Creator, Developers Inc.</span>
      </div>
    </>
  );
};

export default About;
