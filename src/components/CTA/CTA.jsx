import React from 'react'
import { useState } from 'react'
import "./cta.css"

let hookcount = 0;
let hookcountNo = 0;

function CTA() {
  let [hookcount, setNewcount] = useState(0);
  function yesCount(){
    setNewcount(hookcount +1)
  }

  let [hookcountNo, setNewnoCount] = useState(0);
  function noCount(){
    setNewnoCount(hookcountNo +1)
  }

  return (
    <div className='hook'>
      <div className="hook-container">
        <h1>{hookcount} Times Attened</h1>
        <h1>{hookcountNo} Times Missed</h1>
        <p>Have you attend the class today</p>
        <div className="hook-btn">
          <button onClick={yesCount}>Yes</button>
          <button onClick={noCount} className='secondary'>No</button>
        </div>
      </div>
      <div className="card-container">
      <div className="card">
                <img src="https://source.unsplash.com/1600x800/?pizza" />
                <h4>Spicy Cheesy Pizza</h4>
                <p>Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some .</p>
                <button className='btn'>Order Now</button>
            </div>
            </div>
    </div>
  )
}

export default CTA