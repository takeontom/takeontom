import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { createUseStyles } from "react-jss";
import Nav from "./Nav";

interface StyleProps {
  navHeight: number;
}

const useStyles = createUseStyles({
  header: {
    width: "100%",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#3494e6",
    background: "linear-gradient(to right, #3494e6, #ec6ead)",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
  },
  logoContainer: {
    width: (props: StyleProps) => `calc(100% - ${props.navHeight}px - 60px`,
  },
});

export default function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  const styleProps: StyleProps = { navHeight };
  const classes = useStyles(styleProps);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [navRef]);

  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <Logo />
      </div>
      <Nav ref={navRef} />
    </div>
  );
}
