import React, { useState } from "react";
import "./Podcast.css";
import image1 from "./podcastImg.png";
import image2 from "./podcastLeftImg.png";
import Support from "../../UI/Support";
import Button from "../../UI/Button";
import { useHistory } from "react-router-dom";
import playIcon from "./playIcon.png";
import {Link} from 'react-router-dom'

function Podcast() {
  const history = useHistory();
  const [visible, setVisible] = useState(5);

  const loadHandler = () => {
    setVisible((preState) => preState + 3);
  };

  const handleClick = () => {
    history.push("/Podcast-details/podcast-Id");
  };
  return (
    <div className="podcast">
      <Support />
      <img src={image1} alt="podcast" className="img-fluid" />
      <h1 className="my-2 my-md-4">Latest Health Podcasts</h1>
      {[...new Array(20)].slice(0, visible).map((jobs, idx) => (
        <div
          className="podcast_cont d-flex flex-column flex-md-row mx-auto py-3 py-md-4"
          key={idx}
        >
          <div className="Left_part me-md-4">
            <img src={image2} alt="left_img" className="left_img img-fluid" />
            <div
              className="border-img"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCSgsFbo49UXvnTJA73Sm4YQ",
                  "_blank"
                )
              }
            >
              <img src={playIcon} className="play-icon" alt="" />
            </div>
          </div>

          <div className="right_part p-0 p-md-2 mt-2 mt-md-0">
            <h2>Eliminating unnecessary and redundant paperwork</h2>
            <p>
              With the advancing technology and everything getting digital, now
              it's time to let go of your paper files and documents and get on
              our online platform and ease your
            </p>
            <section className="d-flex flex-column flex-md-row information">
              <span className="Podcast__date">July 19, 2021</span>
              <span className="Podcast__place ms-0 ms-md-5 mb-2 mb-md-0">
                by <span>this week in health IT</span>
              </span>
            </section>

            <Button className="podcastButton" buttonClicked={handleClick}>
              Read More
            </Button>
          </div>
        </div>
      ))}
      <Button buttonClicked={loadHandler}>Load More</Button>

      <div className="news-footer podcast-news-footer w-100 d-flex mb-1 mb-md-3 ps-md-4">
        <Link to='#'>News</Link>
        <Link to='#'>Events</Link>
        <Link to='/Podcast'>Podcasts</Link>
        <Link to='/Blogs'>Our Blogs</Link>
      </div>
    </div>
  );
}

export default Podcast;
