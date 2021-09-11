// Importing React and other libraries
import React from "react";

// Importing Custom Components
import MainNavigation from "./MainNavigation";

// Importing css and other assets
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
