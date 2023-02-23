import React from 'react'
import FooterImg from "../../assets/footer-svg.svg"
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineSlack } from "react-icons/ai";


import "./footer.css"

function Footer() {
  return (
    <div className='Footer-section'>
      <footer>
        <div className="footer-container">
          <div className="footer-head">
            <h3>Building your UX skills has never been easier.</h3>
            <a className='footer-btn' href="#">Sign Up</a>
          </div>
          <div className="footer-content">
            <div className="footer-links">
              <img src={FooterImg} alt="" />
              <ul className='menu-item'>
                <li><a href="#">About Us</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Affilicate Program</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
              <ul className='social-icons'>
                <li><a href="#"></a><FiLinkedin className='icons-style' /></li>
                <li><a href="#"></a><FiInstagram className='icons-style'/></li>
                <li><a href="#"></a><ImFacebook className='icons-style'/></li>
                <li><a href="#"></a><FaTwitter className='icons-style'/></li>
                <li><a href="#"></a><AiOutlineSlack className='icons-style'/></li>
              </ul>
            </div>
            <div className="footer-links-block">
              <div className="footer-col-one">
                <h4>For Individuals</h4>
                <ul className='link-block'>
                  <li><a href="#">Learn UX Design</a></li>
                  <li><a href="#">UX Skills Assessments</a></li>
                  <li><a href="#">Professional UX Certifications</a></li>
                  <li><a href="#">Design Challenges</a></li>
                  <li><a href="#">Pro Membership</a></li>
                  <li><a href="#">UX Job Board</a></li>
                  <li><a href="#">Pricing</a></li>
                </ul>
              </div>

              <div className="footer-col-one">
                <h4>For Teams</h4>
                <ul className='link-block'>
                  <li><a href="#">Team Learning</a></li>
                  <li><a href="#">Screening Assessments</a></li>
                  <li><a href="#">Hire Designers</a></li>
                  <li><a href="#">Curated Recruitment</a></li>
                  <li><a href="#">Customer Stories</a></li>
                  <li><a href="#">Team Pricing</a></li>
                </ul>
              </div>

              <div className="footer-col-one">
                <h4>Resources</h4>
                <ul className='link-block'>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Guides</a></li>
                  <li><a href="#">Learner Stories</a></li>
                  <li><a href="#">Salary Explorer</a></li>
                  <li><a href="#">UX Design Glossary</a></li>
                </ul>
              </div>

              <div className="footer-col-one">
                <h4>Popular Courses</h4>
                <ul className='link-block'>
                  <li><a href="#">UX Design Foundations course</a></li>
                  <li><a href="#">UI Components I course</a></li>
                  <li><a href="#">Common Design Patterns course</a></li>
                  <li><a href="#">UX Research course</a></li>
                  <li><a href="#">UX Writing course</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </div>

              <div className="footer-col-one">
                <h4>Popular Assessments</h4>
                <ul className='link-block'>
                  <li><a href="#">Figma assessment</a></li>
                  <li><a href="#">Verified Designer assessment</a></li>
                  <li><a href="#">Accessibility assessment</a></li>
                  <li><a href="#">Interaction design assessment</a></li>
                  <li><a href="#">Research assessment</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </div>

              <div className="footer-col-one">
                <h4>Popular Challenges</h4>
                <ul className='link-block'>
                  <li><a href="#">Heuristic Analysis</a></li>
                  <li><a href="#">Wireframe</a></li>
                  <li><a href="#">Color palette</a></li>
                  <li><a href="#">Wireflow</a></li>
                  <li><a href="#">Interview Skills</a></li>
                  <li><a href="#">View All</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-end">
              <ul className='footer-end-links'>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
              </ul>
              <div className="copy-write">
              © 2023 Uxcel, Inc. All rights reserved.
              </div>
            </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer