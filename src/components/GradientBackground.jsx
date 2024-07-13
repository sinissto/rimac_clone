import React, { useEffect } from "react";
import gradient from "../scripts/Gradient.js";
import classes from "./GradientBackground.module.css";

const GradientBackground = () => {
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <div className={classes.canvas_page_bg}>
      <canvas id={"gradient-canvas"}></canvas>
    </div>
  );
};

export default GradientBackground;
