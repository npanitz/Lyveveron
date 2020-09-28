import React from "react";
import "./styles.css";
import Welcome from "./pages/welcome.jsx";
import Play from "./pages/play.jsx";
import NotFoundPage from "./pages/404.jsx";
import GameOver from "./pages/game_over.jsx";
import WinGame from "./pages/win_game.jsx";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/game_over" component={GameOver} />
          <Route exact path="/win_game" component={WinGame} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
