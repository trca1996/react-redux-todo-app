import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./Row.scss";
import { Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { doneTodo, deleteTodo } from "../features/allTodosSlice";

function Row({ todo, deleteIcon, done, id }) {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(doneTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="row">
      <Checkbox
        checked={done}
        onChange={handleCheck}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={done ? "row__checked" : ""}>{todo}</p>

      {deleteIcon ? (
        <IconButton onClick={handleDelete} className="row__icon">
          <Delete />
        </IconButton>
      ) : (
        ""
      )}
    </div>
  );
}

export default Row;
