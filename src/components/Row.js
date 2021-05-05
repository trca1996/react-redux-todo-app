import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./Row.scss";
import { Delete } from "@material-ui/icons";

function Row({ todo, deleteIcon }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="row">
      <Checkbox checked={checked} onChange={handleChange} color="primary" />
      <p className={checked ? "row__checked" : ""}>{todo}</p>

      {deleteIcon ? (
        <IconButton className="row__icon">
          <Delete />
        </IconButton>
      ) : (
        ""
      )}
    </div>
  );
}

export default Row;
