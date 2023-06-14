// Importing the hook from react
import { useState } from "react";

const UseStateBasics = () => {

  const [count, setCount] = useState(1);
  console.log(count, setCount); // Value and the function that updates that value

  const [name, setName] = useState("Tegveer"); // Can only call hooks inside components or conditionally

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // set functions do not update value immediately. This still displays previous value
  };

  return <div>
    <h2>Use State Basics</h2>
    <h3>Button clicked {count} times</h3>
    {/* cannot use class use className in JSX */}
    <button type="button" className="btn" onClick={handleClick}>Increment</button> 
  </div>
};

export default UseStateBasics;