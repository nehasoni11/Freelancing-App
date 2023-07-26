import React, { useState, useEffect } from "react";
import "../../styles.css";
import { Link, useNavigate } from "react-router-dom";
import BlogIcon from "../../Resources/BlogIcon.png";
import MobileStoreButton from "react-mobile-store-button";
import hidePwdImg from "../../Resources/show-password.svg";
import showPwdImg from "../../Resources/hide-password.svg";
import axios from "axios";

const Login = () => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] =
    useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const enteredEmailIsValid = email.trim() !== "";
  const enteredPasswordIsValid = password.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;
  const passwordInputIsInvalid =
    !enteredPasswordIsValid && enteredPasswordIsTouched;

  useEffect(() => {
    if (enteredEmailIsValid && enteredPasswordIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredEmailIsValid, enteredPasswordIsValid]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEnteredEmailIsTouched(true);
    if (!enteredEmailIsValid) return;
    setEnteredPasswordIsTouched(true);
    if (!enteredPasswordIsValid) return;

    try {
      const response = await axios.post("http://localhost:5000/api/sign-in", {
        email,
        password
      });

      if (response.status === 200) {

        navigate("/");
        console.log("Login Successful")

      }
    } catch (err) {
      console.log("Error Signing in..." , err);
      setErr(true);

    }
    setEnteredEmailIsTouched(false);
    setEnteredPasswordIsTouched(false);
    setEmail("");
    setPassword("");
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordIsTouched(true);
  };

  const iosUrl = "https://google.com";
  const androidUrl = "https://google.com";

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="text-center">
          {" "}
         {/*  <img style={{ width: 30, height: 30 }} src={BlogIcon} alt="" /> &nbsp;
          &nbsp; */}
          <h3 style={{color: 'black' , fontWeight: 'bolder'}}>Developers Inc.</h3>
        </div>
        <span style={{ fontWeight: "bolder", fontSize: 20 }}>Welcome Back</span>
        <button
          style={{
            width: 300,
            color: "white",
            backgroundColor: "#3b5998",
          }}
          type="submit"
          disabled={!formIsValid}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          &nbsp;&nbsp;Log in with Facebook
        </button>
        <div style={{ fontWeight: "bolder", fontSize: 15 }}> OR</div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">

          <input
            style={{ width: 300 }}
            className="emailInput"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={emailInputBlurHandler}
            value={email}
            type="email"
            placeholder="Email"
          />
          {emailInputIsInvalid && (
            <span className="text-danger"> <br/>Email must not be empty</span>
          )}
               </div>
            <div className="form-group pwd-container">
          <input
            style={{ width: 300 }}
            type={isRevealPwd ? "text" : "password"}
            className="emailInput"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={passwordInputBlurHandler}
            value={password}
            placeholder="Password"
          />
           {/*  <img
              style={{ width: 30, height: 25 }}
              title={isRevealPwd ? "Hide password" : "Show password"}
              src={isRevealPwd ? hidePwdImg : showPwdImg}
              onClick={() => setIsRevealPwd((prevState) => !prevState)}
              alt="Show Password Icon"
            />   */}  
          {passwordInputIsInvalid && (
           <span className="text-danger"> <br/>Password must not be empty</span>
          )}
          <br/>    <br/>
      </div>
          <div class="form-check">&nbsp;
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Remember Me
            </label>{" "}
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <Link to="/resetPassword">Forgot Password?</Link>
          </div>
          <button
            style={{ width: 300, backgroundColor: 'orangeRed', color: 'white' }}
            type="submit"
            disabled={!formIsValid}
          >
            Log In
          </button>
          {err && <span>Something went wrong!</span>}
          <hr />
        </form>
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
     {/*    <div class="float-container">
          <div class="float-child">
            <MobileStoreButton
              style={{ width: 150 }}
              store="ios"
              url={iosUrl}
              linkProps={{ title: "iOS Store Button" }}
            />
          </div>
          <div class="float-child">
            <MobileStoreButton
              style={{ width: 150 }}
              store="android"
              url={androidUrl}
              linkProps={{ title: "android Store Button" }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Login;