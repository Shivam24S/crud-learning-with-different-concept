import { useContext } from "react";
import { TodoContext } from "./store/TodoContext";

const ReadTodoCtx = () => {
  const { result, onEdit, onDelete } = useContext(TodoContext);

  const handleEditData = (id) => {
    onEdit(id);
  };

  const handleDeleteData = (id) => {
    onDelete(id);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Date</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.task}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>
                  <button onClick={() => handleEditData(item.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteData(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ReadTodoCtx;
