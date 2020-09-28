import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "/play",
      display: "PLAY"
    };
  }

  buttonClick() {
    switch (this.state.display) {
      case "PLAY":
        this.setState({
          display: "HOME",
          page: "/"
        });
        break;

      case "HOME":
        this.setState({
          page: "/play",
          display: "PLAY"
        });
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="nav-button" onClick={() => this.buttonClick()}>
        <Link to={this.state.page}> {this.state.display} </Link>
      </div>
    );
  }
}

export default NavButton;
