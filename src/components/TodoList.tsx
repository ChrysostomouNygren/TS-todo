import Todo from "./Todo";
import "./TodoList.scss";

type TodoProps = {
  tasks: { id: string; title: string }[];
  removeTask: (id: string) => void;
};

function TodoList(props: TodoProps) {
  return (
    <div className="todo-list-area">
      <div className="todo-list-glass">
        {props.tasks.map((task) => {
          return (
            <div className="todo" key={task.id}>
              <Todo data={task} removeTask={props.removeTask} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
