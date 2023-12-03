import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}{" "}
      <img
        src={arrow}
        alt="right arrow icon to learn more "
        className="w-4 h-4 object-contain"
      />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Himanshu Parodiya</span> 👋
      <br />A Frontend Developer from India 🇮🇳
    </h1>
  ),
  2: (
    <h1>
      <InfoBox
        text="Work many projects and picked up many skills along the way."
        link="/about"
        btnText="Learn more"
      />
    </h1>
  ),
  3: (
    <h1>
      <InfoBox
        text="Create Multiple Projects to grasp the understanding the core concepts. Curious about the result?"
        link="/projects"
        btnText="Visit my portfolio"
      />
    </h1>
  ),
  4: (
    <h1>
      <InfoBox
        text="Need a project done or looking for a dev? I am just few keystrokes away"
        link="/contact"
        btnText="Let's talk"
      />
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  // currentStage will give use 1 2 3 4 when we will reach to each stop while rotating (for more island.jsx)
  return <div key={currentStage}>{renderContent[currentStage]}</div>;
};

export default HomeInfo;
