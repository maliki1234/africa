// import Home from '@/components/Home/Home'
import HomePage from '@/components/Home/HomePage'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Gallery from '@/components/gallery/Gallery'
import Header from '@/components/header/Header'
import Service from '@/components/service/Service'
import SideBar from '@/components/sidebar/SideBar'
import { Team } from '@/components/team/Team'
import React from 'react'

export default function page() {
  return (
    <div className="w-screen h-screen bg-background">
      <Header />
      {/* <Home/>
       */}
<HomePage/>
<About/>
<Service/>
<Gallery/>
<Contact/>
<Team/>


    </div>
  )
}
