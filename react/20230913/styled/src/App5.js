import React from 'react';
import styled, { css } from 'styled-components';

const One = css`
  color: red;
`;

const Two = css`
  border: 1px solid black;
`;

const Three = styled.div`
  ${One}
  ${Two}
`;

const Btn1 = styled.button`
  background-color: blue;
  color: white;
  width: 200px;
  height: 100px;
  font-size: 40px;
`;

const Btn2 = styled(Btn1)`
  border-radius: 100px;
  background-color: skyblue;
  color: black;
`;

const Btn3 = styled(Btn1)`
  border-radius: 100px;
  background-color: black;
  color: white;
`;

const App = () => {
  return (
    <>
      <Three>Lorem ipsum dolor</Three>
      <Btn1>버튼1</Btn1>
      <Btn2>버튼2</Btn2>
      <Btn3>버튼2</Btn3>
    </>
  );
};

export default App;
