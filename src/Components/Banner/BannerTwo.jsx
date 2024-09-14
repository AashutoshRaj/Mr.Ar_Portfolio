import React from 'react'
import selfImage from '../../Images/SelfImg6.png'
import './BannerStyle.scss';

const BannerTwo = ({name}) => { 

return (
    <> 
       <div className='heroContainer'>
            <div className='heroColumnLeftSide'>
                <h1>
                    <span className='splitName'>Aashutosh Raj</span>
                </h1>
                <div className='basedOn'>
                        <p>Based on Punjab, INDIA</p>
                </div>
            </div>
            <div className='heroColumnCenterSide'>
                   <div className='pictureArea'>
                      <img src={selfImage}/>
                    </div> 
            </div>
            <div className='heroColumnRightSide'>
                <h1>
                    <span className='splitName'>Front end Developer</span>
                </h1>
            </div>

       </div>
    </>
  )
}

export default BannerTwo
