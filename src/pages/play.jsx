import React from "react";
import NavButton from "../buttons/nav_button.jsx";
import Board from "../components/board_state.jsx";

class Play extends React.Component {
  render() {
    return (
      <div>
        <Board />
        <NavButton />
      </div>
    );
  }
}

export default Play;
