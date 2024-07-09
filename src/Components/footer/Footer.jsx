import React from 'react'
import './FooterStyle.scss'


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CiInstagram, CiLinkedin, CiMail } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  return (
    <div>
       <footer>
            <div className="container">
                    <div className="footerBlock">
                            <div className="contactDetails">
                                <h4>ar.</h4>
                                <p>Let's Get Creative.</p>
                            </div>
                            <div className="socialMedia">
                                <h5>Keep In Touch</h5> 
                                <div className="socialIcons">
                                <div className="faceBook icons">
                                    <a href="https://www.instagram.com/" target='_blank' ><FaFacebook /></a>                                   
                                </div>
                                <div className="insta icons">
                                  <a href="https://www.instagram.com/" target='_blank'><CiInstagram /></a>
                                  {/* <div className="onHover">
                                      <img src="Images/instaQr.png"/> 
                                  </div> */}
                              </div>
                              <div className="linkedIn icons">
                                <a href="https://www.linkedin.com/in/mr-aashutosh-raj-b4394a108/" target='_blank'><CiLinkedin /></a>
                            </div>
                            <div className="gmail icons">
                                <a href="mailto:aashiiraj7770@gmail.com" target='_blank'><CiMail /></a>
                            </div>
                            
                            </div>  
                            </div>
                    </div>
            </div>
       </footer>
    </div>
  )
}
