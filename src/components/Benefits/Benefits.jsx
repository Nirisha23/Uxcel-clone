import React from 'react'
import BenefitImg from "../../assets/benefits.svg"
import SliderImg from "../../assets/image 169.png"
import "./benefits.css"

function Benefits() {
  return (
    <div className="Benefits">
      <div className="benefits-one">
      <div className="benefits-container">
        <div className="benefits-image">
            <img src={BenefitImg} alt="" />
        </div>

        <div className="benefits-contant">
        <div className='contant-header'>
          LEARN UX DESIGN
        </div>
        <div className="contant-body">
          <h2>Learn and improve your design skills faster</h2>
          <p>Our interactive, bite-sized courses and lessons help you improve your UX skills in just 5 minutes per day.</p>
          <div className="benefits-btn">
          <a href="#">Learn More</a>
          </div>
        </div>
        </div>
      </div>
      </div>

      
      <div className="benefits-one">
      <div className="benefits-container">
        <div className="benefits-contant">
        <div className='contant-header'>
        UX SKILLS ASSESSMENTS
        </div>
        <div className="contant-body">
          <h2>Test & measure your design knowledge</h2>
          <p>Measure your design knowledge and get insights on how to improve your skills.</p>
          <div className="benefits-btn">
          <a href="#">Learn More</a>
          </div>
        </div>
        </div>
        <div className="benefits-image">
            <img src={SliderImg} alt="" />
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Benefits