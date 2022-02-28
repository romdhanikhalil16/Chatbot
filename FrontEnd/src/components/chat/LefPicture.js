import React from "react";
import img1 from "./assets/img3.jpg";
import "./LeftPicture.css";

const LefPicture = () => {
  return (
    <div>
      <h1 className="text">
        hey dear welcome it's{" "}
        <span className="blue" style={{ backgroundColor: "blue" }}>
          {" "}
          TACTIC{" "}
        </span>{" "}
        <br />
        meet our <span className="blue"> BOT </span> and have a good day{" "}
        <span className="blue">...</span>
      </h1>
      <img src={img1} alt="" className="photo" />
    </div>
  );
};

export default LefPicture;
