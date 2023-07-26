import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import "../../Styles/styles.css";
import ScrollToTop from "react-scroll-to-top";
import ScrollTopArrow from "../ScrollTop/ScrollTop";

export default function SocialFollow() {
  return (
    <div className="social-container text-center">
    <h3>Follow Us On Our Social Platforms</h3>
    <a href="https://www.youtube.com/google"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/google/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/google" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/google"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <ScrollTopArrow/>
</div>
  );
}