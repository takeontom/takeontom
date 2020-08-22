import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  logo: {
    position: "absolute",
    top: (props) => props.top,
    left: (props) => props.left,
    padding: "0.5em 1em",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: ["Passion One", "cursive"],
    backgroundColor: "rgba(20, 20, 20, 0.1)",
    color: "#000",
    textTransform: "uppercase",
  },
  main: {
    fontSize: "200px",
  },
  word: {
    display: "block",
    opacity: 0.2,
  },
  word2: {
    marginTop: "-0.75em",
  },
  subTitle: {
    fontSize: "60px",
    opacity: 0.2,
  },
});

export default function Logo() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const classes = useStyles({ top: mouseY, left: mouseX });

  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (e: MouseEvent) => {
      if (
        logoRef.current?.clientWidth &&
        e.clientX > logoRef.current?.clientWidth &&
        logoRef.current?.parentElement?.clientWidth
      ) {
        if (
          e.clientX - logoRef.current?.clientWidth >
          logoRef.current?.parentElement?.clientWidth -
            logoRef.current?.clientWidth
        ) {
          setMouseX(
            logoRef.current?.parentElement?.clientWidth -
              logoRef.current?.clientWidth
          );
        } else {
          setMouseX(e.clientX - logoRef.current?.clientWidth);
        }
      } else {
        setMouseX(0);
      }

      if (
        logoRef.current?.clientHeight &&
        e.clientY > logoRef.current?.clientHeight / 2 &&
        logoRef.current?.parentElement?.clientHeight
      ) {
        if (
          e.clientY + logoRef.current?.clientHeight / 2 >
          logoRef.current?.parentElement?.clientHeight
        ) {
          setMouseY(
            logoRef.current?.parentElement?.clientHeight -
              logoRef.current?.clientHeight
          );
        } else {
          setMouseY(e.clientY - logoRef.current?.clientHeight / 2);
        }
      } else {
        setMouseY(0);
      }
    });
  }, []);

  return (
    <div className={classes.logo} ref={logoRef}>
      <div className={classes.main}>
        <span className={classes.word}>Tom</span>
        <span className={classNames(classes.word, classes.word2)}>Smith</span>
      </div>
      <div className={classes.subTitle}>Fullstack developer</div>
    </div>
  );
}
