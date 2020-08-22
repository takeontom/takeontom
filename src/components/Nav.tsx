import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  nav: {
    height: "100vh",
    padding: "0 2em 0 2em",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
  },
  navItem: {
    listStyle: "none",
    margin: "1em 0",
    padding: 0,
    textAlign: "left",
    fontSize: "60px",
    fontFamily: ["Passion One", "cursive"],
    textTransform: "uppercase",
    transform: "rotate(-30deg)",
    "& a": {
      display: "block",
      textDecoration: "none",
      color: "#000",
      opacity: 0.4,
    },
    "& a:hover": {
      transform: "scaleX(1.1)",
    },
  },
});

export default function Nav() {
  const classes = useStyles({});

  return (
    <nav className={classes.nav}>
      <li className={classes.navItem}>
        <a href="/">Home</a>
      </li>
      <li className={classes.navItem}>
        <a href="/">About</a>
      </li>
      <li className={classes.navItem}>
        <a href="/">Portfolio</a>
      </li>
      <li className={classes.navItem}>
        <a href="/">Contact</a>
      </li>
    </nav>
  );
}
