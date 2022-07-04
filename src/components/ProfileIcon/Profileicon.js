import React from 'react'
import './Profileicon.scss'

export default function Profileicon(props) {
    const {iconSize,storyBorder,image}=props;
    function getRandomint(min,max){
        min=Math.ceil(min);
        max=Math.floor(max);
        return (Math.floor(Math.random()*(max-min+1))+min);
    }
    let randomId=getRandomint(1,70);
    let profileimg=image?image:`https://i.pravatar.cc/150?img=${randomId}`;
  return (
    <div className={storyBorder?"storyborder":""}>
    <img  className={`profileIcon ${iconSize}`} src={profileimg} alt="profile" />
    </div>
  )
}
