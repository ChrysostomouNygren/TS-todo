import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Todo.scss";

type TodoProps = {
  removeTask: (id: string) => void;
  data: { id: string; title: string };
};

function Todo(props: TodoProps) {
  const [style, setStyle] = useState(false);

  function handleRemove() {
    const id = props.data.id;
    props.removeTask(id);
  }

  function checkedTask() {
    setStyle(!style);
  }
  return (
    <div className="single-task">
      <input
        className="single-task-checkbox"
        type="checkbox"
        onClick={checkedTask}
      />
      <h2 className={style ? "checked" : "check"}>{props.data.title}</h2>
      <button className="single-task-button" onClick={handleRemove}>
        <IoIosCloseCircleOutline />
      </button>
    </div>
  );
}

export default Todo;
