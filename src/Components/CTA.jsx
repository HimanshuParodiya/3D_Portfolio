import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const CTA = ({ title }) => {
  const capitalizeWord = (word) => {
    let firstLetter = word[0].toUpperCase();
    let newWord = firstLetter + word.slice(1);
    return newWord;
  };

  return (
    <section className="cta sm:flex-col flex-col">
      <p className="cta-text">
        Want to see what i build with these tech stacks?
      </p>
      <Link to={`/${title}`} className="btn">
        {capitalizeWord(title)}
        <img
          src={arrow}
          alt="right  arrow icon to learn more "
          className="w-4 h-4 object-contain inline ml-5 mix-blend-multiply"
        />
      </Link>
    </section>
  );
};

export default CTA;
