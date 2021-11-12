import style from "./TaskFilter.module.css";
const TaskFilter = (props) => {
  function selectHandler(e) {
    props.getOption(e.target.value);
  }
  return (
    <select className={style.dropdown} onChange={selectHandler}>
      <option value="active">Active</option>
      <option value="completed">Completed</option>
    </select>
  );
};
export default TaskFilter;
