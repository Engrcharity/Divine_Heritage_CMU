import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services-container">
        <h1>What we Offer</h1>
  <div className="service-card slide-in-1">
    <div className="service-icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
    <h3>Financial Support</h3>
    <p>We provide loans, grants, and financial solutions to help our members grow and thrive.</p>
  </div>

  <div className="service-card slide-in-2">
    <div className="service-icon"><i class="fa-solid fa-chart-line"></i></div>
    <h3>Business Growth</h3>
    <p>We support entrepreneurship and small businesses through training, mentorship, and investment opportunities.</p>
  </div>

  <div className="service-card slide-in-3">
    <div className="service-icon"><i class="fa-solid fa-users"></i></div>
    <h3>Community Development</h3>
    <p>We initiate and fund projects that improve the welfare and quality of life of our member communities.</p>
  </div>
</div>

  )
}

export default Services