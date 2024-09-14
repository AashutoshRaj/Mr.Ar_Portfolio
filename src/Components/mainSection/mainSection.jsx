import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import './mainSectionStyle.scss'
import About from '../../About/About'
import AboutS from '../../About/AboutS'
import Loading from '../LoadingScreen/Loading'
import MyWork from '../MyWork/MyWork'
import MyValue from '../MyValues/Values'
import Footer from '../footer/Footer'
import Skilles from '../Skilles/Skilles'
import BannerTwo from '../Banner/BannerTwo'

const  MainSection =() =>{
  return (
    <div className='allSection'>
        <Header/>
        {/* <Banner/> */}
        <BannerTwo/>
        <AboutS/>
        <About/>
        <Loading/>
        <MyWork/>
        <Skilles/>
        <MyValue/>
        <Footer/>

        {/* <About/> */}
        
    </div>
  )
}

export default MainSection
