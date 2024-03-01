import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import'../css/form.css' 
import 'font-awesome/css/font-awesome.min.css'
// import { color } from '@mui/system';


export default function Login() {
  return (
    <>     
      <Header />
      <section className="contactForm">
            <div className="container">
                <div className="row contact-row">
                    <div class="col-md-12">
                        <span class="a-one animate"></span>
                        <span class="a-two animate"></span>
                        <span class="a-three animate"></span>
                        <span class="a-four animate"></span>
                        <span class="a-five animate"></span>
                        <span class="a-six animate"></span>
                        <span class="a-seven animate"></span>
                        <span class="a-eight animate"></span>
                        <span class="a-nine animate"></span>
                        <span class="a-ten animate"></span>
                    </div>
                    <div className="Login-sec">
                        <form className="Login-form-horizontal">
                            <span className="Login-heading">Login Your Account</span>
                            <div className="custom-flex-Login d-block">
                            <div className="Login-form">
                                <label className="Login-label" for="exampleInputName2"><i class="fa fa-thin fa-envelope fa-2x mt-2"></i></label>
                                <input required="" type="text" className="Login-control" id="exampleInputEmail1" placeholder='First Name' />
                            </div>
                            <div className="Login-form">
                                <label className="Login-label" for="exampleInputName2"><i class="fa fa-solid fa-lock fa-2x mt-2"></i></label>
                                <input required="" type="password" className="Login-control" placeholder='Last Name'></input>     
                            </div>
                            <input type="checkbox" id="topping" name="topping" className='checkbox'/>
                            <label className='Remember'>Remember me</label>
                            <label className='forgot'>Forgot Password</label>
                        </div>
                        <div className="Loginbtn">
                                <button type="submit" className="form_btn">Login</button>
                            </div>
                            <div className="Login-para">
                                <span>Or Login with</span>
                            </div> 
                            <div className='formIcon'>
                                <div className="">
                                    <i class="fa fa-brands fa-facebook fa-2x" ></i>
                                    <i class="fa fa-brands fa-twitter fa-2x"></i>
                                    <i class="fa fa-brands fa-instagram fa-2x" ></i>
                                </div>
                            </div>
                            <h3 className='alert_msg'>Don't have an account Sign Up</h3>
                      
                        
                            
                 </form>
                        
                        
                    </div>
                </div>
            </div>
        </section>
      <Footer/>

         
</>

  )
}