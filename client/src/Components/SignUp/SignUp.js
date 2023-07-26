import React, { useState, useEffect } from "react";
import "../../styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';




const SignUp = () => {

  const [email, setEmail] = useState("");

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");

  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] =

    useState(false);

  const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);

  const [lastNameIsTouched, setLastNameIsTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);




  const navigate = useNavigate();

  const [err, setErr] = useState(false);




  const enteredEmailIsValid = email.trim() !== "";

  const enteredPasswordIsValid = password.trim() !== "";

  const enteredFirstNameIsValid = firstName.trim() !== "";

  const enteredLastNameIsValid = lastName.trim() !== "";

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  const passwordInputIsInvalid =

    !enteredPasswordIsValid && enteredPasswordIsTouched;

  const firstNameInputIsInvalid =

    !enteredFirstNameIsValid && firstNameIsTouched;

  const lastNameInputIsInvalid =

    !enteredLastNameIsValid && lastNameIsTouched;




  useEffect(() => {

    if (

      enteredEmailIsValid &&

      enteredPasswordIsValid &&

      enteredFirstNameIsValid &&

      enteredLastNameIsValid

    ) {

      setFormIsValid(true);

    } else {

      setFormIsValid(false);

    }

  }, [

    enteredEmailIsValid,

    enteredPasswordIsValid,

    enteredFirstNameIsValid,

    enteredLastNameIsValid,

  ]);




  const handleSubmit = async (event) => {

    event.preventDefault();

    setEnteredEmailIsTouched(true);

    if (!enteredEmailIsValid) return;

    setEnteredPasswordIsTouched(true);

    if (!enteredPasswordIsValid) return;

    setFirstNameIsTouched(true);

    if (!enteredFirstNameIsValid) return;

    setLastNameIsTouched(true);

    if (!enteredLastNameIsValid) return;




    try {
      const response = await axios.post("http://localhost:5000/api/sign-up", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 201) {

        navigate("/");

      }
    } catch (err) {

      setErr(true);

    }

    setEnteredEmailIsTouched(false);

    setEnteredPasswordIsTouched(false);

    setFirstNameIsTouched(false);




    setLastNameIsTouched(false);

    setEmail("");

    setPassword("");

    setFirstName("");

    setLastName("");

  };




  const emailInputBlurHandler = () => {

    setEnteredEmailIsTouched(true);

  };




  const firstNameBlurHandler = () => {

    setFirstNameIsTouched(true);

  };




  const lastNameBlurHandler = () => {

    setLastNameIsTouched(true);

  };




  const passwordInputBlurHandler = () => {

    setEnteredPasswordIsTouched(true);

  };




  return (

    <div className="formContainer">

      <div className="formWrapper">

        <div className="text-center">

          <h3 style={{ color: "black", fontWeight: "bolder" }}>

            Developers Inc.

          </h3>

        </div>

        <span style={{ fontWeight: "bolder", fontSize: 20 }}>Sign Up</span>

        {/*         <button

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

          &nbsp;&nbsp;Continue with Facebook

        </button> */}

        {/*       <div style={{ fontWeight: "bolder", fontSize: 15 }}> OR</div>  */}

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <input

              style={{ width: 300 }}

              className="emailInput"

              onChange={(e) => setFirstName(e.target.value)}

              onBlur={firstNameBlurHandler}

              value={firstName}

              type="text"

              placeholder="First Name"

            />

            {firstNameInputIsInvalid && (

              <span className="text-danger">

                {" "}

                <br />

                First Name must not be empty

              </span>

            )}

          </div>

          <div className="form-group">

            <input

              style={{ width: 300 }}

              className="emailInput"

              onChange={(e) => setLastName(e.target.value)}

              onBlur={lastNameBlurHandler}

              value={lastName}

              type="text"

              placeholder="Last Name"

            />

            {lastNameInputIsInvalid && (

              <span className="text-danger">

                {" "}

                <br />

                Last Name must not be empty

              </span>

            )}

          </div>

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

              <span className="text-danger">

                {" "}

                <br />

                Email must not be empty

              </span>

            )}

          </div>

          <div className="form-group pwd-container">

            <input

              style={{ width: 300 }}

              type="password"

              className="emailInput"

              onChange={(e) => setPassword(e.target.value)}

              onBlur={passwordInputBlurHandler}

              value={password}

              placeholder="Password"

            />

            {passwordInputIsInvalid && (

              <span className="text-danger">

                {" "}

                <br />

                Password must not be empty

              </span>

            )}

          </div>

          <div class="form-check">

            &nbsp;

            <input

              class="form-check-input"

              type="checkbox"

              value=""

              id="flexCheckDefault"

            />

            <label class="form-check-label" for="flexCheckDefault">

              I agree to the Developers Inc.

              <Link to="">

                User <br /> Agreement

              </Link>{" "}

              and <Link to="">Privacy Policy.</Link>

            </label>{" "}

          </div>

          <button

            style={{ width: 300, backgroundColor: "orangeRed", color: "white" }}

            type="submit"

            disabled={!formIsValid}

          >

            Sign Up

          </button>

          {err && <span>Something went wrong!</span>}

          <hr />

        </form>

        <span>

          Already have an account? <Link to="/login">Log In</Link>

        </span>

      </div>

    </div>

  );

};




export default SignUp;