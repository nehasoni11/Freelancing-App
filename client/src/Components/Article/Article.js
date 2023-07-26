import React from "react";
import styles from "./Article.module.css";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();
  const hireHandler = () => {
    navigate("/post-project");
  };

  const earnHandler = () => {
    navigate("/signup")
  }
  return (
    <div>
      <article
        className={styles.article}
        style={{
          backgroundImage: `url(https://www.f-cdn.com/assets/main/en/assets/how-it-works/client-desktop.jpg)`,
          height: 600,
        }}
      >
        <br /> <br /> <br /> <br /> <br />
        <h1 className={styles.header}>
          &nbsp; &nbsp; &nbsp; &nbsp; Hire the best <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; freelancers for any job,{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; online.
        </h1>
        <br />
        <h6 className={styles.p}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; World's
          largest freelance marketplace
          <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Any job
          you can possibly think of <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Save up to 90%
          & get quotes for freelance <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Pay only when
          you're 100% happy
        </h6>
        <br />
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        &nbsp;&nbsp;&nbsp;
        <button
          style={{
            textDecoration: "none",
            backgroundColor: "#F51663",
          }}
          onClick={hireHandler}
        >
          Hire a Freelancer
        </button>{" "}
        &nbsp;&nbsp;
        <button
          style={{
            textDecoration: "none",
            backgroundColor: "#F51663",
          }}
          onClick={earnHandler}
        >
          Earn money freelancing
        </button>
      </article>
    </div>
  );
};

export default Article;
