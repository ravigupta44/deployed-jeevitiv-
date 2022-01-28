import React from "react";
import { useState } from "react";
import "./Blog.css";
import Support from "../../UI/Support";
import Button from "../../UI/Button";

import { Box } from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";
import MediaCard from "./MediaCard";
// import Pagination from "@material-ui/lab/Pagination";


  const Blog = () => {
    const [input, setInput] = useState("");
    const [visible, setVisible] = useState(4);
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const loadHandler = () => {
      setVisible((preState) => preState + 4);
    };
  return (
    <div className="Blog">
      <Support />
      <div className="BlogHeading">BLOGS</div>
      <div className="BlogSub px-md-1 px-5">
      Read new blogs over here!
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
      {/* <Header /> */}
      {/*<Box display="flex" justifyContent="space-around" flexWrap="wrap">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </Box>
      <div className="events_demobtn">
        <button
          type="button"
          display="flex"
          justifyContent="center"
          className="demo_btn"
        >
          LOAD MORE
        </button>
  </div>*/}<Box display="flex" justifyContent="space-around" flexWrap="wrap">
    {[...new Array(13)].slice(0, visible).map((jobs, idx) => (
        <MediaCard key={idx} />
      ))}</Box>
      <Button buttonClicked={loadHandler}>Load More</Button>
      {/* <Pagination count={10} id="pagination" /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default Blog