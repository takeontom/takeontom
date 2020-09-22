import React from "react";
import { createUseStyles } from "react-jss";

import "./App.css";
import Cursor from "./cursor.png";
import Header from "./components/Header";

const useStyles = createUseStyles({
  app: {
    // cursor: `url(${Cursor}) 10 10, auto`,
  },
});

function App() {
  const classes = useStyles({});

  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
}

export default App;
