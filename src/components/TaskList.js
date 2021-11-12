import TaskItem from "./TaskItem";
import style from "./TaskList.module.css";
const TaskList = (props) => {
  return (
    <div className={style.list}>
      {props.listItems.map((element) => {
        return (
          <TaskItem
            item={element.task}
            key={element.id}
            id={element.id}
            getDeleteId={props.deleteTask}
          >
            {element.task}
          </TaskItem>
        );
      })}
    </div>
  );
};
export default TaskList;
