import { useState } from "react";
import CreateTodo from "./CreateTodo";
import ReadTodo4 from "./ReadTodo4";

const initialState = [
  {
    id: 1,
    task: "learn",
    description: "learn react",
  },
  {
    id: 2,
    task: "practice",
    description: "practice projects",
  },
];

const TodoLogic4 = () => {
  const [todo, setTodo] = useState(initialState);

  const [editItem, setEditItem] = useState(null);
  const [isEdit, setIsEdit] = useState(null);

  const [taskAdded, setTaskAdded] = useState(false);

  const handleAdd = (input) => {
    if (!input.task || !input.description) {
      alert("please fill the data");
    } else if (isEdit !== null) {
      setTodo((prevData) =>
        prevData.map((item) =>
          item.id === isEdit
            ? {
                id: input.id,
                task: input.task,
                description: input.description,
              }
            : item
        )
      );
    } else {
      const newInput = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      };
      setTodo((prevData) => [...prevData, newInput]);
      // checking value
      // console.log("checking input value =>", newInput);

      // for rendering value
      setTaskAdded(true);
    }
  };

  const handleEdit = (id) => {
    const updatingData = todo.find((item) => item.id === id);
    setEditItem(updatingData);
    setIsEdit(id);
  };

  const handleDelete = (id) => {
    const updatedData = todo.filter((item) => item.id !== id);
    setTodo(updatedData);
  };

  return (
    <>
      <CreateTodo onAdd={handleAdd} onEdit={editItem} />
      {taskAdded ? (
        <ReadTodo4 data={todo} onDelete={handleDelete} onEdit={handleEdit} />
      ) : (
        "please fill detail "
      )}
    </>
  );
};
export default TodoLogic4;
