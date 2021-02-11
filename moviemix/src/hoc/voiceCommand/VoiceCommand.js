import React from "react";
import "./VoiceCommand.css";
import { useCommand } from "../../context/Context";
import Faq from "react-faq-component";
import Button from "../../components/utility/buttons/Button";
import commands from "./command.js";

const VoiceCommand = (props) => {
  const { showCommand, showCommandHandler } = useCommand(); // context

  const styles = {
    bgColor: "transparent",
    titleTextColor: "red",
    rowTitleColor: "black",
    rowContentColor: "blue",
    arrowColor: "white",
  };

  const config = {
    animate: true,
    // tabFocus: true,
  };

  return (
    <div className="voiceCommand">
      <div className="voiceCommand_btn">
        <Button handleButtonClick={showCommandHandler} name="Commands" />
      </div>
      <div className={`voiceCommand_box ${showCommand ? "visible" : null} `}>
        <Faq data={commands} styles={styles} config={config} />
      </div>
      {props.children}
    </div>
  );
};

export default VoiceCommand;
