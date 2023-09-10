import React from 'react';

export default function MenuListItem(props) {
  const onitemClick = () => {
    props.setCurrentMood(props.mood);
  };
  return (
    <li>
      <button onClick={onitemClick}>기분이 : {props.mood}</button>
    </li>
  );
}
