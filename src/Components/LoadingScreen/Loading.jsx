import React, { useEffect } from 'react';
import './LoadingStyle.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Loading = () => {

useEffect(()=>{
    
    const loadingPre  = document.querySelectorAll('.one');
    const loadingPretwo  = document.querySelectorAll('.two');
    const loadingPrethree  = document.querySelectorAll('.three');
    const mainBox  = document.querySelectorAll('.linesLoder');
    let tl = gsap.timeline();

    tl.to(loadingPre,{x:'100%',delay:(1)})
   
   tl.to(loadingPretwo,{x:'100%',})
   tl.to(loadingPrethree,{x:'100%',})
   tl.to(mainBox,{x:'100%',delay:(2)})
   

})

  return (
    <>
    <div className="linesLoder">
        <div className='line one'></div>
        <div className='line two '></div>
        <div className='line three'></div>
    </div>
    </>
  )
}

export default Loading
