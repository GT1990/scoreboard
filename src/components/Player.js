import React, { PureComponent } from "react";
import propTypes from "prop-types";

import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  // PureComponent uses shouldComponentUpdate() lifecycle behind the scenes so that it only rerenders the components that have changed based on props and state

  // This is only for classes
  // Proptypes check type of a prop to avoid errors
  static propTypes = {
    removePlayer: propTypes.func.isRequired,
    changeScore: propTypes.func.isRequired,
    changeHighScore: propTypes.func.isRequired,
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    score: propTypes.number.isRequired,
    isHighScore: propTypes.bool.isRequired,
  };

  render() {
    const {
      removePlayer,
      changeScore,
      changeHighScore,
      id,
      name,
      score,
      isHighScore,
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>

        <Counter
          id={id}
          score={score}
          changeScore={changeScore}
          changeHighScore={changeHighScore}
        />
      </div>
    );
  }
}

export default Player;
