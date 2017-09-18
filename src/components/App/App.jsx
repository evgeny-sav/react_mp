import React, { Component } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Infobar from "../Infobar/Infobar";
import styles from "./app.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.outer}>
        <div className={styles.wrapper}>
          <Header />
          <Infobar />
          <Main />
          <div className={styles.push}>&nbsp;</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
