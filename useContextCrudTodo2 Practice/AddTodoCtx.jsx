import { useContext, useEffect, useState } from "react";
import { TodoContext } from "./store/TodoCtx";

const AddTodoCtx = () => {
  const [input, setInput] = useState({
    id: "",
    task: "",
    description: "",
  });

  const handleChange = (inputIdentifier, newValue) => {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  //   onchange checking
  //   console.log("input op =>", input.task + input.description);

  const { onAdd, editingItem } = useContext(TodoContext);

  const handleClick = () => {
    onAdd(input);
    setInput({ task: "", description: "" });
  };

  useEffect(() => {
    editingItem ? setInput(editingItem) : "";
  }, [editingItem]);

  return (
    <>
      <h1>crud todo using useContext</h1>
      <input
        type="text"
        placeholder="task"
        value={input.task}
        onChange={(e) => {
          handleChange("task", e.target.value);
        }}
      />
      <br />
      <br />
      <textarea
        cols="20"
        placeholder="description"
        rows="10"
        value={input.description}
        onChange={(e) => {
          handleChange("description", e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleClick}> {editingItem ? "update" : "add"} </button>
    </>
  );
};
export default AddTodoCtx;
