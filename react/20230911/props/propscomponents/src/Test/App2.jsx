import React, { useState } from 'react';
import Output from './Output';
import Test from './Test';

export default function App2() {
  const [value, setValue] = useState('최고다');
  const [myArray, setMyArray] = useState(['최고다', '정말 최고다', '미쳤다', '짱이다']);
  return (
    <div>
      <button onClick={() => setValue('정말 최고다')}>버튼1</button>
      <button onClick={() => setValue('미쳤다')}>버튼2</button>
      <button onClick={() => setValue('짱이다')}>버튼3</button>
      <Output value={value} />
      {myArray.map((data) => (
        <Test data={data} />
      ))}
    </div>
  );
}
