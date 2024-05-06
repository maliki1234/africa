"use client"


import React, { Component } from 'react'
import { ParallaxScrollDemo } from './Galery'
import { ScrollArea } from '../ui/scroll-area'

export default class Gallery extends Component {
  render() {
    return (
     
     <ScrollArea className='w-full h-screen rounded-md'>
       <div className="h-screen">
        <h3 className="text-center text-primary capitalize font-bold text-xl md:text-5xl p-2 md:p-2"> gallery</h3>
      <ParallaxScrollDemo/>
      </div>
     </ScrollArea>
      
    )
  }
}
