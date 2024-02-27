import { useState } from "react";
import AddTodo2 from "./AddTodo2";
import ReadTodo2 from "./ReadTodo2";

const initialState = [
  {
    id: 1,
    task: "learn",
    description: "i have to learn something new daily daily",
    date: "2024-01-01",
  },
  {
    id: 2,
    task: "practice",
    description: "i have to do lots of practice",
    date: "2024-02-02",
  },
];

const TodoLogicPractice2 = () => {
  const [todo, setTodo] = useState(initialState);

  const [editData, setEditData] = useState(null);

  const [isEdit, setIsEdit] = useState(null);

  const handleAdd = (input) => {
    if (!input.task || !input.description || !input.date) {
      alert("please fill all the field required");
    } else if (isEdit !== null) {
      setTodo((prevData) =>
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
      const newInput = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        date: input.date,
      };

      setTodo((prevData) => [...prevData, newInput]);
    }

    // console.log(newInput);
  };

  const handleDelete = (id) => {
    const updateData = todo.filter((item) => item.id !== id);
    setTodo(updateData);
  };

  const handleEdit = (id) => {
    const editItem = todo.find((item) => item.id === id);
    setEditData(editItem);
    setIsEdit(id);
  };

  return (
    <>
      <h1>crud todo </h1>

      <br />
      <br />
      <AddTodo2 onAdd={handleAdd} onEdit={editData} />
      <br />
      <br />
      <ReadTodo2 result={todo} onDelete={handleDelete} onEdit={handleEdit} />
    </>
  );
};
export default TodoLogicPractice2;
