import { useState } from 'react';

const ShortCircuitOverview = () => {
  // False: null, 0, "", undefined, NaN
  // True: All other values are true

  const x = "hello";
  const y = '';
  const z = 0;
  const p = 1;

  if (x)
    console.log("X is truthy");
  if (!y)
    console.log("Y is falsy");
  if (!z)
    console.log("Z is falsy");
  
  console.log("1: ", x && y); // y - the false value displayed
  console.log("2: ", z && p); // z - the false value displayed
  console.log("3: ", x && p); // p - second displayed if both are true
  console.log("4: ", x || y); // x - the true value displayed
  console.log("5: ", p || z); // p - first value displayed if both are true
  console.log("6: ", z || x); // x - the true value displayed
  
  // Falsy value
  const [text, setText] = useState('');
  // Truthy value
  const [name, setName] = useState('Tegveer')


  // Cannot use if conditions in JSX but still want conditional rendering - short circuit
  return <div>
    <h4>Falsy OR: {text || 'hello world'}</h4>
    <h4>Falsy AND: {text && 'hello world'}</h4>
    <h4>Truthy OR: {name || 'hello world'}</h4>
    <h4>Truthy AND: {name && 'hello world'}</h4>
  </div>;
};
export default ShortCircuitOverview;
