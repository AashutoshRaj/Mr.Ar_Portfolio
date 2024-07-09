"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutS = () => {
  useEffect(() => {
    const textWrappers = document.querySelectorAll('.dev');
  
    const pinTrigger = ScrollTrigger.create({
      trigger: '.textWords',
      pin: true,
      start: '-92% top',
      end: '+=200%',
    });
  
    const tl = gsap.timeline();
  
    tl.to(textWrappers, {
      x: '-98%',
      opacity: 0.3,
      scrollTrigger: {
        start: pinTrigger?.start,
        end: pinTrigger?.end,
        scrub: 6,
      },
    });
  
    const zoomText = document.querySelectorAll('.aboutMeInfo h2 span');
    const zoomTrigger = ScrollTrigger.create({
      trigger: '.aboutMeInfo',
      start: '10% top',
      end: '+=30%',
    });
    
    tl.fromTo(
      zoomText,
      {
        scale: 1,
        opacity: 1,
       

      }, 
      {
        scale: 8,
        opacity: 0,       
        scrollTrigger: {
          start: zoomTrigger?.start,
          end: zoomTrigger?.end,
          scrub: 1,
        },
      }
    );  
    return () => {
      pinTrigger?.kill();
      tl.kill();
    };
  }, []);


  

  return (
    <>
      <div className='aboutMeInfo bg-Black'>
        <h2 >
          FORGING MY UNIQUE <span>JOURNEY</span>
        </h2>
        <div className='textWords'>
          <div className='dev'>
              <p className='text-white'>I am a  <span>ui developer</span> with over 5 years of  experience in creating engaging and user-friendly web interfaces. My passion for web development refine my skills and stay updated with the latest industry trends, ensuring that I deliver high-quality, innovative, and responsive designs.</p>
            </div>          
        </div>
      </div>
    </>
  );
};

export default AboutS;
