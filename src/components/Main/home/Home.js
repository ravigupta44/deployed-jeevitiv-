import React from "react";
import Testimonials from "./testimonial/Testimonials";
// import Doctors from "../Doctors";
// import DoctorsB from "../DoctorsB";
// import News from "../News";
import Hero from "./hero/Hero";
import Scheduler from "./scheduler/Scheduler";
// import styled from "styled-components";
import patient from './patient.png'
import doctor from './doctors.png'
import Support from '../../UI/Support'
// import ToggleView from './ToggleView';

// import ThemeToggle from "./ThemeToggle";

// import { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme } from "./Toggle/theme";
// import { GlobalStyles } from "./Toggle/global";
// import Toggle from "./Toggle/Toggle";

// import { useDarkMode } from "./Toggle/useDarkMode";

// import './Particle.css';

// import Particles from 'react-particles-js';
// import ParentSlider from "../ParentSlider";
// import Slide from "../Slide";


function Home() {
  // const [theme, setTheme] = useDarkMode();

  return (
    <div className="App ">
      <Support/>
      <Hero />
      <Scheduler />
      <Testimonials />
      <img className= 'img-fluid w-100' src={patient} alt="" />
      {/* <Doctors /> */}
      {/* <ParentSlider /> */}
     {/* <Slide />*/}
     <img className= 'img-fluid w-100' src={doctor} alt="" />
      {/* <News /> */}
    </div>
  );
}

export default Home;
