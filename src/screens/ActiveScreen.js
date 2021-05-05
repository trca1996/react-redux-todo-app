import React from "react";
import { useSelector } from "react-redux";
import Input from "../components/Input";
import Row from "../components/Row";
import "./screens.scss";

function ActiveScreen() {
  const allTodos = useSelector((state) => state.allTodos.allTodos);

  const renderActiveTodos = (allTodos) => {
    // eslint-disable-next-line
    return allTodos.map(({ data, id, done }) => {
      if (done !== true) {
        return <Row todo={data} id={id} key={id} done={done} />;
      }
    });
  };

  return (
    <div className="screen activeScreen">
      <Input buttonTitle="Add" />

      {allTodos.length === 0 ? (
        <p className="row">"Add tasks 📄📄📃"</p>
      ) : (
        renderActiveTodos(allTodos)
      )}
    </div>
  );
}

export default ActiveScreen;
