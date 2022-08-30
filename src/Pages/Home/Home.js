import React from 'react'
import Banner from './Banner'
import Info from './Info'
import Services from './Services'
import Care from './Care'
import MakeAppointment from './MakeAppointment'
import Testimonials from './Testimonials'
import Footer from '../Shared/Footer'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Info ></Info>
        <Services></Services>
        <Care></Care>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home