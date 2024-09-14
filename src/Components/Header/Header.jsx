import React, {useRef, useEffect} from 'react'
import kanha from '../../Images/kanha.png'
import logoAr from '../../Images/logoAR.png'
import '../Header/HeaderStyle.scss'
import { gsap } from "gsap";    

import fileResume from '../Header/AshutoshRUCV-2024.docx'



const Header = ({}) =>{
useEffect(() => {
    gsap.fromTo('.myLogo', { y: '-80px' }, { duration: 1, y: '0%', ease: 'power2.out', delay: 1 });

}, [])


    return( 
        <>
        <header class="header">
        <div class="headerInner ">
            <div class="myLogo">
                <img src={logoAr}></img>               
                {/* <p>Mr.<span>ar</span>
                    <img              
                    src={kanha} alt='image'/>
                </p>                */}
            </div>
            <div className="resumeDownload">
                <div className="resume">
                <a href={fileResume} download="">Download CV</a>
                </div>
            <div class="lRSide" >               
                <p>R</p>
                <span></span>
                <p>K</p>
            </div>
            </div>
            </div>
        </header>
        </>
    )
}


export default Header
