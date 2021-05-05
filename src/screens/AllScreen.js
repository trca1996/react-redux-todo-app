import React from "react";
import Input from "../components/Input";
import Row from "../components/Row";
import "./screens.scss";

function AllScreen() {
  return (
    <div className="screen allScreen">
      <Input buttonTitle="Add" />

      <Row todo="this is a test" />
      <Row todo="this is a test" />
      <Row todo="this is a test" />
    </div>
  );
}

export default AllScreen;
