import React from "react";
import "../styles.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h2>404 Not Found!</h2>
        <h5>This is not the page you are looking for </h5>
      </div>
    );
  }
}

export default NotFoundPage;
