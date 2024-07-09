import React, {useEffect, useRef} from 'react'
import selfImage from '../../Images/SelfImg6.png'
// import instaQR from '../../Images/instaQr.png'
import './BannerStyle.scss';
// import { FaFacebookF, FaInstagram, CiLinkedin, FaLinkedinIn } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {

 
 
return (
    <> 
     <div className='BannerBlock'>
        <div className="BannerBox">
            <div className='slider'>
                    <div className='bgImages'>
                        <div class="selfImgage image">
                                <img src={selfImage}/>
                         </div>                          
                        </div>
                    <div className="onFullScreenShowtext">
                        {/* <div className='bannerText' ref={el =>{bannerAnima = el}}>
                                <p class="m-0">hi there!!</p>
                                <div class="introName">
                            <span>I'</span>
                            <span>m</span>                            
                            <div class="nameSingnature">
                                <span>A</span>
                                <span>a</span>
                                <span>s</span>
                                <span>h</span>
                                <span>u</span>
                                <span>t</span>
                                <span>o</span>
                                <span>s</span>
                                <span>h</span>
                           
                                <span>R</span>
                                <span>a</span>
                                <span>j</span>
                            </div>
                        </div>
                        <div class="socialIcons">
                            <div class="faceBook icons">
                                <a href="https://www.facebook.com/"><FaFacebookF/></a>
                            </div>
                            <div class="insta icons">
                            <a href="https://www.instagram.com/"><FaInstagram /></a>
                            <div class="onHover">
                                <img src={instaQR} alt='instaQR'/> 
                            </div>
                        </div>
                        <div class="linkedIn icons">
                            <a href="https://in.linkedin.com/"><FaLinkedinIn /></a>
                        </div>
                        </div> 
                        </div> */}

                    </div>
                    <div class="bannerText_">
                   <div class="fullName scrollimgzoom"> 
                    <div class="h4 lName" >Raj</div>
                    {/* <div class="h4">A</div>
                    <div class="h4">J</div> */}
                    {/* <div class="h4">o</div>
                    <div class="h4">n</div>
                    <div class="h4">t</div>
                    <div class="h4"style={{width:'15px'}}> </div>
                    <div class="h4">e</div>
                    <div class="h4">n</div>
                    <div class="h4">d</div> */}
                  
                   </div>
                   <div class="devLovText">
                    {/* <h1>Aashutosh</h1> */}
                    <div class="h4 onet">A</div>
                    <div class="h4 lOne">A</div>
                    <div class="h4 lTwo">S</div>
                    <div class="h4 lThree">H</div>
                    <div class="h4 lFour">U</div>
                    <div class="h4 lFive">T</div>                    
                    <div class="h4 lSix">O</div>
                    <div class="h4 lSeven">S</div>
                    <div class="h4 lEight">H</div>  
                   </div>
                   {/* <img src={selfImage} className='imageBanner'/> */}
                   </div>
                </div>   

                <div className='shadow'></div>  
                </div>
     </div>
    </>
  )
}

export default Banner
