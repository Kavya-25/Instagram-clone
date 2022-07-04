import React from 'react'
import './Menu.scss'
import {ReactComponent as Home } from '../images/svg/home.svg'
import {ReactComponent as Inbox } from '../images/svg/inbox.svg'
import {ReactComponent as Newpost } from '../images/svg/newpost.svg'
import {ReactComponent as Explore } from '../images/svg/explore.svg'
import {ReactComponent as Notifications } from '../images/svg/notification.svg'
import Profileicon from '../ProfileIcon/Profileicon'
import image from '../images/kavya.jpg'

export default function Menu() {
  return (
    <div className='menu'>
  <Home className='icon'/>
  <Inbox className='icon'/>
  <Newpost className='icon'/>
  <Explore className='icon'/>
  <Notifications className='icon'/>
  <div className="profileicon">
  <Profileicon iconSize="small" image={image} />
  </div>
  
    </div>
  )
}
