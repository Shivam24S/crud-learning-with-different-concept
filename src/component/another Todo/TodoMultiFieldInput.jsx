import { useState } from "react";

const TodoMultiFieldInput = () => {
  const [input, setInput] = useState({
    task: "",
    description: "",
    date: "",
  });

  const [inputData, setInputData] = useState([]);

  const [isEdit, setIsEdit] = useState("");

  const handleChange = (inputIdentifier, newValue) => {
    setInput((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: newValue,
      };
    });
  };
  //   console.log("task", input.task);
  //   console.log("description", input.description);
  //   console.log("date", input.date);

  const handleAdd = () => {
    if (!input.task || !input.description || !input.date) {
      alert("please fill all data");
    } else if (isEdit) {
      setInputData((prevData) =>
        prevData.map((data) =>
          data.id === isEdit
            ? {
                ...data,
                task: input.task,
                description: input.description,
                date: input.date,
              }
            : data
        )
      );
      setInput({ task: "", date: "", description: "" });
      setIsEdit("");
    } else {
      const newInputData = {
        id: new Date().getTime().toString(),
        task: input.task,
        description: input.description,
        date: input.date,
      };

      setInputData((prevData) => [...prevData, newInputData]);
      setInput("");
    }
  };

  //   console.log("data op =>", inputData);

  const handleDelete = (id) => {
    const updateList = inputData.filter((data) => {
      return data.id !== id;
    });
    setInputData(updateList);
  };

  const handleEdit = (id) => {
    const editedData = inputData.find((data) => {
      return data.id === id;
    });
    setInput({
      task: editedData.task,
      description: editedData.description,
      date: editedData.date,
    });
    setIsEdit(id);

    // console.log("edited data =>", editedData);
    // console.log("id =>", id);
    // console.log("is edit", isEdit);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>crud - todo</h1>

        <div style={{ display: "flex", gap: "1rem" }}>
          <input
            type="text"
            placeholder="task"
            value={input.task}
            onChange={(e) => {
              handleChange("task", e.target.value);
            }}
          />
          <textarea
            placeholder="description"
            value={input.description}
            onChange={(e) => {
              handleChange("description", e.target.value);
            }}
          />
          <input
            type="Date"
            placeholder="Date"
            value={input.date}
            onChange={(e) => {
              handleChange("date", e.target.value);
            }}
          />
          <button onClick={handleAdd}>{isEdit ? "save" : "+add"}</button>
        </div>
        <div>
          <table>
            <thead>
              <tr style={{ display: "flex", gap: "5rem", marginTop: "3rem" }}>
                <th>Task</th>
                <th>Description </th>
                <th>Date</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {inputData.map((data) => {
                return (
                  <>
                    <tr
                      key={data.id}
                      style={{
                        display: "flex",
                        gap: "5rem",
                        marginTop: "3rem",
                      }}
                    >
                      <td>{data.task}</td>
                      <td>{data.description}</td>
                      <td>{data.date}</td>
                      <td>
                        <button onClick={() => handleEdit(data.id)}>
                          {" "}
                          edit{" "}
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            handleDelete(data.id);
                          }}
                        >
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
      </div>
    </>
  );
};

export default TodoMultiFieldInput;
