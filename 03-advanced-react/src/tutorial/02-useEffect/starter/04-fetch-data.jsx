import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {

  // Set state hook
  const [users, setUsers] = useState([]);

  // Fetching data using Javascript fetch API
  useEffect(() => {
    const fetchData = async () => {
      // NOTE: Fetch API does not consider 404 as an error but axios does
      try {
        // Using Fetch API - use then as alternate
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users); // Set the fetched value as state
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  // Render the fetched users as an unordered list
  return <section>
    <h3>Github users</h3>
    <ul>
      {users.map((user) => {
        const {id, login, avatar_url, html_url} = user
        return <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h5>{login}</h5>
            <a href={html_url}>profile</a>
          </div>
        </li>
      })}
    </ul>
  </section>;
};

export default FetchData;
