import "../../Styles/styles.css";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="p-3 mb-2 bg-dark text-white text-center">
      <Link style={{color: 'white'}} to="/academics">Free course</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/holisticDevelopment">Blog</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/newsLetter">Interviews</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/admission">SEO for developers</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/aboutUs">Developer Blogs</Link> &nbsp; &nbsp; &nbsp; &nbsp; <br/>  <br />
      <Link style={{color: 'white'}} to="/why-kanishka?">HOME</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/testimonials">Join Us</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/careers">Live Events</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/contactUs">Reset Password</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/parentLogin">LOG IN</Link> &nbsp; &nbsp; &nbsp; &nbsp;
      <Link style={{color: 'white'}} to="/privacy-policy">Privacy Policy</Link> &nbsp; &nbsp; &nbsp; &nbsp;<br /> <br />
      Contact Us On : 888-645-9510
    </div>
  );
};

export default FooterLinks;