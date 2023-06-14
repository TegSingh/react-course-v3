import { useState } from 'react';

const UseStateObject = () => {

  const [name, setName] = useState('Tegveer');
  const [age, setAge] = useState(22);
  const [hobby, setHobby] = useState('music');

  const [person, setPerson] = useState({name: 'Tegveer', age: 22, hobby: 'music'})

  const updatePerson = () => {
    // Only one rerender due to auto batching - grouping of updates that occur in a short period of time
    setName('Hello')
    setAge(100)
    setHobby('world')
  }

  const updatePersonAsObject = () => {
    setPerson({name: "Hello", age: 100, hobby: 'world'})
    // If you only want to change part of the object, use Spread operator
    setPerson({...person, name:"Hemlo"})
  }

  return <div>
    <h2>Use State object example</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>Enjoys {person.hobby}</h4>
    <button className="btn" type='button' onClick={updatePersonAsObject}>Show Hello</button>
  </div>;
};

export default UseStateObject;
