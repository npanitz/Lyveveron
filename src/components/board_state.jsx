import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hunger: 0,
      thirst: 0,
      water: 0,
      food: 0,
      metal: 0,
      attachments: 0,
      enchanted: 0,
      lyveveron: 0,
      phase: "First Phase",
      leftmsg: "Forage!",
      rightmsg: "Mine!",
      gameover: "No",
      page: "/play",
      display: "PLAY"
    };
  }

  doLeft() {
    switch (this.state.phase) {
      case "First Phase":
        this.collect_food();
        break;
      case "Second Phase":
        this.eat_and_drink();
        break;
      case "Third Phase":
        switch (this.state.enchanted < 1) {
          case true:
            this.build();
            break;
          case false:
            this.enchant();
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  doRight() {
    switch (this.state.phase) {
      case "First Phase":
        this.mine();
        break;
      case "Second Phase":
        this.nextPhase();
        break;
      case "Third Phase":
        switch (this.state.leftmsg) {
          case "Enchant":
            this.enchant();
            break;
          case "Build":
            this.isGameOver();
            break;
          default:
            break;
        }
        this.isGameOver();
        break;
      default:
        break;
    }
  }

  enchant() {
    this.setState({
      lyveveron: 1,
      enchanted: 0,
      link: "/win_game",
      page: "WinGame"
    });
  }

  build() {
    switch (
      this.state.food > 0 &&
      this.state.water > 0 &&
      this.state.attachments > 1
    ) {
      case false:
        this.setState({
          attachments:
            this.state.metal > 1
              ? this.state.attachments + 1
              : this.state.attachments,
          metal: this.state.metal > 1 ? this.state.metal - 2 : this.state.metal
        });
        break;
      case true:
        this.setState({
          food: this.state.food - 1,
          water: this.state.water - 1,
          attachments: this.state.attachments - 1,
          enchanted: this.state.enchanted + 1,
          leftmsg: this.state.enchanted > 0 ? "Enchant!" : this.state.leftmsg
        });
        break;
      default:
        break;
    }
  }
  eat_and_drink() {
    this.setState({
      hunger:
        this.state.food > 0 && this.state.hunger > 0
          ? this.state.hunger - 1
          : this.state.hunger,
      food: this.state.food > 0 ? this.state.food - 1 : this.state.food,
      thirst:
        this.state.water > 0 && this.state.thirst > 0
          ? this.state.thirst - 1
          : this.state.thirst,
      water: this.state.water > 0 ? this.state.water - 1 : this.state.water
    });
  }

  nextPhase() {
    this.setState({
      phase: "Third Phase",
      leftmsg: this.state.food > 0 && this.state.attachments > 0 ? "Enchant!" : "Build"
    });
  }

  collect_food() {
    this.setState({
      food: this.state.food + 2,
      water: this.state.water + 2,
      phase: "Second Phase",
      leftmsg: "Consume!",
      rightmsg: "Next Phase"
    });
  }

  mine() {
    this.setState({
      metal: this.state.metal + 1,
      phase: "Second Phase",
      leftmsg: "Consume!",
      rightmsg: "Next Phase"
    });
  }

  isGameOver() {
    switch (this.state.hunger < 9) {
      case true:
        this.setState({
          rightmsg: "Mine!",
          leftmsg: "Forage!",
          hunger: this.state.hunger + 2,
          thirst: this.state.thirst + 2,
          phase: "First Phase"
        });
        break;
      case false:
        this.setState({
          link: "/game_over",
          page: "GameOver"
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="turn-phase">{this.state.phase}</div>
        <div className="left-button" onClick={() => this.doLeft()}>
          <Link to={this.state.link}> {this.state.leftmsg} </Link>
        </div>
        <div className="right-button" onClick={() => this.doRight()}>
          <Link to={this.state.link}> {this.state.rightmsg} </Link>
        </div>
        <div className="player">
          Hunger: {this.state.hunger} <br />
          Thirst: {this.state.thirst} <br />
          Metal: {this.state.metal} <br />
          Attachments: {this.state.attachments} <br />
          Enchanted Nutrient: {this.state.enchanted} <br />
          Food: {this.state.food} <br />
          Water: {this.state.water} <br />
        </div>
      </div>
    );
  }
}

export default Board;
