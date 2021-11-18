import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const tasks = [
    { id: 0, task: "complete the assignment" },
    { id: 1, task: "Finish the course" },
  ];
  const [stateTasks, changeTaskList] = useState(tasks);
  const [completedTasks, changecompletedList] = useState([]);
  const [filter, changefilter] = useState("active");
  function getTaskHandler(data) {
    changeTaskList((previousState) => {
      return [...previousState, { id: new Date().getSeconds(), task: data }];
    });
  }

  function deleteHandler(id) {
    let arr = [];
    stateTasks.forEach((task) => {
      if (id !== task.id) {
        console.log(id, task.id);
        arr.push(task);
      } else {
        changecompletedList((prev) => [...prev, task]);
      }
      changeTaskList(arr);
    });

    // changeTaskList((previousState) => {
    //   let arr = previousState.filter((task) => {
    //     if (id === task.id) {
    //       console.log("check");
    //       changecompletedList((prev) => [...prev, task]);
    //     }
    //     return id !== task.id;
    //   });
    //   return arr;
    // });
  }
  console.log(stateTasks, completedTasks);
  function filterHandler(status) {
    changefilter(status);
  }
  let list = filter === "active" ? stateTasks : completedTasks;
  return (
    <React.Fragment>
      <div className="container">
        <TaskForm getData={getTaskHandler}></TaskForm>
      </div>
      <div className="task-filter">
        <TaskFilter
          currenttasks={completedTasks}
          getOption={filterHandler}
        ></TaskFilter>
      </div>
      {list.length === 0 ? (
        <p className="mssg">
          {list === stateTasks
            ? "No Tasks..Wanna add any!?"
            : "No completed tasks:("}
        </p>
      ) : (
        <TaskList listItems={list} deleteTask={deleteHandler}></TaskList>
      )}
    </React.Fragment>
  );
}

export default App;
