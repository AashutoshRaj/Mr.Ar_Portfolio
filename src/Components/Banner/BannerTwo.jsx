import React, { useRef } from 'react'
import selfImage from '../../Images/SelfImg6.png'
import './BannerStyle.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
// import ScrollTrigger from 'gsap-trial/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);


const BannerTwo = ({}) => { 
const myName= "Aashutosh Raj"
const position = "Front end Developer"
   
const gsapRef = useRef()

useGSAP(()=>{
    gsap.from(".firstName",{
        y:50,
        opacity:0,
        stagger:0.3, 
        duration:1,
        delay:2.5,
    })
    gsap.from(".position",{
        y:50,
        opacity:0,
        stagger:-0.3, 
        duration:1,
        delay:2.5,
    })

    gsap.from(".basedOn",{
        y:50,
        opacity:0,
       
        duration:1,
        delay:5,
    })

    


})

return (
    <> 
       <div className='heroContainer'>
            <div className='heroColumnLeftSide'>
            <h1>
            {myName.split('').map((char, index) => (
                <span key={char} className='firstName' ref={gsapRef}>{myName[index]}</span>
            ))}
            </h1>
                <div className='basedOn'>
                        <p>Based on Punjab, INDIA</p>
                </div>
            </div>
            <div className='heroColumnCenterSide'>
                   <div className='pictureArea'>
                      <img src={selfImage}/>
                    </div> 
            </div>
            <div className='heroColumnRightSide'>
                <h1>
                        {position.split('').map((char, index) => (
                        <span key={char} className='position'>{position[index]}</span>
                    ))}
                  
                </h1>
            </div>

       </div>
    </>
  )
}

export default BannerTwo
