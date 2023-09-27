import React, { useState } from 'react';
import useInput from '../Hooks/useInput';

function InputComponent() {
  const [value, onChange] = useInput('');

  return (
    <div>
      <input type='text' onChange={onChange} />
      <div>{value}</div>
    </div>
  );
}

export default InputComponent;
