import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
      },
      {
        name: "Treasure",
        score: 0,
      },
      {
        name: "Ashley",
        score: 0,
      },
      {
        name: "James",
        score: 0,
      },
    ],
  };

  handleRemovePlayer = (id) => {
    console.log("removing: ", id);
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p, index) => index !== id),
      };
    });
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      // Score can't be negative
      if (!(delta === -1 && prevState.players[index].score === 0)) {
        return {
          score: (prevState.players[index].score += delta),
        };
      }
    });
  };

  handleHighScoreChange = () => {
    this.setState((prevState) => {
      let highestScore = 0;
      prevState.players.forEach((player) => {
        if (player.score > highestScore) {
          highestScore = player.score;
        }
      });
      const newPlayersState = prevState.players.map((player) => {
        if (player.score === highestScore) {
          player.isHighScore = true;
        } else {
          player.isHighScore = false;
        }
        return player;
      });
      return {
        players: [...newPlayersState],
      };
    });
  };

  handleAddPlayer = (name) => {
    const newPlayer = { name: name, score: 0 };

    this.setState((prevState) => {
      return { players: [...prevState.players, newPlayer] };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            isHighScore={player.isHighScore ? player.isHighScore : false}
            id={index}
            key={index.toString()}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
            changeHighScore={this.handleHighScoreChange}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
