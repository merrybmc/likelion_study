import React from 'react';

export default function DisplayMood(props) {
  return (
    <div>
      <h2>{props.mood ? `기분이 : ${props.mood}` : '아직 선택하지 않았어요...'}</h2>
    </div>
  );
}
