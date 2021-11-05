import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div data-testid="testButtonId" className="utility__button">
      <button
        className={`utility__button-button ${props.newClass} `}
        onClick={(event) => props.handleButtonClick(event)}
      >
        {props.name}
      </button>
    </div>
  );
}
export default Button;
