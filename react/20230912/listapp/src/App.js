import './App.css';
import React from 'react';

function App() {
  return (
    <div onClick={(e) => console.log(e)}>
      <input onChange={(e) => console.log(e)}></input>
    </div>
  );
}

export default App;
