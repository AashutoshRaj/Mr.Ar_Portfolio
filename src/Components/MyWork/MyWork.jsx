import React, {useEffect} from 'react';
import './MyWorkStyle.scss'
import projectOne from '../../Images/muau.png'
import  projectTwo from '../../Images/garhammer.png'
import  projectThree from '../../Images/beautyroute.png'
import  projectfour from '../../Images/isoweb.png'
import  projectfive from '../../Images/elmag.png'
import  projectsix from '../../Images/worship.png'
import  projecjseven from '../../Images/chery.png'
import  projectEight from '../../Images/proLead.png'
import  projectNine from '../../Images/addlly.png'
import  projectTen from '../../Images/tcdam.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const MyWork = () => {
const projectList = [
    {
    id:1,
    projectName:"Muau",
    projectImage:projectOne,
    projectDescription:" ",
    linkSite:"https://muau.ch/",
}, 
{
    id:2,
    projectName:"Garhemmer",
    projectImage:projectTwo,
    projectDescription:"",
     linkSite:"https://www.garhammer.de/",
},
{
    id:3,
    projectName:"BeayteRoute",
    projectImage:projectThree,
    projectDescription:"",
     linkSite:"https://beautyroute.com/",
},
{
    id:4,
    projectName:"ISO HomeCare",
    projectImage:projectfour,
    projectDescription:"",
     linkSite:"https://www.isoteamhomecare.com/",
},
{
    id:5,
    projectName:"Elmage",
    subTitle:"Power of quality",
    projectImage:projectfive,
    projectDescription:"",
     linkSite:"https://elmag.at/de/",
},
{
    id:6,
    projectName:"Worshipserve",
    subTitle:"",
    projectImage:projectsix,
    projectDescription:"",
     linkSite:"https://www.worshipserve.com/",
},
{
    id:7,
    projectName:"Chefry",
    subTitle:"Power of quality",
    projectImage:projecjseven,
    projectDescription:"",
     linkSite:"https://www.chefry.io/",
},
{
    id:8,
    projectName:"proled",
    subTitle:"",
    projectImage:projectEight,
    projectDescription:"",
     linkSite:"https://proled.app/",
},
{
    id:9,
    projectName:"Addlly",
    subTitle:"I designd the Dashbord.It will be show after login.",
    projectImage:projectNine,
    projectDescription:"",
     linkSite:"https://addlly.ai/",
},
{
    id:10,
    projectName:"TCDAM",
    subTitle:"",
    projectImage:projectTen,
    projectDescription:"",
     linkSite:"http://tcdamreactqa.csdevhub.com/",
},

]

useEffect(()=>{
    const projectList = document.querySelectorAll('.projectList');
  
    const pinTrigger = ScrollTrigger.create({
      trigger: '.projectBlock',
      pin: true,
      start: '36% top',
      end: '+=200%',
    });
   
    const tl = gsap.timeline();
    tl.fromTo(projectList, {
        x: '40%',},
        {
            x:'-270%',
           
            scrollTrigger: {
                start: pinTrigger?.start,
                end: pinTrigger?.end,
                scrub: 6,
              },

        })       
    return () => {
        pinTrigger?.kill();
        tl.kill();
      };
})

  return (
    <div>
        <div className="projectBlock">
            <div className="headingPart">
                <h4>Work</h4>
                <h2>Projects</h2>
                <p>I have contributed in over 5+ projects Designing </p>
            </div>
            <div className="projectList">
           {    projectList.map((value)=>(
               <div className='listP'>
                    <p>Project{value.id}</p>
                    <div class="webLinks">
                            <a href="https://muau.ch/" target="_blank">
                                <img src={value.projectImage} alt=''/>
                            </a>
                            <div class="projectInfo">
                                            <a href={value.linkSite}>
                                               {value.projectName}
                                              <sub> {value.subTitle}</sub>
                                            </a>
                                            <p>{value.projectDescription}</p>
                                        </div>
                                        <a class="onHoverLink" href={value.linkSite} target="_blank">                                       
                                        </a>                              
                           
                        </div>
               </div>
           )) 
           }
            </div>
        </div>
    </div>
  )
}
export default MyWork
