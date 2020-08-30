import React from 'react';
import './App.css';

import Counter from './components/useEffect/ClassCounter';
//import Counter from './components/useEffect/HookCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default App;
