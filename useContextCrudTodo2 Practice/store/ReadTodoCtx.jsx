import { useContext } from "react";
import { TodoContext } from "./TodoCtx";

const ReadTodoCtx2 = () => {
  const { Data, onEdit, onDelete } = useContext(TodoContext);

  const handleEdit = (id) => {
    onEdit(id);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item) => {
            return (
              <>
                <tr key={item.id}>
                  <td>{item.task}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default ReadTodoCtx2;
