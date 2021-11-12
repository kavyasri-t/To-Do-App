import style from "./TaskItem.module.css";
const TaskItem = (props) => {
  function deleteHandler() {
    props.getDeleteId(props.id);
  }
  return (
    <div
      title="Tap on the tasks to delete"
      className={style.taskItem}
      onClick={deleteHandler}
    >
      <p title="mark as completed ">{props.children}</p>
    </div>
  );
};
export default TaskItem;
