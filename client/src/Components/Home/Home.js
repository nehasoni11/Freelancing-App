import React from "react";
import Header from "../Header/Header";
import SocialFollow from "../SocialFollow/SocialFollow";
import Footer from "../Footer/Footer";
import FooterLinks from "../Footer/FooterLinks";
import ImageSlider from "../Carousel/ImageSlider";
import images from "../Carousel/CarouselImages";
import YoutubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import HomeInfo from "./HomeInfo";
import TrendingTopics from "../TrendingTopic/TrendingTopics";
import Statistics from "../Statistics/Statistics";
import DiscoverMore from "../DiscoverMore/DiscoverMore";
import Acknowledgement from "../Acknowledgement/Acknowledgement";
import AfterCarousel from "../AfterCarousel/AfterCarousel";
import NeedSomethingDone from "../NeedSomethingDone/NeedSomethingDone";
import WhatsGreatAboutIt from "../WhatsGreatAboutIt/WhatsGreatAboutIt";
import MakeItReal from "../MakeItReal/MakeItReal";
import GetWorkDone from "../GetWorkDone/GetWorkDone";
import AsSeenBy from "../AsSeenBy/AsSeenBy";
import Image from "../Image/Image";
import Article from "../Article/Article";

const Home = () => {
  return (
    <div>
      <Header />
{/*        <ImageSlider images={images} />  */}
<Article/> <br/>
{/* <VideoCarousel/> */}
      <AfterCarousel/>
      <NeedSomethingDone/><br/><br/><hr/>
      <WhatsGreatAboutIt/><br/><br/><hr/>
      <MakeItReal/>
      <HomeInfo/>
      <GetWorkDone/><br/><br/><hr/>
      <AsSeenBy/>
{/*       <TrendingTopics/>
      <Statistics/>
      <DiscoverMore/><br/> */}
{/*       <Acknowledgement/><br/> */}
    <YoutubeEmbed /> 
      <FooterLinks />
      <SocialFollow />
      <Footer />
    </div>
  );
};

export default Home;
