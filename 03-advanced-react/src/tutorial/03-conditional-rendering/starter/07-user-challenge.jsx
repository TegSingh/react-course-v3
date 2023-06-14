import { useState } from "react";

const UserChallenge = () => {
  
  const [user, setUser] = useState(null);

  const login = () => {
    console.log("Login method called");
    // Generally a connection to Database or API is established in this method
    setUser({name: "Tegveer"})
  }

  const logout = () => {
    console.log("Logout method called");
    setUser(null)
  }
  return <div>
    {
      user ? <div>
          <h4>
            Hello there {user.name}
          </h4>
          <button className="btn" onClick={logout}>Logout</button>
        </div> : <div>
          <h4>
            Please login
          </h4>
          <button className="btn" onClick={login}>Login</button>
      </div>
    }
  </div>;
};

export default UserChallenge;
