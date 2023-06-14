import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)
  const handleClick = () => {
    console.log("Button clicked to toggle alert");
    setShowAlert(!showAlert)
  }

  return <div>
    <h2>toggle challenge</h2>
    <button className="btn" onClick={handleClick}>Toggle</button>
    {showAlert && <Alert />}
  </div>;
};

// Set up the alert component
const Alert = () => {
  return <h2>This is an alert</h2>
}
export default ToggleChallenge;
