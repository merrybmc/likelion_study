import React, { useEffect } from 'react';
import InputComponent from './components/InputComponent';
import SomethingComponent from './components/SomeThingComponent';
import useMouseLocation from './Hooks/useMouseLocation';
import useScroll from './Hooks/useScroll';

function App() {
  const mouseLocation = useMouseLocation();
  const isBottom = useScroll();

  console.log(isBottom);

  return (
    <div>
      <div
        style={{
          height: 3000,
          width: 100,
          backgroundColor: mouseLocation.x > 100 ? 'royalblue' : 'hotpink',
        }}
      ></div>
      <InputComponent />
      <SomethingComponent />
    </div>
  );
}

export default App;
