import { useState, useEffect } from 'react';

const Example = () => {

  const [condition, setCondition] = useState(true);
  
  // Cannot call hooks conditionally
  if (condition) {
    const [state, setState] = useState(false);
    console.log("State: ", state);
  }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // This gets called conditionally since condition is not true - does not get called
  useEffect(() => {
    console.log('hello there');
  }, []);

  return <h2>example</h2>;
};

export default Example;
