import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const { useState, useEffect } = (function makeMyHooks() {
  let hookIndex = 0;
  const hooks = [];

  const useState = (initialValue) => {
    const state = hooks[hookIndex] || initialValue;
    hooks[hookIndex] = state;

    const setState = (function () {
      const currentHookIndex = hookIndex;

      return (value) => {
        hooks[currentHookIndex] = value;
        hookIndex = 0;
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
      };
    })();

    increaseIndex();
    return [state, setState];
  };

  const useEffect = (effect, deps) => {
    const prevDeps = hooks[hookIndex];

    if (isFirstCall(prevDeps) || isDepsChanged(prevDeps, deps)) {
      effect();
    }

    hooks[hookIndex] = deps;
    increaseIndex();
  };

  const increaseIndex = () => {
    hookIndex++;
  };

  return { useState, useEffect };
})();

function isDepsChanged(prevDeps, deps) {
  return deps.some((dep, idx) => dep !== prevDeps[idx]);
}

function isFirstCall(prevDeps) {
  return prevDeps === undefined;
}

function App() {
  const [count, setCount] = useState();

  const 출력 = () => {
    console.log(count);
  };

  const 변경 = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Hello UseEffect');
  }, []);

  useEffect(() => {
    console.log('변경 완료');
  }, [count]);

  return (
    <>
      <button onClick={출력}>출력</button>
      <button onClick={변경}>변경</button>
    </>
  );
}

export default App;
