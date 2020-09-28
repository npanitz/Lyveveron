import React from "react";
import "../styles.css";

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div>
        <div className="welcome-msg">
          <h1> LYVEVERON </h1>
          <h2>
            Hello and Welcome to Lyveveron!. <br />
            Here's how the turn phases work: <br /> <br />
            1. Collect Food and Water from Base or <br />
            Mine for Precious Material.
            <br /> <br />
            2. Consume Food and Water
            <br /> <br />
            3. Build and Grow Hungrier and Thirstier <br />
          </h2>
          <h4>
            Components can be combined in pairs to become <br />
            attachable to a food and water pair. Combining a food <br />
            and water pair with a component pair creates an <br />
            enchanted nutrient. <br /> <br />
            A pair of enchanted nutrients can be traded <br />
            for a legendary substance of immortality, LYVEVERON!!
          </h4>
        </div>
      </div>
    );
  }
}

export default WelcomeMessage;
