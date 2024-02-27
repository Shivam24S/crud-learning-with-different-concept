import { createContext, useState } from "react";

export const TodoContext = createContext({
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  result: [],
  editingItem: [],
});

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
    id: 2,
  },
];

export default function TodoContextProvider({ children }) {
  const [todo, setTodo] = useState(initialState);
  const [editingItem, setEditingItem] = useState("");
  const [isEdit, setIsEdit] = useState(null);

  const handleAdd = (input) => {
    if (!input.task || !input.description || !input.date) {
      alert("please fill all the required fields");
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
      const newInputValue = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description,
        date: input.date,
      };
      setTodo((prevTodo) => [...prevTodo, newInputValue]);
    }
  };

  const handleEdit = (id) => {
    const editingItem = todo.find((item) => item.id === id);
    setEditingItem(editingItem);
    setIsEdit(id);
  };

  const handleDelete = (id) => {
    const UpdatedData = todo.filter((item) => item.id !== id);
    setTodo(UpdatedData);
  };

  const todoCtx = {
    onAdd: handleAdd,
    onDelete: handleDelete,
    onEdit: handleEdit,
    result: todo,
    editingItem: editingItem,
  };

  return (
    <TodoContext.Provider value={todoCtx}>{children}</TodoContext.Provider>
  );
}
