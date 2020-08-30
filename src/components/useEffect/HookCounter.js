import React, { useState } from 'react';

const HookCounter = () => {
  const [ count, setCount ] = useState(0);
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