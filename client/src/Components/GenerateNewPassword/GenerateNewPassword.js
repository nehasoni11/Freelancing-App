import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const GenerateNewPassword = () => {

  const [password, setpassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [enteredpasswordIsTouched, setpasswordIsTouched] = useState(false);
  const [enteredPassword2IsTouched, setPassword2IsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const {id, token} = useParams()

  const navigate = useNavigate();

  const [err, setErr] = useState(false);
  const enteredpasswordIsValid = password.trim() !== "";
  const enteredPassword2IsValid = password2.trim() !== "";
  const passwordInputIsInvalid = !enteredpasswordIsValid && enteredpasswordIsTouched;
  const password2InputIsInvalid = !enteredPassword2IsValid && enteredPassword2IsTouched;

  useEffect(() => {

    if (enteredpasswordIsValid && enteredPassword2IsValid) {
      setFormIsValid(true);

    } else {
      setFormIsValid(false);
    }
  }, [enteredpasswordIsValid, enteredPassword2IsValid]);




  const handleSubmit = async (event) => {
    event.preventDefault();
    setpasswordIsTouched(true);
    if (!enteredpasswordIsValid) return;
    setPassword2IsTouched(true);
    if (!enteredPassword2IsValid) return;

    try {
        const response = await axios.post(`http://localhost:5000/api/reset-password/${id}/${token}`, {
          password: password2,
        });
  
        if (response.status === 200) {
  
          navigate("/login");
  
        }
      } catch (err) {
        console.log("Error Setting New Password..." , err);
        setErr(true);
  
      }

    setpasswordIsTouched(false);
    setPassword2IsTouched(false);
    setpassword("");
    setPassword2("");

  };

  const passwordInputBlurHandler = () => {
    setpasswordIsTouched(true);

  };

  const password2InputBlurHandler = () => {
    setPassword2IsTouched(true);

  };
 

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="text-center">
          {" "}
          {/*  <img style={{ width: 30, height: 30 }} src={BlogIcon} alt="" /> &nbsp;
            &nbsp; */}
          <h3 style={{ color: "black", fontWeight: "bolder" }}>
            Developers Inc.
          </h3>
        </div>
        <span style={{ fontWeight: "bolder", fontSize: 20 }}>
          Reset Your Password
        </span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              style={{ width: 300 }}
              className="emailInput"
              onChange={(e) => setpassword(e.target.value)}
              onBlur={passwordInputBlurHandler}
              value={password}
              type="password"
              placeholder="New Password"
            />
            {passwordInputIsInvalid && (
              <span className="text-danger">
                {" "}
                <br />
                New Password must not be empty
              </span>
            )}
          </div>
          <div className="form-group">
            <input
              style={{ width: 300 }}
              className="emailInput"
              onChange={(e) => setPassword2(e.target.value)}
              onBlur={password2InputBlurHandler}
              value={password2}
              type="password"
              placeholder="Confirm New Password"
            />
            {password2InputIsInvalid && (
              <span className="text-danger">
                {" "}
                <br />
                Confirm New Password must not be empty
              </span>
            )} 
          </div>
          <button
            style={{ width: 300, backgroundColor: "orangeRed", color: "white" }}
            type="submit"
            disabled={!formIsValid}
          >
            Generate New Password
          </button>
          {err && <span>Something went wrong!</span>}
          <hr />
        </form>
        <span>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default GenerateNewPassword;