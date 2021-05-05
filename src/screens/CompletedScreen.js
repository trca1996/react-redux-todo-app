import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import Row from "../components/Row";
import "./screens.scss";

function CompletedScreen() {
  return (
    <div className="screen completedScreen">
      <Row todo="this is a test" deleteIcon />
      <Row todo="this is a test" deleteIcon />
      <Row todo="this is a test" deleteIcon />
      <Row todo="this is a test" deleteIcon />

      <Button
        variant="contained"
        color="secondary"
        className="completedScreen__icon"
        startIcon={<Delete />}
      >
        Delete All
      </Button>
    </div>
  );
}

export default CompletedScreen;
