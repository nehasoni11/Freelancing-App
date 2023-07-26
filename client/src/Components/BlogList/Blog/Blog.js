import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../../Configuration/Data";
import Chip from "../Chip/Chip";
import EmptyList from "../EmptyList";
import { ToastContainer, toast } from "react-toastify";
import * as Icon from "react-bootstrap-icons";
import "./styles.css";
import { Link } from "react-router-dom";
import Contact from "../../ContactDeveloper/ContactDeveloper";
//import { ArrowBack } from "@material-ui/icons";
import FooterLinks from "../../Footer/FooterLinks";
import SocialFollow from "../../SocialFollow/SocialFollow";
import Footer from "../../Footer/Footer";
import FirstHeader from "../../Header/FirstHeader";
import SecondHeader from "../../Header/SecondHeader";

const Blog = () => {
  const [enteredBid, setEnteredBid] = useState("");
  const [enteredMail, setEnteredMail] = useState("");
  const notify = () => toast(`You bid this project for ${enteredBid} INR🥳`);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => { 
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [id]);

  const bidHandler = (event) => {
    event.preventDefault();
enteredBid !== "" && enteredMail !== "" && notify();
    setEnteredBid("");
    setEnteredMail("");
  };

  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <article
        style={{
          backgroundImage: `url(https://www.f-cdn.com/assets/img/pvp/logged-out-pvp-content/header-desktop-60020424.jpg)`,
          height: 300,
        }}
      >
         <Link style={{color: 'white'}} className="blog-goBack" to="/">
        <br />
        <h3>
          &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp; 
          {/* <ArrowBack /> */}
          <span>&nbsp;&nbsp;Go Back</span>
        </h3>
      </Link>
      </article>  <br/>
      <div class="container">
        <div class="row">
          <div className="blog-wrap">
            <div class="col-12">
              {blog ? (
                <>
                  <header>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h1
                        style={{ margin: 0, display: "inline", float: "left" }}
                      >
                        {blog.title}
                      </h1>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <h2
                        style={{ margin: 0, display: "inline", float: "right" }}
                      >
                        &nbsp; &nbsp; {blog.cost}
                      </h2>
                    </div>
                    <br />
                    <div
                      style={{ margin: 0, display: "inline", float: "left" }}
                      className="blog-subCategory1"
                    >
                      <Chip label={blog.status} />
                    </div>
                    <p
                      style={{ margin: 0, display: "inline", float: "right" }}
                      className="blog-date"
                    >
                      Posted {blog.minutes} minutes ago
                    </p>
                    <p>
                      {" "}
                      &nbsp; <Icon.Dot /> &nbsp;Ends in {blog.ends}&nbsp;{" "}
                      <Icon.Dot />{" "}
                      <p
                        style={{
                          margin: 0,
                          display: "inline",
                          float: "center",
                        }}
                        className="blog-date"
                      >
                        &nbsp; Paid on Delivery
                      </p>
                    </p>
                    <div className="blog-subCategory">
                      {blog.subCategory.map((category, i) => (
                        <div key={i}>
                          <Chip label={category} />
                        </div>
                      ))}
                    </div>
                  </header>
                  <img src={blog.cover} alt="cover" /> <br /> <br />
                  <br />
                  <div>
                    <h3>About the Project</h3>
                    <br />
                    <Link
                      style={{ textDecoration: "none" }}
                      className="link-dark"
                    >
                      💌24 Proposals
                    </Link>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Link
                      style={{ textDecoration: "none" }}
                      className="link-dark"
                    >
                      {" "}
                      🎟️Open for bidding
                    </Link>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Link
                      style={{ textDecoration: "none" }}
                      className="link-dark"
                    >
                      📍Remote Project{" "}
                    </Link>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Link
                      style={{ textDecoration: "none" }}
                      className="link-dark"
                    >
                      🕜Active 6 minutes ago{" "}
                    </Link>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                  </div>
                  <br />
                  <h3>Place your bid</h3> <br />
                  <form>
                  <h6>Bid Amount</h6>
                  <div class="input-group mb-2">
                    <input
                      value={enteredBid}
                      onChange={(e) => setEnteredBid(e.target.value)}
                      type="number"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Enter your bid amount"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">INR</div>
                    </div>
                  </div>
                  <h6>Email Address</h6>
                  <div class="input-group mb-2">
                    <input
                      value={enteredMail}
                      onChange={(e) => setEnteredMail(e.target.value)}
                      type="email"
                      class="form-control"
                      id="inlineFormInputGroup"
                      placeholder="Enter your developers inc mail id"
                    />
                    <div class="input-group-prepend">
                      <div class="input-group-text">@developersinc.com</div>
                    </div>
                  </div>{" "}
                  <button
                    onClick={bidHandler}
                    style={{ width: 670 }}
                    className="btn btn-primary"
                  >
                    Bid on the project
                  </button>
                  </form> 
                  <ToastContainer /> <br /> <br />
                  <h3>Benefits of bidding on Developers Inc.</h3>
                  🎯Set your budget and timeframe <br />
                  🎯Get paid for your work <br />
                  🎯Outline your proposal <br />
                  🎯It's free to sign up and bid on jobs <br />
                  <br /> <br />
                  <h4>
                    6 freelancers are bidding on average ₹5166 for this job
                  </h4>
                  <hr />
                  <div className="text-left">
                    <img
                      style={{
                        width: 200,
                        height: 200,
                        margin: 0,
                        display: "inline",
                        float: "left",
                      }}
                      src={blog.authorAvatar}
                      alt="cover"
                    />
                    <br /> <br /> <br />
                    <p>
                      {" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {blog.authorName}
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {blog.cost} in {blog.ends}
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⭐⭐⭐⭐⭐(28
                      ratings)
                    </p>
                    <br />
                    <p>{blog.response}</p>
                  </div>
                  <hr />
                </>
              ) : (
                <EmptyList />
              )}
            </div>{" "}
          </div>{" "}
        </div>
        <div class="col-6">
          <Contact />
        </div>
      </div>
      <FooterLinks />
      <SocialFollow />
      <Footer />
    </>
  );
};

export default Blog;
