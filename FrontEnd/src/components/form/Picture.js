import React from "react";
import image from "./assets/magic2.jpg";
import "./picture.css";

function Picture() {
  return (
    <div>
      <img src={image} className="picture" alt="img" />
    </div>
  );
}

export default Picture;
