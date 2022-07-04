import React from 'react'
import Menu from '../Menu/Menu'
import logo from '../images/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import './Navigation.scss'

export default function Navigation() {
  return (
    <div className='navigation'>
        <div className="container">
            <img className='logo' src={logo} alt='instagram logo'/>
            <div className="search">
               <AiOutlineSearch className='searchIcon'/>
                <span className='searchText'>Search</span>
            </div>
            <Menu/>
        </div>
    </div>
  )
}
