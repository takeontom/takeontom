import React from "react";
import { createUseStyles } from "react-jss";

interface NavProps {}

const useStyles = createUseStyles({
  nav: {
    position: "fixed",
    top: 0,
    right: "calc(-100vh + 30px)",
    width: "calc(100vh - 4em)",
    margin: 0,
    padding: "0 2em 0 2em",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    transform: "rotate(90deg)",
    transformOrigin: "top left",
  },
  navItem: {
    listStyle: "none",
    margin: "0 auto",
    padding: 0,
    textAlign: "center",
    fontSize: "60px",
    lineHeight: "1",
    fontFamily: ["Passion One", "cursive"],
    textTransform: "uppercase",

    "& a": {
      display: "inline-block",
      margin: "0 0.1em",
      padding: "0 0.1em",
      lineHeight: "1",
      transformOrigin: "center right",
      // transform: "rotate(90deg)",
      textDecoration: "none",
      color: "#000",
      opacity: 0.4,
      transition: "transform 0.1s ease-in-out",
    },
    "& a:hover": {
      transform: "scaleY(1.5)",
    },
  },
});

const Nav = React.forwardRef(
  (props: NavProps, ref: React.Ref<HTMLDivElement>) => {
    const classes = useStyles({});

    return (
      <nav ref={ref} className={classes.nav}>
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
);
export default Nav;
