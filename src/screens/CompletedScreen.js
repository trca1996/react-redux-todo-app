import { Button } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "../components/Row";
import { deleteAllTodos } from "../features/allTodosSlice";
import "./screens.scss";

function CompletedScreen() {
  const allTodos = useSelector((state) => state.allTodos.allTodos);
  const dispatch = useDispatch();

  const renderCompletedTodos = (allTodos) => {
    // eslint-disable-next-line
    return allTodos.map(({ data, id, done }) => {
      if (done === true) {
        return <Row todo={data} id={id} key={id} done={done} deleteIcon />;
      }
    });
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllTodos());
  };

  return (
    <div className="screen completedScreen">
      {renderCompletedTodos(allTodos)}

      <Button
        variant="contained"
        color="secondary"
        className="completedScreen__icon"
        startIcon={<Delete />}
        onClick={handleDeleteAll}
      >
        Delete All
      </Button>
    </div>
  );
}

export default CompletedScreen;
