import React from "react";
import { useHistory } from "react-router-dom";
import "./LinkButton.scss";

function LinkButton({ title, active }) {
  const history = useHistory();

  const goTo = (title) => {
    switch (title) {
      case "All":
        return "/";
      case "Active":
        return "/active";
      case "Completed":
        return "/completed";
      default:
        return "/";
    }
  };

  return (
    <button
      onClick={() => history.push(`${goTo(title)}`)}
      className={`linkButton ${active ? "linkButton__active" : ""}`}
    >
      {title}
    </button>
  );
}

export default LinkButton;
