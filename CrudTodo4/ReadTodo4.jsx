const ReadTodo4 = ({ data, onDelete, onEdit }) => {
  const handleEdit = (id) => {
    onEdit(id);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((items) => {
              return (
                <>
                  <tr key={items.id}>
                    <td>{items.task}</td>
                    <td>{items.description}</td>
                    <td>
                      <button onClick={() => handleEdit(items.id)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(items.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ReadTodo4;
