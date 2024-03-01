import React from 'react'
import '../css/About.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import left_img from '../images/about_bg.png'

const Aboutcontent = () => {
  return (
    <section className='bg_about'>
      <div className="container about_container">
        <div className="row about-row side">
          <div className="col-lg-6 own_col">
            <h1 className='about_heading mt-5'>ENHANCE YOUR TRADING EXPERIENCE THRU VALID DEFI</h1>
            <p className='about_para'>
              VALIDEFI An All-in-One crypto platform backed by the valid token, that was made to blur the lines between traditional finance and true financial freedom thru it's multi use case platforms.
            </p>
          </div>
          <div className="col-lg-6 right-side own_col">
            <img src={left_img} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutcontent