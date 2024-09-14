import React from 'react'
import selfImage from '../../Images/SelfImg6.png'
import './BannerStyle.scss';

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
                    <div class="bannerText_">
                   <div class="fullName scrollimgzoom"> 
                    <div class="h4 lName" >Raj</div>
                   </div>
                   <div class="devLovText">                   
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
                 
                   </div>
                </div>   

                <div className='shadow'></div>  
                </div>
     </div>
    </>
  )
}

export default Banner
