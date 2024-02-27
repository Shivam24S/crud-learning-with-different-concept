import { useContext, useEffect, useState } from "react";
import { TodoContext } from "./store/TodoContext";

const AddToDoCtx = () => {
  const [input, setInput] = useState({
    task: "",
    description: "",
    date: "",
  });

  const handleChange = (inputIdentifier, newValue) => {
    setInput((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: newValue,
      };
    });
  };

  // console.log("input", input);
  const { onAdd, editingItem } = useContext(TodoContext);

  const handleAdd = () => {
    onAdd(input);
    setInput({ task: "", description: "", date: "" });
  };

  useEffect(() => {
    editingItem ? setInput(editingItem) : setInput("");
  }, [editingItem]);

  return (
    <>
      <h1>Crud Todo using useContext Concept</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <input
          type="text"
          placeholder="Task"
          value={input.task}
          onChange={(e) => {
            handleChange("task", e.target.value);
          }}
        />
        <textarea
          placeholder="Description"
          value={input.description}
          onChange={(e) => {
            handleChange("description", e.target.value);
          }}
        />
        <input
          type="Date"
          value={input.date}
          onChange={(e) => {
            handleChange("date", e.target.value);
          }}
        />
        <button onClick={handleAdd}>{editingItem ? "Update" : "Add"}</button>
      </div>
    </>
  );
};

export default AddToDoCtx;
