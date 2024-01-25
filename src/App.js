import React, { useEffect, useRef, useState } from 'react';
import SignUp from './Components/SignUp';
import User from './Components/User';
const App = () => {

  const [count, setCount] = useState(0);

  const usePrevious = (value) => {

    console.log("value in usePrevious func: ",value)
    const ref = useRef(undefined);
    console.log("ref.current value outside of useEffect: ", ref.current)
    useEffect(() => {
      ref.current = value;
      console.log("ref.current value inside of useEffect: ", ref.current)
    },[value]);
           
    return ref.current;
  };
   
  const previousCount = usePrevious(count);  
  
  const handleClick = () => {
    setCount(count+1)
  }

  return (
    <div className='App'>
      <h1>React Practice</h1>
      Current Count: {count}
      <br/>
      Previous Count: {previousCount}
      <br/>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
