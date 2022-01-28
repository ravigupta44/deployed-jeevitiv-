import React, { useState } from "react";
import "./Careers.css";
import JobDetails from "./Careers2";
import Button from "../../components/UI/Button";
import Support from "../../components/UI/Support";
import image1 from "./careers.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import Employees from './Employees'

const Careers = () => {
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const loadHandler = () => {
    setVisible((preState) => preState + 3);
  };
  return (
    <div className="Career">
      <Support />
      <img className="img-fluid w-100" src={image1} alt=''/>
      <div className="CareersHeading">JOB OPENINGS</div>
      <div className="CareersSub px-md-1 px-5">
        Submit your quires here and we will get back to you as soon as possible.
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="Careers__des d-flex mb-md-3 mb-2">
        <span className="Careers__des__heading">28 Positions Available</span>
        <span className="Careers__des__DropDown d-md-flex text-end">
          <Dropdown className="m-0">
            <Dropdown.Toggle id="dropdown-basic">Sort By</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Internship</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Job</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Experience</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="m-0">
            <Dropdown.Toggle id="dropdown-basic">Department</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Human Resource</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Marketing</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Developing</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </div>
      {[...new Array(28)].slice(0, visible).map((jobs, idx) => (
        <JobDetails key={idx} />
      ))}
      <Button buttonClicked={loadHandler}>Load More</Button>
      <Employees/>
    </div>
  );
};

export default Careers;
