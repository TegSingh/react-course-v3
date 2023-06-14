import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue(value + 1);
    console.log(value); // Not updated right after - still see the previous value
  }

  const handleClickFunctionalUpdate = () => {
    setValue((previousValue) => {
      const newValue = previousValue + 1;
      console.log(newValue); // Access the updated value within the function if need be
      return newValue;
    })
  }

  const handleClickTimeout = () => {
    // If within these 3 seconds the button has been clicked 5 times, the value still only increments by 1 since react doesnt have a previous value to intiate from so it always starts from 0
    console.log("Button clicked");
    
    // If clicked 10 times, adds 10 set timeouts - each should grab the previous value. If setvalue(value + 1) is used, since the previous value does not exist, the value considered 0
    setTimeout(() => {
      console.log("Before set value: ", value);
      // This grabs the previous value and updates
      setValue((value) => {
        console.log(value);
        return value + 1
      });
      console.log("After set value: ", value);
    }, 3000)
  }

  
  return <div>
    <h2>Use State Exception</h2>
    <h3>Solution: Function update set state - take the previous state as argument and return updated value</h3>
    <h1>{value}</h1>
    <button className="btn" type="button" onClick={handleClickTimeout}>Increase</button>
  </div>;
};

export default UseStateGotcha;
