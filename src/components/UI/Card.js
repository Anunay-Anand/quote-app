// Importing React and other Important Libraries
import React from "react";

// Importing Css and other assets
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
