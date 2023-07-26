import { Link, useNavigate } from "react-router-dom";
import BlogIcon from "../../Resources/BlogIcon.png";

const FirstHeader = () => {
  const navigate = useNavigate();
  const postProjectHandler = () => {
    navigate("/post-project")
  }
  return (
    <>
      <div style={{fontWeight: 'bolder'}} className="p-2 bg-light text-dark">
      &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; 
        <img
          style={{ width: 50, height: 40  }}
          src={BlogIcon}
          alt="Logo"
        />  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
        <Link
          className="link-dark"
          style={{  textDecoration: "none" }}
          to="/how-it-works"
        >
          How it works
        </Link>{" "}
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  
        <Link
          style={{ textDecoration: "none" }}
          className="link-dark"
          to="https://naukri.com"
        >
          Browse Jobs
        </Link>
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;    &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;    &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;        
        <Link
          style={{ textDecoration: "none" }}
          className="link-dark"
          to="/login"
        >
          Log In
        </Link>
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  
        <Link
          style={{ textDecoration: "none" }}
          className="link-dark"
          to="/signup"
        >
          Sign Up
        </Link>
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  
        <Link
          style={{ textDecoration: "none" }}
          className="link-dark"
          to="tel:8861972120"
        >
          &nbsp;📞 Call Us Now
        </Link>
        &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  

        <button
          style={{ textDecoration: "none", backgroundColor: '#F51663' }}
          onClick={postProjectHandler}
        >
          Post a Project
        </button>
      </div>
    </>
  );
};

export default FirstHeader;
