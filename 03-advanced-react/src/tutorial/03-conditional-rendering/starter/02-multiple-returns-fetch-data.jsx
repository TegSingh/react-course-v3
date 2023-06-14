import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  
  // Set state value for user object to be fetched as null initially
  const [isLoading, setIsLoading] = useState(true); // Loading initially
  const [isError, setIsError] = useState(false); // No errors to begin with
  const [user, setUser] = useState(null);

  // Javascript access examples - Object
  const x = {y: 4, z: 5};
  console.log(x.y, x.z, x.a); // 4 5 undefined - no errors
  const m = null;
  console.log(m?.a); // Will show error without ? - should not be null or undefined - property does not exist error will be shown

  // Javascript access examples - Array
  const randomList = []
  console.log(randomList[0]); // return undefined with no errors
  console.log(randomList[0]?.x) // Error: cannot read properties of undefined - avoid using ?

  // Run the following effect on intial render
  useEffect(() => {
    // Defining fetch user outside of the use effect leads to ES Lint warning
    const fetchUser = async () => {
      try {
        const response = await fetch(url);

        // If response does not exist - 404 not considered error by Fetch API
        if (!response.ok) {
          console.log("Response does not exist");
          setIsError(true);
          setIsLoading(false);
        }
        const user = await response.json();
        setUser(user);
        console.log(user);
      } catch (error) {
        // 404 errors not caught here
        console.log("Error: ", error);
        setIsError(true);
      }
      setIsLoading(false)
    }
    // Invoke to see loading
    setTimeout(() => {
      fetchUser(); // Invoke fetch function after defining it
    }, 3000)
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error!!</h2>
  }

  const {avatar_url, login, id} = user
  return <div>
    <img src={avatar_url} alt={login} />
  </div>;
};



export default MultipleReturnsFetchData;
