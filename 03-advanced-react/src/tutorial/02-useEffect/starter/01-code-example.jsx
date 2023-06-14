import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("Hello world");
    // If the stateValue is updated in this method, triggers an infinite loop - Error: too many rerenders
    // setValue(value + 1);
  }
  sayHello(); // Displayed every time the state value changes
  
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
