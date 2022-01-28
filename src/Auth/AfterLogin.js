import "./AfterLogin.css";

import Img from "./jeevitiv.jpg"
import React from 'react';

const AfterLogin = ({setLoginUser}) => {
    return (
        <div className="homepagee">
        <img src={Img} alt='logo'/>
          <h1>Coming Soon...</h1>
          <div  className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    );
};

export default AfterLogin;
