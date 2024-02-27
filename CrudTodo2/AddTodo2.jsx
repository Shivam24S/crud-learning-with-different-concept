import { useEffect, useState } from "react";

const AddTodo2 = ({ onAdd, onEdit }) => {
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
    // console.log(newValue);
  };

  const handleAdd = () => {
    onAdd(input);
    setInput({ task: "", description: "", date: "" });
  };

  useEffect(() => {
    {
      onEdit ? setInput(onEdit) : setInput("");
    }
  }, [onEdit]);

  return (
    <>
      <div style={{ display: "flex", gap: "2rem" }}>
        <input
          type="text="
          placeholder="task"
          value={input.task}
          onChange={(e) => {
            handleChange("task", e.target.value);
          }}
        />
        <textarea
          placeholder="description"
          value={input.description}
          onChange={(e) => {
            handleChange("description", e.target.value);
          }}
        />
        <input
          type="date"
          value={input.date}
          onChange={(e) => {
            handleChange("date", e.target.value);
          }}
        />
        <button onClick={handleAdd}>{onEdit ? "update" : "add"}</button>
      </div>
    </>
  );
};

export default AddTodo2;
