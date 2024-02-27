import { useEffect, useState } from "react";

const CreateTodo = ({ onAdd, onEdit }) => {
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

  // onChange
  // console.log(input.task);
  // console.log(input.description);

  const handleClick = () => {
    onAdd(input);
    setInput({ task: "", description: "" });
  };

  useEffect(() => {
    onEdit ? setInput(onEdit) : setInput("");
  }, [onEdit]);

  return (
    <div>
      <input
        type="text"
        placeholder="task"
        value={input.task}
        onChange={(e) => {
          handleChange("task", e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        value={input.description}
        onChange={(e) => {
          handleChange("description", e.target.value);
        }}
      />
      <button onClick={handleClick}>{onEdit ? "update" : "add"} </button>
    </div>
  );
};

export default CreateTodo;
