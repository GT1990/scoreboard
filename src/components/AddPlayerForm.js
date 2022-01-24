import React from "react";
import propTypes from "prop-types";

const AddPlayerForm = ({ addPlayer }) => {
  const playerInputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(playerInputRef.current.value);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* // inputs must be self closing or will throw syntax error */}
      <input
        type="text"
        ref={playerInputRef}
        placeholder="Enter a player's name..."
      />
      <input type="submit" value="Add Player" />
    </form>
  );
};

AddPlayerForm.propTypes = {
  addPlayer: propTypes.func.isRequired,
};

export default AddPlayerForm;
