const ReadTodo = ({ data, onDelete, onEdit }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };
  const handleUpdate = (id) => {
    onEdit(id);
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
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.task}</td>
                <td>{item.description}</td>
                <td>{item.date}</td>
                <td>
                  <button onClick={() => handleUpdate(item.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default ReadTodo;
