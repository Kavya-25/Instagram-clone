import React from 'react'
import './CardMenu.scss'
import {ReactComponent as Like} from '../images/svg/notification.svg';
import {ReactComponent as Comment} from '../images/svg/comment.svg';
import {ReactComponent as Save} from '../images/svg/save.svg';


export default function CardMenu() {
  return (
    <div className='cardmenu'>
    <div className="interactions">
    <Like className='icon'/>
      <Comment className='icon'/>
    </div>
      <div className="bookmark">
<Save className='icon'/>
      </div>
    </div>
  )
}
