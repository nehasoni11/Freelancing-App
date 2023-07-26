import React, { useState, useEffect } from "react";
import "../../Styles/styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {

  const [email, setEmail] = useState("");

  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const enteredEmailIsValid = email.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;




  useEffect(() => {

    if (enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }

  }, [enteredEmailIsValid]);




  const handleSubmit = async (event) => {

    event.preventDefault();
    setEnteredEmailIsTouched(true);
    if (!enteredEmailIsValid) return;

    try {
      const response = await axios.post("http://localhost:5000/api/forgot-password", {
        email
      });

      if (response.status === 200) {

        navigate("/login");

      }
    } catch (err) {
      console.log("Error Signing in..." , err);
      setErr(true);

    }

    setEnteredEmailIsTouched(false);
    setEmail("");

  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);

  };




  return (

    <div className="formContainer">
      <div className="formWrapper">
        <div className="text-center">
          {" "}

         {/*  <img style={{ width: 30, height: 30 }} src={BlogIcon} alt="" /> &nbsp;

          &nbsp; */}
          <h3 style={{color: 'black' , fontWeight: 'bolder'}}>Developers Inc.</h3>
        </div>
        <span style={{ fontWeight: "bolder", fontSize: 20 }}>Reset Your Password</span>
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
            <span className="text-danger"> <br/>Reset Email must not be empty</span>
          )}
               </div>
               <br/>
          <button
            style={{ width: 300, backgroundColor: 'orangeRed', color: 'white' }}
            type="submit"
            disabled={!formIsValid}
          >
            Send Password Reset Email
          </button>
          <br/>
          {err && <span>Something went wrong!</span>}
        </form>
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default ResetPassword;