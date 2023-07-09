import React from 'react'
import BannerImage from "../assets/Banner.png";

const Banner = () => {
  return (
    <div className='w-screen   flex justify-center my-11'>
        <div className='w-screen'>
        <img draggable={false} src={BannerImage} alt="Banner" className='w-screen'/>
        </div>
    </div>
  )
}

export default Banner