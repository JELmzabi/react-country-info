import React from "react";
import { Link } from "react-router-dom";
import "./BackButton.css";

const BackButton = () => {
  return (
    <Link to="/" className="back_button">
      Back
    </Link>
  );
};

export default BackButton;
