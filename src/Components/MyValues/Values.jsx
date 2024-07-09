import React, {useEffect} from 'react';
import './ValuesStyle.scss'


import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '../../About/About';
gsap.registerPlugin(ScrollTrigger);

const MyValue = () => {


const workedCompanies = [
    {
        id:1,
        companyName:"Horizone Solution",
        ad:20,
        year:18,
        lastyear:19,
    },
    {
        id:2,
        companyName:"Mechlin technologies Pvt Ltd.",
        ad:20,
        year:19,
        lastyear:20,
    },
 
    {
        id:4,
        companyName:"JAW Dropping marketing Pvt Ltd.",
        ad:20,
        year:20,
        lastyear:'20(Septempber)',
    },
    {
        id:5,
        companyName:"CS Soft Solution Pvt Ltd.",
        ad:20,
        year:20,
        lastyear:'(till working in this orgnazinaiton)',
    }, 
]
 
   
// useEffect(() => {
//     workExp(".blockExp", 20, "100%");
// }, []);

// const workExp = (trigger, startY, endY) => {
//     gsap.to(trigger, {
//         scrollTrigger: {
//             trigger: ".myWorkBlock",  // use the passed trigger
//             pin: true,
            
//             start: 'top top',
//             end: '100%',
//         }
//     });

//     gsap.fromTo(trigger, 
//         { y: startY }, 
//         { y: endY, duration: 1 }
//     );
// };

  return (
    <div>
        <div className='myWorkBlock'>
            <div className='heading'>
                    <h2>
                    Work
                    
                    <span>experience</span>
                    </h2>
            </div>
            <div className='totalExpBlock'>
            <div className="blockExp">
                    {workedCompanies.map((value, index) => (
                         <div className="companyName activeExp">
                         <div className="expInform">
                             <h4>{value.companyName}</h4>                                     
                             </div>
                             <div className="workedPrieod">
                                 <p>{value.ad}<span>{value.year}</span></p>
                                    to
                                 <p>{value.id!==5 ? value.ad:""}<span>{value.lastyear}</span></p>
                             </div>
                         </div> 
                    ))}
                                    
                                </div>    
            </div>

        </div>  


    </div>
  )
}

export default MyValue
