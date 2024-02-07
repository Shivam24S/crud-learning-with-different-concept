// import { useState } from "react";

// const NewTodo = () => {
//   const [value, setValue] = useState({
//     task: "",
//     date: "",
//   });

//   const [savedData, setSavedData] = useState([]);

//   const [isEdit, setIsEdit] = useState("");

//   const handleChange = (inputIdentifier, newValue) => {
//     setValue((prevValue) => {
//       return {
//         ...prevValue,
//         [inputIdentifier]: newValue,
//       };
//     });
//     console.log("task", value.task);
//     console.log("date", value.date);
//   };

//   const handleAdd = () => {
//     if (!value) {
//       alert("please enter Detail");
//     } else if (isEdit) {
//       setSavedData((prevData) =>
//         prevData.map((data) =>
//           data.id === isEdit
//             ? { ...data, taskInput: value.task, taskDate: value.date }
//             : data
//         )
//       );
//       setValue("");
//       setIsEdit("");
//     } else {
//       const newData = {
//         id: new Date().getDay().toString(),
//         taskInput: value.task,
//         taskDate: value.date,
//       };
//       setSavedData((prevData) => [...prevData, newData]);
//     }
//   };

//   const handleDelete = (id) => {
//     const deleteItem = savedData.filter((data) => {
//       return data.id !== id;
//     });
//     setSavedData(deleteItem);
//   };

//   const handleUpdate = (id) => {
//     const updateItems = savedData.find((data) => {
//       return id === data.id;
//     });
//     setSavedData(updateItems.taskInput, updateItems.taskDate);
//     setIsEdit(id);
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//         }}
//       >
//         <h1> Crud To-do</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Task"
//             value={value.task}
//             onChange={(e) => handleChange("task", e.target.value)}
//           />
//         </div>
//         <div style={{ marginTop: "2rem" }}>
//           <input
//             type="date"
//             placeholder="Date"
//             value={value.date}
//             onChange={(e) => handleChange("date", e.target.value)}
//           />
//         </div>
//         <div style={{ marginTop: "2rem" }}>
//           <button onClick={handleAdd}>Add</button>
//         </div>
//         <br />
//         <table>
//           <thead>
//             <tr>
//               <th>task</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               {savedData.map((value) => {
//                 return (
//                   <>
//                     <div key={value.id}>
//                       <td>{value.taskInput}</td>
//                       <td>{value.taskDate}</td>
//                       <button onClick={() => handleUpdate(value.id)}>
//                         Update
//                       </button>
//                       <button onClick={() => handleDelete(value.id)}>
//                         Delete
//                       </button>
//                     </div>
//                   </>
//                 );
//               })}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };
// export default NewTodo;

// import { useState } from "react";

// const NewTodo = () => {
//   const [value, setValue] = useState({
//     task: "",
//     date: "",
//   });

//   const [savedData, setSavedData] = useState([]);

//   const [isEdit, setIsEdit] = useState("");

//   const handleChange = (inputIdentifier, newValue) => {
//     setValue((prevValue) => {
//       return {
//         ...prevValue,
//         [inputIdentifier]: newValue,
//       };
//     });
//     console.log("task", newValue); // Use newValue directly
//   };

//   const handleAdd = () => {
//     if (!value.task || !value.date) {
//       alert("please enter Detail");
//     } else if (isEdit) {
//       setSavedData((prevData) =>
//         prevData.map((data) =>
//           data.id === isEdit
//             ? { ...data, taskInput: value.task, taskDate: value.date }
//             : data
//         )
//       );
//       setValue({ task: "", date: "" }); // Reset to an empty object
//       setIsEdit("");
//     } else {
//       const newData = {
//         id: new Date().getTime().toString(),
//         taskInput: value.task,
//         taskDate: value.date,
//       };
//       setSavedData((prevData) => [...prevData, newData]);
//       setValue({ task: "", date: "" }); // Reset to an empty object
//     }
//   };

