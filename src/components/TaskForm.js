import style from "./TaskForm.module.css";
import { useState, useRef } from "react";
import Modal from "./Modal";
import ReactDOM from "react-dom";
const TaskForm = (props) => {
  const inputData = useRef();
  // const [initial, setInput] = useState("");
  const [valid, setValid] = useState(true);
  // function inputHandler(e) {
  //   if (e.target.value.length > 0) setValid(true);
  //   setInput(e.target.value);
  // }
  function submitHandler(e) {
    e.preventDefault();

    if (inputData.current.value.trim().length === 0) {
      setValid(false);
      return;
    }
    setValid(true);
    props.getData(inputData.current.value);
    inputData.current.value = ""; //clear the input fields
    // props.getData(initial);
    // setInput("");
  }
  function modalHandler(data) {
    setValid(data);
  }
  return (
    <>
      {!valid &&
        ReactDOM.createPortal(
          <Modal
            closeModal={modalHandler}
            mssg="Please enter the text!"
          ></Modal>,
          document.getElementById("modalRoot")
        )}
      <form onSubmit={submitHandler}>
        <label>Add Task</label>
        <br></br>
        <input
          // style={{ borderColor: valid ? "#8aecdc" : "red" }}
          type="text"
          className={`${style.itask} ${valid ? "" : style.invalid}`}
          // onChange={inputHandler}
          ref={inputData}
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
