const ReadTodo3 = ({ result, onEdit, onDelete }) => {
  const handleEdit = (id) => {
    onEdit(id);
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <>
      <h1>OUTPUT</h1>
      <br />
      <br />
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
                  <button
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
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

export default ReadTodo3;
