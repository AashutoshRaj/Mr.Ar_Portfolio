import React from 'react'
import './SkillesStyle.scss'
import htmlIcon from '../../Images/html.png'
import cssIcon from '../../Images/css.png'
import scssIcon from '../../Images/scss.png'
import bootstrapIcon from '../../Images/bootstarp.png'
import reactUIcon from '../../Images/React-icon.svg.png'
import photoshopIcon from '../../Images/photoshop.png'
import gitIcon from '../../Images/git.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Skilles = ()=>{
    return (
        <div>
          <div className="skillesBlock">
                <div className="skillesBox">
                <div className='skillheading'>
                                <h2>Skills</h2>
                        </div>
                       <div className='skillesCards'>
                                <div className='cardsList'>
                                <div className="cards box_1">
                                <img src={htmlIcon}/>
                            </div>
                            <div className="cards box_2">
                            <img src={cssIcon}/>
                            </div>
                            <div className="cards box_3">
                            <img src={scssIcon}/>
                            </div>
                            <div className="cards box_4">
                            <img src={bootstrapIcon}/>
                            </div>
                            <div className="cards box_4">
                            <img src={reactUIcon}/>
                            </div>
                            <div className="cards box_4">
                            <img src={photoshopIcon}/>
                            </div>
                            <div className="cards box_4">
                            <img src={gitIcon}/>
                            </div>
                                </div>
                            
                        </div> 
                        

                       
                </div>
          </div>
        </div>
      )
}; 
export default Skilles
