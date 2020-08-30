import React, { useState, useEffect } from 'react';

const HookCounter = () => {
  const [ count, setCount ] = useState(0);
  const [ name, setName ] = useState('');

  useEffect(() => {
    console.log("Setting title");
    document.title = `Clicked ${count} times`;
  });

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