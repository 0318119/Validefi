import React from 'react'
import'../css/coming.css'
import coming_img from '../images/Coming.png'

export default function Coming() {
  return (
    <>
    <section className='bg_comming_soon'>
        <div className='container'>
            <div className='row own_row'>
                <div className='col-lg-6'>
                    <div className='soon_text'>
                        <h3><span>Coming</span> <br/> Soon</h3>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img src={coming_img} className="come"/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
