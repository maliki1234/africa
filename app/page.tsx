// import Home from '@/components/Home/Home'
import HomePage from '@/components/Home/HomePage'
import Gallery from '@/components/gallery/Gallery'
import Header from '@/components/header/Header'
import Service from '@/components/service/Service'
import SideBar from '@/components/sidebar/SideBar'
import React from 'react'

export default function page() {
  return (
    <div className="w-screen h-screen bg-background">
      <Header />
      {/* <Home/>
       */}
<HomePage/>
<Service/>
<Gallery/>

    </div>
  )
}
