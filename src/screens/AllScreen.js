import React from "react";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import Row from "../components/Row";
import "./screens.scss";

function AllScreen() {
  const allTodos = useSelector((state) => state.allTodos.allTodos);

  const renderTodos = (allTodos) => {
    return allTodos.map(({ data, id, done }) => (
      <Row key={id} id={id} todo={data} done={done} />
    ));
  };

  return (
    <div className="screen allScreen">
      <Input buttonTitle="Add" />
      {renderTodos(allTodos)}
    </div>
  );
}

export default AllScreen;
