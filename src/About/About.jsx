import React, {useEffect} from 'react'
import './AboutStyle.scss'
import selfImage from '../Images/selfImg3.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
const About = () => {

useEffect(()=>{
 
  });




  return (
    <>  
    
    <div className="aboutMe box">
                        <div className="aboutMeText">
                            <div className="heading">
                                <h2>About</h2>
                                <span>Me</span>
                            </div>
                           
                            <p className="infor">
                               During my career, I have developed a strong skillset in Front End  and have worked on various projects ranging from small business websites to complex web applications.  I am passionate about staying up-to-date with the latest design trends and <span>technologies</span>, and I am always looking for new challenges to push my skills further.</p>
                          {/* <div className="checkMYW">
                                <a href="#myWork">Click here for my Work
                                    <div href="" className="arrow-down">  
                                        <div className="left"></div>
                                        <div className="right"></div>                                
                                    </div>

                                </a>
                               
                          </div> */}
                        </div>
                        <div className="selfImage">
                            <div className='shadow'></div>
                            <div className='shadowleftSide'></div>
                            <div className="image">
                                <img src={selfImage} alt=""/>                              
                            </div>                            
                        </div>                        
                </div>

           
                 
    </>
  )
}

export default About
