import React from "react";
import FirstHeader from "../Header/FirstHeader";
import SecondHeader from "../Header/SecondHeader";
import styles from "./HowItWorks.module.css";
import Choose from "../Choose/Choose";
import Phone from "../Phone/Phone";
import BeInControl from "../BeInControl/BeInControl";
import SafeAndSecure from "../SafeAndSecure/SafeAndSecure";
import Waiting from "../Waiting/Waiting";
import Results from "../Results/Results";
import YoutubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import FooterLinks from "../Footer/FooterLinks";
import SocialFollow from "../SocialFollow/SocialFollow";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();
  const postProjectHandler = () => {
    navigate("/post-project")
  }
  return (
    <div>
      <FirstHeader />
      <SecondHeader />
      <article
        className={styles.article}
        style={{
          backgroundImage: `url(https://www.electrosonic.com/hs-fs/hubfs/Metaverse%20images%202.jpg?width=1200&height=629&name=Metaverse%20images%202.jpg)`,
          height: 600,
        }}
      >
        <br /> <br /> <br /> <br /> <br />
        <h1 className={styles.header}>
          &nbsp; &nbsp; &nbsp; &nbsp; How can freelancers help <br /> &nbsp;
          &nbsp; &nbsp; &nbsp; your business?
        </h1><br />
        <h6 className={styles.p}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The possibilities are
          endless. We have expert <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; freelancers who work in every technical, professional, <br />{" "}
          &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; and creative field
          imaginable.
        </h6>
        <br /><br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
        <button className={styles.button}
          style={{
            textDecoration: "none",
            backgroundColor: "#F51663",
          }}
          onClick={postProjectHandler}
        > 
          Post a Project
        </button>
      </article>
      <Choose/>
      <hr/>
      <Phone/>  <hr/>
      <BeInControl/><hr/>
      <SafeAndSecure/><br/>
      <Waiting/><br/>
      <YoutubeEmbed /> 
      <FooterLinks />
      <SocialFollow />
      <Footer />
    </div>
  );
};

export default HowItWorks;
