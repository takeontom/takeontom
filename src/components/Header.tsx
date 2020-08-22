import React from "react";
import Logo from "./Logo";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  header: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    backgroundColor: "#29fa64",
  },
});

export default function Header() {
  const classes = useStyles({});

  return (
    <div className={classes.header}>
      <Logo />
    </div>
  );
}
