import React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import "./screens.scss";

function ActiveScreen() {
  return (
    <div className="screen activeScreen">
      <Input buttonTitle="Add" />

      <Row todo="this is a test" />
      <Row todo="this is a test" />
      <Row todo="this is a test" />
    </div>
  );
}

export default ActiveScreen;
