import { useEffect, useState } from "react";

const AddTodo = ({ onAdd, onEdit }) => {
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

  useEffect(() => {
    onEdit ? setInput(onEdit) : setInput("");
  }, [onEdit]);

  const handleAdd = () => {
    onAdd(input);
    setInput({
      task: "",
      description: "",
      date: "",
    });
  };

  return (
    <>
      <h1>Practice todo</h1>
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
        <button onClick={handleAdd}>{onEdit ? "Update" : "add"}</button>
      </div>
    </>
  );
};
export default AddTodo;
