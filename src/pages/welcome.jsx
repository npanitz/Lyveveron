import React from "react";
import "../styles.css";
import WelcomeMessage from "../components/welc_msg.jsx";
import NavButton from "../buttons/nav_button.jsx";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <WelcomeMessage />
        <NavButton />
      </div>
    );
  }
}

export default Welcome;
