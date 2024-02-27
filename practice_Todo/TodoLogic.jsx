import { useState } from "react";
import AddTodo from "./AddTodo";
import ReadTodo from "./ReadTodo";

const initialValue = [
  {
    task: "play",
    description: "i want to play game",
    date: "2023-07-24",
    id: 1,
  },
  {
    task: "eat",
    description: " i have to eat  from outside",
    date: "2024-01-24",
    id: 2,
  },
];

const TodoLogic = () => {
  const [todos, setTodos] = useState(initialValue);

  const [editData, setEditData] = useState(null);

  const [isEdit, setIsEdit] = useState(null);

  const handleAdd = (input) => {
    if (!input.task || !input.description || !input.date) {
      alert("please fill all the data");
    } else if (isEdit !== null) {
      setTodos((prevData) =>
        prevData.map((item) =>
          item.id === isEdit
            ? {
                ...item,
                task: input.task,
                description: input.description,
                date: input.date,
              }
            : item
        )
      );
      setIsEdit(null);
    } else {
      const newValue = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        date: input.date,
      };
      setTodos((prevTodo) => [...prevTodo, newValue]);
      console.log("input task", input.task);
    }
  };

  const handleEdit = (id) => {
    const editItem = todos.find((item) => item.id === id);
    setEditData(editItem);
    setIsEdit(id);
  };

  const handleDelete = (id) => {
    const updatedData = todos.filter((item) => item.id !== id);
    setTodos(updatedData);
  };

  return (
    <>
      <AddTodo onAdd={handleAdd} onEdit={editData} />
      <br />
      <br />
      <ReadTodo data={todos} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
};
export default TodoLogic;
