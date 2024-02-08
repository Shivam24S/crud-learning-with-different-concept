import { useState } from "react";
import ReadTodo from "./ReadTodo";

const CrudTodo = () => {
  const [input, setInput] = useState({
    task: "",
    description: "",
    date: "",
  });

  const [inputData, setInputData] = useState([]);

  const [isEdit, setIsEdit] = useState("");

  const handleChange = (inputIdentifier, newValue) => {
    setInput((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: newValue,
      };
    });
  };

  // console.log(input);

  const handleAdd = () => {
    if (!input) {
      alert("please enter data");
    } else if (isEdit) {
      setInputData((prevData) =>
        prevData.map((item) => {
          return {
            ...item,
            task: input.task,
            description: input.description,
            date: input.date,
          };
        })
      );
      setInput("");
      setIsEdit("");
    } else {
      const newInputData = {
        id: new Date().getTime().toString(),
        task: input.task,
        description: input.description,
        date: input.date,
      };
      setInputData((prevData) => [...prevData, newInputData]);
    }
  };

  const handleDelete = (id) => {
    const updateItem = inputData.filter((item) => {
      return item.id !== id;
    });
    setInputData(updateItem);
  };

  const handleEdit = (id) => {
    const editData = inputData.find((item) => {
      return item.id === id;
    });
    setInput(editData);
    setIsEdit(id);
  };

  return (
    <>
      <h1 style={{ display: "flex", alignItems: "center" }}>crud todo</h1>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <input
          type="text"
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
        <button onClick={handleAdd}>Add</button>
        <br />
        <br />
      </div>

      <ReadTodo data={inputData} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
};
export default CrudTodo;
