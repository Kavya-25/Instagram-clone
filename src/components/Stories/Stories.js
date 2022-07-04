import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import './Stories.scss'
import Story from '../Story/Story'

export default function Stories() {
  return (
    <div className='stories'>
    <HorizontalScroll className='scroll' reverseScroll={true}>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
        <Story/>
    </HorizontalScroll>
    </div>
  )
}
