import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return <div>
    {/* Note the single line shorthand invocation of the toggle on click method */}
    <button className="btn" onClick={() => setToggle(!toggle)}>Toggle</button>
    {/* Display Second component if toggle is true */}
    {toggle && <SecondComponent />}
  </div>;
};

const SecondComponent = () => {

  // Displayed everytime the second component gets rerendered on initial render - toggling leads to mount and unmount of the component
  useEffect(() => {
    console.log("Use effect callback function log");
  }, []);

  return <div>
    <h2>
      Hello from second component
    </h2>
  </div>
}
export default CleanupFunction;
