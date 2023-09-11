import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList(props) {
  const menus = ['좋아요! 😃', '정말 좋아요! 🤭', '최고에요! 😄', '미쳤어요!! 🤪'];

  return (
    <ul>
      {menus.map((moodEl, index) => {
        return <MenuListItem key={index} mood={moodEl} setCurrentMood={props.setCurrentMood} />;
      })}
    </ul>
  );
}
