import React from "react";
import propTypes from "prop-types";

const Counter = ({ id, score, changeScore, changeHighScore }) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => {
          changeScore(id, -1);
          changeHighScore();
        }}
      >
        {" - "}
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => {
          changeScore(id, 1);
          changeHighScore();
        }}
      >
        {" + "}
      </button>
    </div>
  );
};

Counter.propTypes = {
  id: propTypes.number.isRequired,
  score: propTypes.number.isRequired,
  changeScore: propTypes.func.isRequired,
  changeHighScore: propTypes.func.isRequired,
};

export default Counter;
