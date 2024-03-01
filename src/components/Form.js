import React from 'react'
import'../css/form.css' 
import 'font-awesome/css/font-awesome.min.css'



export default function Form() {
  return (
      <>
      <div className="form-bg">
            <div classNameName="container-fluid">
                <div classNameName="row form-row">
                    <div className="col-md-6">
                        <form className="form-horizontal">
                            <span className="heading">Login Your Account</span>
                            <div className="form-group">
                                <label className="control-label" for="exampleInputName2"><i className="fa fa-solid fa-envelope fa-2x"></i></label>
                                <input required="" type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email'></input>
                            </div>
            
                            <div className="form-group">
                                <label className="control-label" for="exampleInputName2"><i class="fa fa-thin fa-lock fa-3x"></i></label>
                                <input required="" type="password" className="form-control" placeholder='Enter Your Password'></input>
                            </div>
                            <div className='Rememberedcheckbox'>
                            <input type="checkbox" id="topping" name="topping" className='checkbox'/>
                            <label  className='Remembered'>Remembered</label>
                            <label  className='Forgotpassword'>Forgot password</label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form_btn">login</button>
                            </div>
                            <div className="form-group">
                                <span>Or Login with</span>
                            </div> 
                            <div className='formIcon'>
                                <div className="form-group">
                                    <i class="fa fa-brands fa-facebook fa-2x"></i>
                                    <i class="fa fa-brands fa-twitter fa-2x"></i>
                                    <i class="fa fa-brands fa-instagram fa-2x" ></i>
                                </div>
                            </div>
                            <h3 className='alert_msg'>Don't have an account Sign Up</h3>
                        </form>
                    </div>
                </div>
            </div>
      </div>
      </>
  )
}
