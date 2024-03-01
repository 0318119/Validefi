import React from 'react'
import'../css/Teaminfo.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Valliam_img from '../images/valliam.jpg'
import Kristiana_img from '../images/KRISTIANA.jpg'
import Steve_img from '../images/STEVE.jpg'


export default function Teaminfo() {
  return (
     <>
    <div className="container mb-5">
        <div className='row' >
           <h3 className='Team-heading'>
                <span className='border_head left'></span>
                    validefi Team
                <span className='border_head  right'></span>
            </h3>
            {/* <p className='team-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p> */}
        </div>
            <div className="row our-team-row justify-content-center">

                <div className="col-lg-5 text_res">
                    <div className="our-team">
                        <div className="pic">   
                            <div> 
                                <img src={Valliam_img} />
                            </div>
                                <h3 className="title mt-4">DJ Manoloff</h3>
                                <span className="post">Co-Founder</span>
                                {/* <ul className="social">
                                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                                </ul> */}
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 text_res">
                    <div className="our-team">
                        <div className="pic">   
                            <div> 
                                <img src={Steve_img} />
                            </div>
                                <h3 className="title mt-4">Shawn Ott</h3>
                                <span className="post">Co-Founder</span>
                                {/* <ul className="social">
                                    <li><a href="#" className="fa fab fa-facebook"></a></li>
                                    <li><a href="#" className="fa fab fa-twitter"></a></li>
                                    <li><a href="#" className="fa fab fa-google-plus"></a></li>
                                    <li><a href="#" className="fa fab fa-linkedin"></a></li>
                                </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


   </>
  )
}
