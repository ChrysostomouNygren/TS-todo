import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.scss";

import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([
    { id: "josd909ufawjhosOJ", title: "<3" },
  ]);

  function addTask(title: string) {
    setTasks((previousTasks) => {
      return [...previousTasks, { id: nanoid(), title: title }];
    });
  }

  function removeTask(id: string) {
    const newTask = [...tasks].filter((task) => task.id !== id);
    setTasks(newTask);
  }

  return (
    <div>
      <Input add={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
