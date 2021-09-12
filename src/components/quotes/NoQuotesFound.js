// importing React and other libraries
import React from "react";
import { Link } from "react-router-dom";

// Importing css and other assets
import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      <Link className="btn" to="/quotes/new">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
