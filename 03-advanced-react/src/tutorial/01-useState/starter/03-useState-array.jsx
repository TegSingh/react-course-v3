import {data} from '../../../data';
import { useState } from 'react';

const UseStateArray = () => {

  // State contains array of people fetched from a data file
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    console.log(id);
    // Vanilla JS method - filter (o => condition)
    setPeople(people.filter((person) => person.id !== id))
  }

  const clearAllItems = () => {
    setPeople([]);
  }

  return <div>
    <h2> Use State Array </h2>
    {
      people.map(({id, name}) => {
        console.log(name);
        // Use key to avoid warnings in console
        return <div key={id}>
          <h4>{name}</h4>
          {/* Calling event handlers like onclick = removeItem() will call the method on HTML load in the beginning since it is an invokation not a reference */}
          <button type="button" className='btn' onClick={() => removeItem(id)}>Remove</button>
        </div>
      })
    }
    <button type='button' className='btn' onClick={clearAllItems}>Clear All Items</button>
  </div>
};

export default UseStateArray;
