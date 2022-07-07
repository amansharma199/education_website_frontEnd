import React from 'react'
import Banner from '../../components/banner/Banner'
import Contact from '../../components/contact/Contact'
import Courses from '../../components/courses/Courses'
import FAQ from '../../components/faq/FAQ'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ImgCarousel from '../../components/imgCarousel/ImgCarousel'
import Services from '../../components/services/Services'

const Home = () => {
  return (
    <div className='home'>
      <div className='homeWrapper'>
        <Header/>
        <Services/>
        <Banner/>
        <Courses/>
        <ImgCarousel/>
        <FAQ/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home