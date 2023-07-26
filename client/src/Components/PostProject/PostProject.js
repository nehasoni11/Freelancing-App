import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const options = [
  { value: "post", label: "Post a Project" },
  { value: "start", label: "Start a contest" },
];

const budget = [
  { value: "basic", label: "Basic (100 - 400 INR)" },
  { value: "moderate", label: "Moderate (400 - 750 INR)" },
  { value: "standard", label: "Standard (750 - 1250 INR)" },
  { value: "skilled", label: "Skilled (1250 - 2500 INR)" },
  { value: "expert", label: "Expert (2500+ INR)" },
];

const type = [
  { value: "standard", label: "Standard Project" },
  { value: "recruiter", label: "Recruiter Project" },
];

const pay = [
  { value: "hour", label: "Pay by the hour" },
  { value: "fixed", label: "Pay fixed price" },
];

const PostProject = () => {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState("");
  const [enteredTimeline, setEnteredTimeline] = useState("");
  const [enteredWordcount, setEnteredWordcount] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredSkills, setEnteredSkills] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  const [enteredTimelineIsTouched, setEnteredTimelineIsTouched] =
    useState(false);
  const [enteredWordcountIsTouched, setEnteredWordcountIsTouched] =
    useState(false);
  const [enteredDescriptionIsTouched, setEnteredDescriptionIsTouched] =
    useState(false);
  const [enteredSkillsIsTouched, setEnteredSkillsIsTouched] = useState(false);

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("");
  const nameInputRef = useRef();
  const timelineInputRef = useRef();
  const wordcountRef = useRef();
  const descriptionRef = useRef();
  const skillsRef = useRef();

  const notify = () => toast(`Your project is posted successfully😍`);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredTimelineIsValid = enteredTimeline.trim() !== "";
  const enteredWordcountIsValid = enteredWordcount.trim() !== "";
  const enteredDescriptionIsValid = enteredDescription.trim() !== "";
  const enteredSkillsIsValid = enteredSkills.trim() !== "";

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const timelineInputIsInvalid =
    !enteredTimelineIsValid && enteredTimelineIsTouched;
  const wordcountInputIsInvalid =
    !enteredWordcountIsValid && enteredWordcountIsTouched;
  const descriptionInputIsInvalid =
    !enteredDescriptionIsValid && enteredDescriptionIsTouched;
  const skillInputIsInvalid = !enteredSkillsIsValid && enteredSkillsIsTouched;

  useEffect(() => {
    if (
      enteredNameIsValid &&
      enteredTimelineIsValid &&
      enteredWordcountIsValid &&
      enteredDescriptionIsValid &&
      enteredSkillsIsValid
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    enteredNameIsValid,
    enteredTimelineIsValid,
    enteredWordcountIsValid,
    enteredDescriptionIsValid,
    enteredSkillsIsValid,
  ]);

  const submitHandler = async (event) => {
    event.preventDefault();
    notify();
    setEnteredNameIsTouched(true);
    if (!enteredNameIsValid) return;
    setEnteredTimelineIsTouched(true);
    if (!enteredTimelineIsValid) return;
    setEnteredWordcountIsTouched(true);
    if (!enteredWordcountIsValid) return;
    setEnteredDescriptionIsTouched(true);
    if (!enteredDescriptionIsValid) return;
    setEnteredSkillsIsTouched(true);
    if (!enteredSkillsIsValid) return;
    setEnteredName("");
    setEnteredNameIsTouched(false);
    setEnteredTimeline("");
    setEnteredTimelineIsTouched(false);
    setEnteredWordcount("");
    setEnteredWordcountIsTouched(false);
    setEnteredDescription("");
    setEnteredDescriptionIsTouched(false);
    setEnteredSkills("");
    setSelectedOption1("");
    setSelectedOption2("");
    setSelectedOption3("");
    setSelectedOption4("");
    setEnteredSkillsIsTouched(false);
  };

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const timelineInputChangeHandler = (event) => {
    setEnteredTimeline(event.target.value);
  };

  const wordcountInputChangeHandler = (event) => {
    setEnteredWordcount(event.target.value);
  };

  const descriptionInputChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const skillInputChangeHandler = (event) => {
    setEnteredSkills(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const timelineInputBlurHandler = () => {
    setEnteredTimelineIsTouched(true);
  };
  const wordcountInputBlurHandler = () => {
    setEnteredWordcountIsTouched(true);
  };

  const descriptionInputBlurHandler = () => {
    setEnteredDescriptionIsTouched(true);
  };

  const skillInputBlurHandler = () => {
    setEnteredSkillsIsTouched(true);
  };

  return (
    <div style={{ padding: 60 }} className=" formContainer1">
      <div className="formWrapper1">
        <br />
        <h1 style={{ fontWeight: "bolder" }}>Tell Us What You Need Done</h1>
        <p style={{ fontFamily: "verdana", fontSize: 15 }} className="text-center">
          Contact skilled freelancers within minutes. View profiles, ratings,
          portfolios and chat with them. Pay the <br />
          freelancer only when you are 100% satisfied with their work.
        </p>
        <h2 style={{ fontWeight: "bolder" }} className="contactUsText1 mx-auto">
          Post a Project
        </h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input
              style={{ width: 600 }}
              onBlur={nameInputBlurHandler}
              value={enteredName}
              className="form-control"
              onChange={nameInputChangeHandler}
              required
              ref={nameInputRef}
              type="text"
              placeholder="Choose a name for your project*"
            />

            {nameInputIsInvalid && (
              <p className="text-danger">Project Name must not be empty</p>
            )}
            <br />
          </div>
          <div className="form-group">
            <input
              style={{ width: 600 }}
              onBlur={timelineInputBlurHandler}
              value={enteredTimeline}
              className="form-control"
              onChange={timelineInputChangeHandler}
              required
              ref={timelineInputRef}
              type="text"
              placeholder="What is the expected timeline for completion? (Eg: 2 - 3 months / 2 months)
                *"
            />
            {timelineInputIsInvalid && (
              <p className="text-danger">Timeline must not be empty</p>
            )}
            <br />
          </div>
          <div className="form-group">
            <input
              style={{ width: 600 }}
              onBlur={wordcountInputBlurHandler}
              value={enteredWordcount}
              className="form-control"
              onChange={wordcountInputChangeHandler}
              required
              ref={wordcountRef}
              type="text"
              placeholder="What is the word count requirement for the content? (Eg: 500-1000 words)*"
            />
            {wordcountInputIsInvalid && (
              <p className="text-danger">Word count must not be empty</p>
            )}
            <br />
          </div>
          <div className="form-group">
            <textarea
              style={{ width: 600 }}
              required
              className="form-control"
              onBlur={descriptionInputBlurHandler}
              value={enteredDescription}
              ref={descriptionRef}
              onChange={descriptionInputChangeHandler}
              rows="6"
              cols="88"
              placeholder="Project Description"
            />
            {descriptionInputIsInvalid && (
              <p className="text-danger">Please input your description.</p>
            )}
          </div>
          <br />
          <div className="form-group">
            <input
              style={{ width: 600 }}
              onBlur={skillInputBlurHandler}
              value={enteredSkills}
              className="form-control"
              onChange={skillInputChangeHandler}
              required
              ref={skillsRef}
              type="text"
              placeholder="Enter skills here (Eg: Java, HTML, CSS, Javascript)*"
            />
            {skillInputIsInvalid && (
              <p className="text-danger">Skill must not be empty</p>
            )}
          </div>
          <br />
          <div style={{ width: 600 }} className="form-group">
            <Select
              style={{ width: 600 }}
              placeholder="How would you like to get it done?"
              options={options}
              value={selectedOption1}
              onChange={setSelectedOption1}
            />
          </div>
          <br />
          <div style={{ width: 600 }} className="form-group">
            <Select
              style={{ width: 600 }}
              placeholder="How would you want to pay?"
              options={pay}
              value={selectedOption2}
              onChange={setSelectedOption2}
            />
          </div>
          <br />
          <div style={{ width: 600 }} className="form-group">
            <Select
              style={{ width: 600 }}
              placeholder="What is your estimated budget?"
              options={budget}
              value={selectedOption3}
              onChange={setSelectedOption3}
            />
          </div>
          <br />
          <div style={{ width: 600 }} className="form-group">
            <Select
              style={{ width: 600 }}
              placeholder="What type of project are you posting?"
              options={type}
              value={selectedOption4}
              onChange={setSelectedOption4}
            />
          </div>{" "}
          <br />
          <button disabled={!formIsValid} className="btn btn-primary">
            Post my Project
          </button>{" "}
          <br />
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default PostProject;
