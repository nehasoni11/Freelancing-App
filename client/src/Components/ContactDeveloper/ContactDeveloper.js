import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { Tooltip } from "react-tooltip";
import * as Icon from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
const options = [
  { value: "MERN Stack", label: "MERN Stack" },
  { value: "MEAN Stack", label: "MEAN Stack" },
  { value: "Javascript", label: "Javascript" },
  { value: "React JS", label: "React JS" },
  { value: "Node JS", label: "Node JS" },
  { value: "Mongo DB", label: "Mongo DB" },
  { value: "Java", label: "Java" },
  { value: "Typescript", label: "Typescript" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
];

const Contact = () => {
  const navigate = useNavigate();

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredTechnology, setEnteredTechnology] = useState(null);
  const [enteredQuery, setEnteredQuery] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [enteredPhoneIsTouched, setEnteredPhoneIsTouched] = useState(false);
  const [enteredTechnologyIsTouched, setEnteredTechnologyIsTouched] =
    useState(false);
  const [enteredQueryIsTouched, setEnteredQueryIsTouched] = useState(false);
  const notify = () => toast(`New inquiry from ${enteredName}😍`);
  const nameInputRef = useRef();
  const TechnologyInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();
  const queryInputRef = useRef();

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const enteredPhoneIsValid = enteredPhone.trim() !== "";
  const enteredTechnologyIsValid = enteredTechnology !== "";
  const enteredQueryIsValid = enteredQuery.trim() !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;
  const phoneInputIsInvalid = !enteredPhoneIsValid && enteredPhoneIsTouched;
  const technologyInputIsInvalid =
    !enteredTechnologyIsValid && enteredTechnologyIsTouched;
  const queryInputIsInvalid = !enteredQueryIsValid && enteredQueryIsTouched;

  useEffect(() => {
    if (
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredQueryIsValid &&
      enteredTechnologyIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    enteredNameIsValid,
    enteredEmailIsValid,
    enteredPhoneIsValid,
    enteredQueryIsValid,
    enteredTechnologyIsValid,
  ]);

  const submitHandler = async (event) => {
    event.preventDefault();
    notify();
    setEnteredNameIsTouched(true);
    if (!enteredNameIsValid) return;
    setEnteredEmailIsTouched(true);
    if (!enteredEmailIsValid) return;
    setEnteredPhoneIsTouched(true);
    if (!enteredPhoneIsValid) return;
    setEnteredQueryIsTouched(true);
    if (!enteredQueryIsValid) return;
    setEnteredTechnologyIsTouched(true);
    if (!enteredTechnologyIsValid) return;
    console.log(enteredName);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredQuery("");
    setEnteredTechnology("");
    setEnteredNameIsTouched(false);
    setEnteredEmailIsTouched(false);
    setEnteredPhoneIsTouched(false);
    setEnteredTechnologyIsTouched(false);
    setEnteredQueryIsTouched(false);
    await fetch(
      "https://homepageform-default-rtdb.firebaseio.com/contactUs.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    function sendNotification(text, user) {
      const notification = new Notification(
        `New inquiry from ${enteredName}😍`,
        {
          icon: "https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-22-512.png",
          body: `@${user}: ${text}`,
        }
      );
      notification.onclick = () =>
        function () {
          window.open("http://localhost:3000");
        };
    }

    const checkPageStatus = () => {
      if (!("Notification" in window)) {
        alert("This browser does not support system notifications!");
      } else if (Notification.permission === "granted") {
        sendNotification(enteredQuery, enteredName);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission((permission) => {
          if (permission === "granted") {
            sendNotification(enteredQuery, enteredName);
          }
        });
      }
    };
    checkPageStatus(enteredQuery, enteredName);
  };

  const formData = {
    name: enteredName,
    email: enteredEmail,
    phone: enteredPhone,
    query: enteredQuery,
  };

  console.log(formData);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const technologyInputChangeHandler = (event) => {
    setEnteredTechnology(event);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneInputChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const queryInputChangeHandler = (event) => {
    setEnteredQuery(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const technologyInputBlurHandler = () => {
    setEnteredTechnologyIsTouched(true);
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const phoneInputBlurHandler = () => {
    setEnteredPhoneIsTouched(true);
  };

  const queryInputBlurHandler = () => {
    setEnteredQueryIsTouched(true);
  };

  localStorage.setItem("menu", "contact");

  const postProjectHandler = () => {
    navigate("/post-project");
  };

  return (
    <React.Fragment>
      <div className="row">
        {/*      <div className="mx-auto col-10 col-md-8 col-lg-6">  */}
        <div className="mx-auto col-7">
          <button
            style={{
              textDecoration: "none",
              backgroundColor: "#F51663",
              width: 300,
            }}
            onClick={postProjectHandler}
          >
            Post a project like this
          </button>
          <br />
          <br />
          <br />
          <h3>About the Client</h3> <br />
          🏴 New York, USA <br />
          🧑⭐⭐⭐⭐⭐5.0 💬25
          <br />
          ✅Payment method verified
          <br />
          ⏰Member since Jan 04, 2019
          <br /> <br />
          <div>
            <h3>Client Verification</h3>
            <br />
            <Link
              className="link-dark"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Payment Verified"
            >
              {" "}
              <Icon.CurrencyDollar />
            </Link>
            <Tooltip id="my-tooltip" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              className="link-dark"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Email Verified"
            >
              {" "}
              <Icon.Mailbox />{" "}
            </Link>
            <Tooltip id="my-tooltip" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              className="link-dark"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Phone Verified"
            >
              {" "}
              <Icon.TelephoneFill />{" "}
            </Link>
            <Tooltip id="my-tooltip" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              className="link-dark"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Completed Profile 100%"
            >
              {" "}
              <Icon.Person />{" "}
            </Link>
            <Tooltip id="my-tooltip" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              className="link-dark"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Made a Deposit"
            >
              {" "}
              <Icon.Bank />{" "}
            </Link>
            <Tooltip id="my-tooltip" />
          </div>
          <br /> <br />
          <h3>Other jobs from this client</h3>
          <Link /* class="link-dark" */ to="">
            Need an owncloud file storage expert <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            Need advice on microsoft power apps licensing
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            instagram promoters and campaigne
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            AZURE SQL and Running Reports
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            MDM Manage Engine Endpoint Expert Required
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            I need a video editing professional
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            Busco un editor profesional de vídeos y Streaming’s
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark"  */ to="">
            Video Content Creator For My Burger Shop
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            video editing and graphic design
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            Event assistant
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            Short Marketing Video for Construction Time Lapse
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            Youtube video thumbnail making
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            Video editor needed, to edit reels made by our customers/influencers
            and models. Only text addition needed.
            <br />
            <h6>£5-10 GBP / hour</h6>
          </Link>
          <Link /* class="link-dark" */ to="">
            2D animation -- 2<br />
            <h6>£5-10 GBP / hour</h6>
          </Link>        <br />        <br />
          <h2 className="contactUsText mx-auto">Contact Developer</h2>
          <br />
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input
                onBlur={nameInputBlurHandler}
                value={enteredName}
                className="form-control"
                onChange={nameInputChangeHandler}
                required
                ref={nameInputRef}
                type="text"
                placeholder="Name*"
              />

              {nameInputIsInvalid && (
                <p className="text-danger">Name must not be empty</p>
              )}
              <br />
            </div>
            <div className="form-group">
              <input
                onBlur={emailInputBlurHandler}
                value={enteredEmail}
                className="form-control"
                onChange={emailInputChangeHandler}
                required
                ref={emailInputRef}
                type="email"
                placeholder="Email address*"
              />
              {emailInputIsInvalid && (
                <p className="text-danger">Email must not be empty</p>
              )}
              <br />
            </div>
            <div className="form-group">
              <input
                onBlur={phoneInputBlurHandler}
                value={enteredPhone}
                className="form-control"
                onChange={phoneInputChangeHandler}
                required
                ref={phoneInputRef}
                type="number"
                placeholder="Contact Number*"
              />
              {phoneInputIsInvalid && (
                <p className="text-danger">Phone must not be empty</p>
              )}
              <br />
            </div>
            <div className="form-group">
              <Select
                placeholder="Technology enquiring about*"
                ref={TechnologyInputRef}
                onBlur={technologyInputBlurHandler}
                value={enteredTechnology}
                onChange={technologyInputChangeHandler}
                options={options}
              />
              {technologyInputIsInvalid && (
                <p className="text-danger">Technology must not be empty</p>
              )}
              <br />
            </div>
            <div className="form-group">
              <textarea
                required
                className="form-control"
                onBlur={queryInputBlurHandler}
                value={enteredQuery}
                ref={queryInputRef}
                onChange={queryInputChangeHandler}
                rows="6"
                cols="88"
                placeholder="Ask us your queries"
              />
              {queryInputIsInvalid && (
                <p className="text-danger">
                  Please input your query. We would be happy to assist you!
                </p>
              )}
            </div>
            <button
              disabled={!formIsValid}
              type="submit"
              className="btn btn-primary text-center btn-customized mt-4"
              onClick={submitHandler}
            >
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
      <br />
    </React.Fragment>
  );
};

export default Contact;
