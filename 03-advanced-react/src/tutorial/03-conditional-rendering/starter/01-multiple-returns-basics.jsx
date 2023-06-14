import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {

  // Set boolean to show whether data is loading
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Change value of state in 3 seconds - used to wait for API Fetch to complete
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, [])
  // If this is true, the other returns will get skipped
  if (isLoading) {
    return <h2>Loading....</h2>
  }
  return <h2>Multiple returns basics</h2>;
};
export default MultipleReturnsBasics;
