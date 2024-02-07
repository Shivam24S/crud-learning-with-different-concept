//  import React, { useState } from "react";

// const Todo = () => {
//   const [addTodo, setAddTodo] = useState("");

//   const [items, setItems] = useState([]);

//   const handleClick = () => {
//     if (!addTodo) {
//       return;
//     } else {
//       setItems([...items, addTodo]);
//       setAddTodo("");
//     }
//   };

//   const handleDelete = (id) => {
//     const updatedList = items.filter((data, index) => {
//       return index !== id;
//     });
//     setItems(updatedList);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={addTodo}
//         onChange={(e) => setAddTodo(e.target.value)}
//       />{" "}
//       <button onClick={handleClick}>Add</button>
//       <div>
//         {items.map((data, index) => {
//           return (
//             <>
//               <div key={index}>{data}</div>
//               <br />
//               <button onClick={() => handleDelete(index)}>Delete</button>
//             </>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Todo;

import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");

  const [items, setItems] = useState([]);

  const [updateId, setUpdateId] = useState("");

  const [isEdit, setIsEdit] = useState("");

  const handleAdd = () => {
    if (!input) {
      return alert("Please Fill Data");
    } else if (input) {
      setItems(
        items.map((list) => {
          if (list.id === isEdit) {
            return { ...list, name: input };
          }
          return list;
        })
      );
    } else {
      const allData = { id: new Date().getTime().toString(), name: input };
      setItems([...items, allData]);
      setInput("");
    }
  };

  const handleDelete = (id) => {
    const updateList = items.filter((list) => {
      return id !== list.id;
    });
    setItems(updateList);
    setUpdateId(id);
  };

  const handleUpdate = (id) => {
    const editedData = items.find((list) => {
      return list.id === id;
    });
    console.log(editedData);
    setInput(editedData.name);
    setIsEdit(id);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <button onClick={handleAdd}>add</button>
      <br />
      {items.map((list) => {
        return (
          <>
            <div key={list.id}>
              {list.name}
              <button onClick={() => handleDelete(list.id)}>delete</button>
              <button onClick={() => handleUpdate(list.id)}>Update</button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Todo;
