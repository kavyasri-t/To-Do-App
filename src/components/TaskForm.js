import style from "./TaskForm.module.css";
import { useState } from "react";
import Modal from "./Modal";
const TaskForm = (props) => {
  const [initial, setInput] = useState("");
  const [valid, setValid] = useState(true);
  function inputHandler(e) {
    if (e.target.value.length > 0) setValid(true);
    setInput(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();

    if (initial.trim().length === 0) {
      setValid(false);
      return;
    }
    setValid(true);
    props.getData(initial);
    setInput("");
  }
  function modalHandler(data) {
    setValid(data);
  }
  return (
    <>
      {!valid && (
        <Modal closeModal={modalHandler} mssg="Please enter the text!"></Modal>
      )}
      <form onSubmit={submitHandler}>
        <label>Add Task</label>
        <br></br>
        <input
          // style={{ borderColor: valid ? "#8aecdc" : "red" }}
          type="text"
          className={`${style.itask} ${valid ? "" : style.invalid}`}
          value={initial}
          onChange={inputHandler}
        ></input>
        <br></br>
        <button className={style.button} type="submit">
          Add Task
        </button>
      </form>
    </>
  );
};
export default TaskForm;
