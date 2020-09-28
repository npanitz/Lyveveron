import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

class WinGame extends React.Component {
  render() {
    return (
      <div className="win-msg">
        <Link to="/">
          {" "}
          CONGRATULATIONS! <br /> YOU WIN!{" "}
        </Link>
      </div>
    );
  }
}

export default WinGame;
