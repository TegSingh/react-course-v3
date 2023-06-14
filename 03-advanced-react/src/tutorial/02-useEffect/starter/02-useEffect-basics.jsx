import { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello there');
  };

  sayHello();

  // Use Effect [call back function, dependency array]
  // NOTE: Callback function cannot be async since it returns a promise whereas use effect is meant to return a cleanup function
  useEffect(() => {
    
    console.log("Hello from use effect"); // Runs on every render
  }, []) // Empty dependency array means only run on the initial render

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;