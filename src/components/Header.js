import React from "react";
import propTypes from "prop-types";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({ players, title }) => {
  // you can uses destructoring of props so you can use players, title instead of using this.props.players or this.props.title
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.propTypes = {
  players: propTypes.arrayOf(propTypes.object).isRequired,
  title: propTypes.string.isRequired,
};

export default Header;
