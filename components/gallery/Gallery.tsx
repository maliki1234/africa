"use client"


import React, { Component } from 'react'
import { ParallaxScrollDemo } from './Galery'

export default class Gallery extends Component {
  render() {
    return (
     
      <div className="pt-16 h-screen">
        <h3 className="text-center capitalize font-bold text-xl md:text-5xl p-2 md:p-4"> gallery</h3>
      <ParallaxScrollDemo/>
      </div>
      
    )
  }
}
