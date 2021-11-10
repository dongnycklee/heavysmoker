import React, { Component } from "react";
import styles from "./first.module.css";
import video from "../videos/gogo.mp4";
import { Redirect, Link } from "react-router-dom";

class First extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.history.push("/main");
    }, 5000);
  }

  render() {
    return (
      <div>
        <video muted autoPlay className={styles.first}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default First;
