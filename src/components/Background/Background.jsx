import React from "react";
import "./Background.css";
import study from "../../assets/study.jpg";
import learn from "../../assets/learn1.jpg";
import geomentry from "../../assets/geomentry2.jpg";

const Background = ({ heroCount }) => {
  if (heroCount == 0) {
    return <img src={learn} className="background fadein" alt="study" />;
  } else if (heroCount == 1) {
    return <img src={study} className="background fadein" alt="study" />;
  } else if (heroCount == 2) {
    return <img src={geomentry} className="background fadein" alt="study" />;
  }
};

export default Background;
