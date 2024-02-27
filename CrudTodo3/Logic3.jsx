import { useState } from "react";
import AddTodo3 from "./AddTodo3";
import ReadTodo3 from "./ReadTodo3";

const initialState = [
  {
    task: "learn",
    description: "in depth learning in react",
    date: "2024-02-03",
    id: 1,
  },
  {
    task: "practice",
    description: "practice makes man perfect",
    date: "2024-02-06",
    id: 3,
  },
];

const Logic3 = () => {
  const [todo, setTodo] = useState(initialState);
  const [taskAdded, setTaskAdded] = useState(false);

  const [editItem, setEditItem] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const handleAdd = (input) => {
    if (!input.task || !input.description || !input.date) {
      alert("please fill all the data");
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
      //   setIsEdit(null);
    } else {
      const newInputs = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        date: input.date,
      };
      setTodo((prevData) => [...prevData, newInputs]);
      setTaskAdded(true);
    }
  };

  const handleEdit = (id) => {
    const EditValue = todo.find((item) => item.id === id);
    setEditItem(EditValue);
    setIsEdit(id);
  };

  const handleDelete = (id) => {
    const UpdateData = todo.filter((item) => item.id !== id);
    setTodo(UpdateData);
  };

  console.log(todo);
  return (
    <>
      <h1>crud todo</h1>
      <br />
      <br />
      <AddTodo3 onAdd={handleAdd} editingItem={editItem} />
      {taskAdded ? (
        <ReadTodo3 result={todo} onDelete={handleDelete} onEdit={handleEdit} />
      ) : (
        ""
      )}
    </>
  );
};
export default Logic3;
