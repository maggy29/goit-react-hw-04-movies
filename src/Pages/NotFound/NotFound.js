import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>404</h1>
    <p>
      Oops... It seems You get lost! Do not worry, here is
      <Link to="/"> the link </Link>to the Home page!
    </p>
  </div>
);

export default NotFound;
