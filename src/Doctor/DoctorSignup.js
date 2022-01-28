import React from "react";
import "./DoctorSignup.css";
import image1 from "./login.png";
import image from "./logo.png";
import {useHistory} from 'react-router-dom'

const DoctorSignup = () => {
  const history = useHistory()
  const formSubmitHandler = (e) => {
    e.preventDefault();
    history.push('/login/doctor')
  };
  return (
    <div className="DoctorSignupForm">
      <div className="image_container p-3">
        <img
          src={image}
          className="img-fluid companyLogo my-3 my-md-4"
          alt=""
        />
        <img src={image1} className="img-fluid docSignUpImg" alt="" />
      </div>
      <div className="signUp-form__container">
        <h2 className="signUp-form_heading">Sign up</h2>
        <h4 className="signUp-form_subheading">Create a new account</h4>
        <form onSubmit={formSubmitHandler}>
          <input className="Input1" type="text" placeholder="Full Name"></input>
          <section className="d-flex ">
            <input className="Input1" type="text" placeholder="Gender"></input>
            <input
              className="Input1"
              type="text"
              placeholder="Date of Birth"
            ></input>
          </section>
          <input
            className="Input1"
            type="text"
            placeholder="Email Address"
          ></input>
          <input
            className="Input1"
            type="text"
            placeholder="Telephone No."
          ></input>
          <section className="d-flex ">
            <input
              className="Input1"
              type="text"
              placeholder="Home Address"
            ></input>
            <input
              className="Input1"
              type="text"
              placeholder="Pin Code"
            ></input>
          </section>
          <section className="d-flex ">
            <input className="Input1" type="text" placeholder="City"></input>
            <input className="Input1" type="text" placeholder="Country"></input>
          </section>

          <input
            className="Input1"
            type="text"
            placeholder="Hospital working with"
          ></input>
          <section className="d-md-flex ">
            <input
              className="Input1"
              type="password"
              placeholder="Password"
            ></input>
            <input
              className="Input1"
              type="password"
              placeholder="Confirm Password"
            ></input>
          </section>

          <div className="checkbox_container">
              <input type="checkbox" />
              <label>
                I have read and agree with all <span>Term and Conditions.</span>
              </label>
            </div>
            <div className="checkbox_container">
              <input type="checkbox" />
              <label>
                I have read and agree with <span>Privacy Policy.</span>
              </label>
            </div>

          <button className="d-block  rounded-1">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default DoctorSignup;
