import React from "react";
import { NavLink } from "react-router-dom";

function Errorpage() {
  return (
    <>
          <div className="center container notfound-404">
            <h1>404</h1>
            <h4>We are sorry, Page Not Found!</h4>
            <h5 className="">
                The page you are looking for might have been removed had its name change or is temporarily unavailable.
            </h5>
            <NavLink to="/">Back To Homepage</NavLink>
          </div>
    </>
  );
}

export default Errorpage;
