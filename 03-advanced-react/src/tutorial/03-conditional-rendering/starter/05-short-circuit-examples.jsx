import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  
  return (
    <div>
      {/* If text exists, display text otherwise display default value */}
      <h2>{text || 'default value'}</h2>
      {text && <div>
          <h2>This will not be displayed</h2>
        </div>}
      {/* Use the not operator */}
      {!text && <div>
          <h2>This will be displayed</h2>
        </div>}
      {/* If user exists and is truthy, display the second component */}
      {user && <SecondComponent name={user.name} />}
      {/* The values that are defining what the short circuit returns are dynamically changing */}
      <h2>Ternary Operator</h2>
      {/* Using Ternary operator - If is Editing flag is true, display edit as button text, otherwise display add*/}
      <button className='btn'>{isEditing ? "Edit": "Add"}</button>
      {user ? <h4>
          Hello user, {user.name}
        </h4> : <h4>
          User not found
        </h4>}
    </div>
  );
};

const SecondComponent = ({name}) => {
  return <div>
    <h1>User name: {name}</h1>
  </div>
}
export default ShortCircuitExamples;
