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
        scrub: 1,
        duration:1,
      },
    });
  
    const zoomText = document.querySelectorAll('.aboutMeInfo h2 span');
    const zoomTrigger = ScrollTrigger.create({
      trigger: '.aboutMeInfo',
      start: '10% top',
      end: '+=50%',
      // end: "+=" + (window.innerHeight * 10),
    });
    
    tl.fromTo(
      zoomText,
      {
        scale: 1,
        opacity: 1,
       fontStretch:"100%",

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
              {/* <p className='text-white'>I am a  <span>Front end developer</span> with over 5 years of  experience in creating engaging and user-friendly web interfaces. My passion for web development refine my skills and stay updated with the latest industry trends, ensuring that I deliver high-quality, innovative, and responsive designs.</p> */}
              <p className='text-white'>I am a  <span>Front end developer</span> with  1 year of  experience and 5 Years of experience as <span>Web designer</span> I created the engaging and user-friendly web interfaces. My passion for web development refine my skills and stay updated with the latest industry trends, ensuring that I deliver high-quality, innovative, and responsive designs.</p>
              {/* <p className='text-white'>Throughout my work history, 6 years have been accumulated. For 5 years, I have worked my profession as a <span>WEB DESIGNER</span>  For the last one year, I am working in a position of a <span>FRONT END DEVELPOER</span>. My passion for web development refine my skills and stay updated with the latest industry trends, ensuring that I deliver high-quality, innovative, and responsive designs.</p> */}
            </div>          
        </div>
      </div>
    </>
  );
};

export default AboutS;
