import React from 'react'
import './Hero.css'
import profile_img from '../../assets/my-profile-pic.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <div className="user-profile">
          <img src={profile_img} alt="" />
        </div>
        <div className="user-profile-details">
          <h2>NeXaCephas</h2>
          <p>Full Stack Web Developer</p>
          </div>
      </div>
    </div>
  )
}

export default Hero


