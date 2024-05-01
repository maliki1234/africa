
"use client"
import React from 'react'
import { Card } from '../ui/card'
import Logo from './Logo'
import { NavbarDemo } from './Navbar'
// import Navbar from './Navbar'

export default function Header() {
  return (
    <div>
        <Card  className='flex p-4 z-20 fixed w-full min-h-8 top-0 left-0 right-0 justify-between'>
            <Logo />
            {/* <Navbar/>
             */}
             {/* <NavbarDemo /> */}
        </Card>
    </div>
  )
}
