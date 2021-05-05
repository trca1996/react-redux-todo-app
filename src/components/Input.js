import React from "react";
import "./Input.scss";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

function Input({ buttonTitle }) {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setValue("todo", "");
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input__value"
          type="text"
          autoComplete="off"
          {...register("todo", { required: true })}
        />

        <Button type="submit" variant="contained" color="primary">
          {buttonTitle}
        </Button>
      </form>
    </div>
  );
}

export default Input;
