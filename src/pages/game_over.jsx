import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

class GameOver extends React.Component {
  render() {
    return (
      <div className="game-over">
        <Link to="/"> GAME OVER </Link>
      </div>
    );
  }
}

export default GameOver;
