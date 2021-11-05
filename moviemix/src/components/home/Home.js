import React from "react";
import { useCommand } from "../../context/Context";
import logo from "../../images/logo/MovieMix4.png";
import "./Home.css";
import Button from "../utility/buttons/Button";

const Home = (props) => {
  const { handleHomeNext } = useCommand();

  return (
    <div className="home">
      <div className="nextBtn">
        <Button
          name="Next"
          newClass="btn__md"
          handleButtonClick={handleHomeNext}
        ></Button>
      </div>
    </div>
  );
};

export default Home;
