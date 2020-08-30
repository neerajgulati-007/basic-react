import React, { useState, useEffect } from 'react';

const HookCounter = () => {
  const [ count, setCount ] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <div>
        Hook Component:
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