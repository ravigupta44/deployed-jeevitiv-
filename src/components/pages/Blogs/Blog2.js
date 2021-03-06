import React from "react";
import Support from "../../UI/Support";
import "./blogs2.css";
import image1 from "./careerss.png";
import { sample } from "./sample";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "../../UI/Button";
import {
    Facebook,
    Twitter,
    LinkedIn,
  } from "@material-ui/icons";


  const Blogs_details= () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/Blogs");
      };
      return (
          <div className="blogs-details">
            <Support/>
            <img src={image1} className="img-fluid" alt=''/><br/><br/>
            <div className="blog_head p-0 p-md-2 mt-4 mt-md-2">
            <section className="d-flex flex-column flex-md-row information">
            <span className="blog_date">June 9, 2021</span>
              <span className="blog_place ms-0 ms-md-5 mb-2 mb-md-0">
               <span>ADMIN</span><br/><br/>
          </span>
          </section>
          <h2>Scary Thing That You Don’t Get Enough Sleep</h2>
          <div className="blog-article mt-1 mt-md-3">
          {sample.map(({ heading, content }) => (
            <>
              <h5>{heading}</h5>
              <p className=" mb-md-3">{content}</p>
            </>
          ))}
        </div></div>
        <Button  buttonClicked={handleClick}>Back to Blogs</Button>
        <div className="blog_head p-0 p-md-2 mt-4 mt-md-2">
        <div className="news-footer blog-news-footer w-100 d-flex flex-column flex-md-column mb-1 mb-md-3">
        <section className="d-flex blog-social-media w-100 justify-content-center align-items-center">
          {/*<span className='me-1'> SHARE</span>*/}
          <li
            className="blog-social-media-icons"
            onClick={() =>
              window.open(
                "https://www.facebook.com/Jeevitiv-103368022000583",
                "_blank"
              )
            }
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </li>
          <li
            className="blog-social-media-icons"
            onClick={() =>
              window.open("https://twitter.com/jeevitiv", "_blank")
            }
          >
            <IconButton>
              <Twitter />
            </IconButton>
          </li>
         
          <li
            className="blog-social-media-icons"
            onClick={() =>
              window.open("https://in.linkedin.com/company/jeevitiv", "_blank")
            }
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </li>
        </section>
        <br/><div className="child-news-footer w-100 d-md-flex justify-content-center align-items-center my-2 my-md-0">
          <Link to="#">News</Link>
          <Link to="#">Events</Link>
          <Link to="/Podcast">Podcasts</Link>
          <Link to="/Blogs">Our Blogs</Link>
        </div>
      </div>


            </div>

          </div>
      )
  }
  export default Blogs_details;