import { useEffect, useState } from "react";

const AddTodo3 = ({ onAdd, editingItem }) => {
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
    {
      editingItem ? setInput(editingItem) : setInput("");
    }
  }, [editingItem]);

  //   console.log("onChange", input);

  const handleAdd = () => {
    onAdd(input);
    setInput({ task: "", description: "", date: "" });
  };

  return (
    <>
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
        <button onClick={handleAdd}> {editingItem ? "update" : "Add"} </button>
      </div>
    </>
  );
};
export default AddTodo3;
