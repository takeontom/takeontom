import React from "react";
import Logo from "./Logo";
import { createUseStyles } from "react-jss";
import Nav from "./Nav";

const useStyles = createUseStyles({
  header: {
    width: "100%",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#29fa64",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
  },
  logoContainer: {
    width: "100%",
  },
});

export default function Header() {
  const classes = useStyles({});

  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <Logo />
      </div>
      <Nav />
    </div>
  );
}
