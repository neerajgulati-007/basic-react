import React, { useState, useEffect } from 'react';

const HookCounter = () => {
  const [ count, setCount ] = useState(0);
  const [ name, setName ] = useState('');

  /*
    - To implement conditional rendering,
    useEffect takes an array as second parameter
    The array consists a list of all those params
    that lead to reexecution of hook.
  */
  useEffect(() => {
    console.log("Setting title");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <div>
        Hook Component:
      </div>
      <div>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
      </div>
      <span className="mr">
        You clicked {count} times
      </span>
      <button onClick={()=>setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default HookCounter;