import { useState } from "react";
import "./Input.scss";
import { IoIosAddCircleOutline } from "react-icons/io";

type InputProps = {
  // add tar emot en sträng som den skickar in i en funktion, den returnerar dock ingenting, så därför skickas void tillbaka
  add: (todo: string) => void;
};

function Input(props: InputProps) {
  const [task, setTask] = useState("");

  function clearForm() {
    setTask("");
  }

  return (
    <form
      className="form-input"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="form-inputfield"
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
        autoFocus
      />
      <button
        className="form-submit-button"
        onClick={() => [props.add(task), clearForm()]}
      >
        <IoIosAddCircleOutline />
      </button>
    </form>
  );
}

export default Input;
