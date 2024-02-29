import { createContext, useState } from "react";

export const TodoContext = createContext({
  handleAdd: () => {},
  handleEdit: () => {},
  handleDelete: () => {},
  Data: [],
  editingItem: [],
});

const initialState = [
  {
    id: 1,
    task: "learn",
    description: "i have to learn something new daily daily",
  },
  {
    id: 2,
    task: "practice",
    description: "i have to do lots of practice",
  },
];

export default function TodoContextProvider({ children }) {
  const [todo, setTodo] = useState(initialState);
  const [editingInput, setEditingInput] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const handleAdd = (input) => {
    if (!input.task || !input.description) {
      alert("please fill data");
    } else if (isEdit !== null) {
      setTodo((prevData) =>
        prevData.map((item) =>
          item.id === isEdit
            ? {
                ...prevData,
                task: input.task,
                description: input.description,
              }
            : item
        )
      );
    } else {
      const newInputs = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
      };
      setTodo((prevInputs) => [newInputs, ...prevInputs]);
    }

    // console.log("input op => ", newInputs);
  };

  const handleEdit = (id) => {
    const editingData = todo.find((item) => item.id === id);
    setEditingInput(editingData);
    setIsEdit(id);
  };

  const handleDelete = (id) => {
    const updatedData = todo.filter((item) => item.id !== id);
    setTodo(updatedData);
  };

  const todoCtx = {
    onAdd: handleAdd,
    onEdit: handleEdit,
    onDelete: handleDelete,
    Data: todo,
    editingItem: editingInput,
  };

  return (
    <>
      <TodoContext.Provider value={todoCtx}>{children} </TodoContext.Provider>
    </>
  );
}