//   const handleDelete = (id) => {
//     const deleteItem = savedData.filter((data) => {
//       return data.id !== id;
//     });
//     setSavedData(deleteItem);
//   };

//   const handleUpdate = (id) => {
//     const updateItem = savedData.find((data) => {
//       return id === data.id;
//     });
//     setValue({ task: updateItem.taskInput, date: updateItem.taskDate });
//     setIsEdit(id);
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//         }}
//       >
//         <h1> Crud To-do</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Task"
//             value={value.task}
//             onChange={(e) => handleChange("task", e.target.value)}
//           />
//         </div>
//         <div style={{ marginTop: "2rem" }}>
//           <input
//             type="date"
//             placeholder="Date"
//             value={value.date}
//             onChange={(e) => handleChange("date", e.target.value)}
//           />
//         </div>
//         <div style={{ marginTop: "2rem" }}>
//           <button onClick={handleAdd}>Add</button>
//         </div>
//         <br />
//         <table>
//           <thead>
//             <tr>
//               <th>task</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {savedData.map((value) => (
//               <tr key={value.id}>
//                 <td>{value.taskInput}</td>
//                 <td>{value.taskDate}</td>
//                 <td>
//                   <button onClick={() => handleUpdate(value.id)}>Update</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleDelete(value.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default NewTodo;

// with some css

import { useState } from "react";

const NewTodo = () => {
  const [value, setValue] = useState({
    task: "",
    date: "",
  });

  const [savedData, setSavedData] = useState([]);

  const [isEdit, setIsEdit] = useState("");

  const handleChange = (inputIdentifier, newValue) => {
    setValue((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: newValue,
      };
    });
    console.log("task", newValue); // Use newValue directly
  };

  const handleAdd = () => {
    if (!value.task || !value.date) {
      alert("please enter Detail");
    } else if (isEdit) {
      setSavedData((prevData) =>
        prevData.map((data) =>
          data.id === isEdit
            ? { ...data, taskInput: value.task, taskDate: value.date }
            : data
        )
      );
      setValue({ task: "", date: "" }); // Reset to an empty object
      setIsEdit("");
    } else {
      const newData = {
        id: new Date().getTime().toString(),
        taskInput: value.task,
        taskDate: value.date,
      };
      setSavedData((prevData) => [...prevData, newData]);
      setValue({ task: "", date: "" }); // Reset to an empty object
    }
  };

  const handleDelete = (id) => {
    const deleteItem = savedData.filter((data) => {
      return data.id !== id;
    });
    setSavedData(deleteItem);
  };

  const handleUpdate = (id) => {
    const updateItem = savedData.find((data) => {
      return id === data.id;
    });
    setValue({ task: updateItem.taskInput, date: updateItem.taskDate });
    setIsEdit(id);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginBottom: "20px", fontSize: "24px" }}> Crud To-do</h1>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Task"
            value={value.task}
            onChange={(e) => handleChange("task", e.target.value)}
            style={{ padding: "5px", fontSize: "16px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="date"
            placeholder="Date"
            value={value.date}
            onChange={(e) => handleChange("date", e.target.value)}
            style={{ padding: "5px", fontSize: "16px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={handleAdd}
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            {isEdit ? "save" : "add"}
          </button>
        </div>
        <br />
        <table
          style={{
            borderCollapse: "collapse",
            width: "80%",
            maxWidth: "600px",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Task
              </th>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Date
              </th>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Action
              </th>
              <th style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {savedData.map((value) => (
              <tr key={value.id}>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {value.taskInput}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  {value.taskDate}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <button
                    onClick={() => handleUpdate(value.id)}
                    style={{
                      padding: "5px 10px",
                      fontSize: "14px",
                      backgroundColor: "#008CBA",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                  <button
                    onClick={() => handleDelete(value.id)}
                    style={{
                      padding: "5px 10px",
                      fontSize: "14px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NewTodo;
