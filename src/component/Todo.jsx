// import React, { useState } from "react";

import { useState } from "react";

// const Todo = () => {
//   // State for input field
//   const [input, setInput] = useState("");

//   // State for the list of items
//   const [items, setItems] = useState([]);

//   // State for tracking the item being edited
//   const [isEdit, setIsEdit] = useState("");

//   // Function to handle adding or updating an item
//   const handleAdd = () => {
//     if (!input) {
//       // Display an alert if input is empty
//       alert("Please Fill Data");
//     } else {
//       if (isEdit) {
//         // If isEdit is not empty, update the existing item
//         setItems((prevItems) =>
//           prevItems.map((list) =>
//             list.id === isEdit ? { ...list, name: input } : list
//           )
//         );
//         setInput(""); // Clear input field
//         setIsEdit(""); // Reset isEdit after editing
//       } else {
//         // If isEdit is empty, add a new item
//         const newItem = { id: new Date().getTime().toString(), name: input };
//         setItems((prevItems) => [...prevItems, newItem]);
//         setInput(""); // Clear input field
//       }
//     }
//   };

//   // Function to handle deleting an item
//   const handleDelete = (id) => {
//     const updatedList = items.filter((list) => id !== list.id);
//     setItems(updatedList);
//     setIsEdit(""); // Reset isEdit after deleting
//   };

//   // Function to handle updating an item
//   const handleUpdate = (id) => {
//     const editedData = items.find((list) => list.id === id);
//     setInput(editedData.name); // Set input field to the item's name
//     setIsEdit(id); // Set isEdit to the item's id
//   };

//   return (
//     <>
//       {/* Input field for adding/updating items */}
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       {/* Button to add/update items */}
//       <button onClick={handleAdd}>Add/Update</button>
//       <br />
//       {/* Display the list of items */}
//       {items.map((list) => (
//         <div key={list.id}>
//           {list.name}
//           {/* Button to delete an item */}
//           <button onClick={() => handleDelete(list.id)}>Delete</button>
//           {/* Button to update an item */}
//           <button onClick={() => handleUpdate(list.id)}>Update</button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Todo;

// import React, { useState } from "react";

// const Todo = () => {
//   const [input, setInput] = useState("");

//   const [inputData, setInputData] = useState([]);

//   const [isEdit, setIsEdit] = useState("");

//   const handleClick = () => {
//     if (!input) {
//       // Display an alert if input is empty
//       alert("Please Fill Data");
//     } else {
//       if (isEdit) {
//         // If isEdit is not empty, update the existing item
//         setInputData((prevItems) =>
//           prevItems.map((list) =>
//             list.id === isEdit ? { ...list, name: input } : list
//           )
//         );
//         setInput(""); // Clear input field
//         setIsEdit(""); // Reset isEdit after editing
//       } else {
//         // If isEdit is empty, add a new item
//         const newItem = { id: new Date().getTime().toString(), name: input };
//         setInputData((prevItems) => [...prevItems, newItem]);
//         setInput(""); // Clear input field
//       }
//     }
//   };

//   const handleDelete = (id) => {
//     const updateList = inputData.filter((list) => {
//       return list.id !== id;
//     });
//     setInputData(updateList);
//   };

//   const handleUpdate = (id) => {
//     const editData = inputData.find((list) => {
//       return id === list.id;
//     });

//     setInput(editData.name);
//     setIsEdit(id);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       <button onClick={handleClick}>{isEdit ? "update" : "add"}</button>

//       <br />

//       {inputData.map((list) => {
//         return (
//           <>
//             <div key={list.id}>{list.name}</div>
//             <button onClick={() => handleDelete(list.id)}>delete</button>
//             <button onClick={() => handleUpdate(list.id)}>Update</button>
//           </>
//         );
//       })}
//     </>
//   );
// };

// export default Todo;

// rewriting

const Todo = () => {
  const [input, setInput] = useState("");

  const [inputData, setInputData] = useState([]);

  const handleAdd = () => {
    const newValue = { id: new Date().getTime().toString(), inputValue: input };
    setInputData((prevData) => [...prevData, newValue]);
  };

  return (
    <>
      <h1>todo</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
export default Todo;
