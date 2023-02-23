import React from 'react'
import Heroimg from "../../assets/hero-img.png"
import Apple from "../../assets/apple.svg"
import Amazon from "../../assets/amazon.svg"
import Microsoft from "../../assets/microsoft.svg"
import Tiktok from "../../assets/tiktok.svg"
import Stars from "../../assets/star-yellow.svg"
import HalfStars from "../../assets/half-star.svg"
import trustpoilt from "../../assets/company last.svg"
import "./hero.css"

function Hero() {
  return (
    <div className='heroBody'>
      <div className="hero-content">
        <div className="hero-left">
        <h1>Build UX design skills <span className='yellowLine'>online</span></h1>
        <p>Learn and improve your design skills with interactive UX courses and skill tests built specifically for professional designers.</p>
        <div className="hero-btn">
        <button className='hero-primary'>Get started for free</button>
        <button className='hero-secondary'>Uxcel for Teams</button>
        </div>
        <div className="credit-card">
          <p> No credit card required</p>
        </div>
        </div>
        <div className="hero-right">
        <img src={Heroimg} alt="" />
        </div>
      </div>

      {/* Companies */}

    <div className="sponsers">
      <div className="companies">
        <img src={Apple} alt="Apple" />
        <img src={Amazon} alt="Amazon" />
        <img src={Microsoft} alt="Microsoft" />
        <img src={Tiktok} alt="Tiktok" />
      </div>
      <div className="rating">
        <div className="starts">
          <img src={Stars} alt="Stars" />
          <img src={Stars} alt="Stars" />
          <img src={Stars} alt="Stars" />
          <img src={Stars} alt="Stars" />
          <img src={HalfStars} alt="Stars" />
        </div>
        <p>Top reviews from our community of over 160,000+ designers</p>
      </div>
      <div className="trustpilot">
        <img src={trustpoilt} alt="" />
      </div>
    </div>

    </div>
  )
}

export default Hero