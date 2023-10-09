import ReactDOM from 'react-dom/client';

const { useState, useEffect } = (function makeMyHooks() {
  // hookIndex랑 hooks는 왜 쓰이는걸까?
  let hookIndex = 0;
  const hooks = [];

  // useState의 파라미터로 초기값을 받아온다.
  const useState = (initialValue) => {
    // state에는 hooks[hookIndex]의 값이 false면 초기값을 할당해준다.
    const state = hooks[hookIndex] || initialValue;
    // hooks[hookIndex] 에는 state의 값을 할당해준다.
    hooks[hookIndex] = state;

    // useState의 setState 함수
    const setState = (function () {
      // currentHookIndex에 hookIndex의 값을 할당해준다.
      // 근데 굳이 왜 currentHookIndex를 선언해주는걸까?
      const currentHookIndex = hookIndex;

      // setState의 파라미터로 변경할 value를 받아온다.
      return (value) => {
        // hooks[currentHookIndex], 즉 hooks[hookIndex]에 value를 할당해준다.
        hooks[currentHookIndex] = value;

        // hooks[hookIndex] = value;
        // 왜 hookIndex를 0으로 할당해주는걸까?
        hookIndex = 0;

        // render용 코드
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
      };
    })();

    // hookIndex 증가
    increaseIndex();
    // state, setState 비구조화 리턴
    return [state, setState];
  };

  const useEffect = (effect, deps) => {
    // Deps의 값을...?
    const prevDeps = hooks[hookIndex];

    // isFirstCall 함수에서 true를 리턴받거나
    //
    if (isFirstCall(prevDeps) || isDepsChanged(prevDeps, deps)) {
      effect();
    }

    hooks[hookIndex] = deps;
    increaseIndex();
  };

  // hookIndex를 증가시켜주는 함수
  const increaseIndex = () => {
    hookIndex++;
  };

  // useState, useEffect 반환
  return { useState, useEffect };
})();

// Deps의 값이 undefined면 true를 return 해주는 것 같다.
function isFirstCall(prevDeps) {
  return prevDeps === undefined;
}

// ...
function isDepsChanged(prevDeps, deps) {
  return deps.some((dep, idx) => dep !== prevDeps[idx]);
}

// App 컴포넌트
function App() {
  const [count, setCount] = useState(1);

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
