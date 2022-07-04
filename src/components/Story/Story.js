import React from 'react'
import './Story.scss'
import Profileicon from '../ProfileIcon/Profileicon'
import { user } from '../../data/user'

export default function Story() {
    let accountName=user[Math.floor(Math.random()*user.length)].username;
    if(accountName.length>10){
        accountName=accountName.substring(0,10)+"...";
    }
  return (
    <div className='story'>
        <Profileicon iconSize="big" storyBorder={true}/>
        <span className='accountName'>{accountName}</span>
    </div>
  )
}
