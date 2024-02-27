import { useRef, useState } from "react";

const InputDemo = () => {
  const [enteredName, setEnteredName] = useState("");
  const inputVal = useRef();

  const handleClick = () => {
    setEnteredName(inputVal.current.value);
  };

  return (
    <>
      <h1>welcome {enteredName ?? "unknown Entity"}</h1>
      <input type="text" ref={inputVal} />
      <button onClick={handleClick}>set Name</button>
    </>
  );
};

export default InputDemo;
