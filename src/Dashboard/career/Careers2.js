import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import "./Careers.css";

function SimpleAccordion() {

  const formSubmitHandler =(e) => {
    e.preventDefault()
  }
  return (
    <div className="Job-details">
      <Accordion>
        <AccordionSummary className="w-100">
          <div className="PostCard d-md-flex">
            <div className="PostCard__left">
              <h3>Marketing Manager(2 Posts)</h3>
              <p>Chennai - India</p>
            </div>
            <p> Posted 3 day ago</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="Job-details__des p-2 p-md-4">
            <h5 className='mb-0'>Position Description</h5>
            Visionary is seeking a Marketing Manager, to manage constructing and
            team execution of Salesforce CRM and campaigns to dos. Additionally,
            the marketing manager will grow into a role to oversee Visionary's
            multi channel communications messaging, which could grow into a
            director role. The responsibilities for this position include the
            following:
            <h5 className='my-2 my-md-4'>Marketing Manager:</h5>
            <ul>
              <li>
                Highly experienced with email marketing compositions in brand
                voice, different styles
              </li>
              <li>CRM Management</li>
              <li> Marketing Automation</li>
              <li>
                Managing associates executing data and email/calling campaigns
              </li>
              <li>Social media </li>
              <li>Marketing Department Essentials </li>
            </ul>
            <h5 className='my-2 my-md-4'>Marketing Director:</h5>
            <ul>
              <li>Overseeing Visionary’s Brand</li>
              <li>Messaging </li>
              <li> Involvement with Influencers and VIPS</li>
              <li>Viral Growth Strategies</li>
            </ul>
            <h5 className='mb-0 mt-2 mt-md-5'>Compensation:</h5>
            The position is remote. Immediate opportunity for someone to join as
            a full time equivalent consultant with Salesforce/marketing
            automation and project management experience/aptitude, 40+/hour
            consulting role with opportunities for Equity/Access Credits upside,
            or Part-time daily consulting to manage marketing campaigns, with
            the goal of phasing into 40+ hours per week involvement and designed
            to enable mutual finalization while taking on paid training and
            getting a feel for Visionary's team/active projects
            <p className='mt-2 mt-md-5'>
              Please provide the following information to start your application
              process:
            </p>
            <form className='Job-details__form m-1 m-md-4 py-2 py-md-4'  onSubmit= {formSubmitHandler}>
              <input
                className="inputFields"
                type="text"
                placeholder="Full Name"
              ></input>
              <input
                className="inputFields"
                type="text"
                placeholder="Email"
              ></input>{" "}
              <input
                className="inputFields"
                type="text"
                placeholder="Cell Phone No."
              ></input>
              <input
                className="inputFields"
                type="text"
                placeholder="LinkedIn"
              ></input>
              <label htmlFor="cv">Attach CV</label>
              <input className="inputFields" id= 'cv'type="file" placeHoler= 'Attach CV'></input>
              <input
                className="inputFields"
                type="text"
                placeholder="Portfolio Link"
              ></input>
              <textarea
                className="inputFields"
                type="text"
                placeholder="Why do you think you are a good fit for this position?"
              ></textarea>
              <button>Submit Application </button>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
