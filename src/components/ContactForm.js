import React from "react";
import "../css/contactForm.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const contactForm = () => {
	return (
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
					<div className="contact-sec">
                        <form className="contact-form-horizontal">
                            <span className="cont-heading">Contact Us</span>
							<div className="custom-flex">
                            <div className="form-group">
                                <label className="control-label" for="exampleInputName2"><i class="fa fa-solid fa-user mt-2"></i></label>
                                <input required="" type="text" className="form-control" id="exampleInputEmail1" placeholder='First Name' />
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="exampleInputName2"><i class="fa fa-solid fa-user mt-2"></i></label>
                                <input required="" type="text" className="form-control" placeholder='Last Name'></input>
                            </div>
							</div>
							<div className="custom-flex">
                            <div className="form-group">
                                <label className="control-label" for="exampleInputName2"><i className="fa fa-solid fa-envelope"></i></label>
                                <input required="" type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email'></input>
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="exampleInputName2"><i class="fa fa-solid fa-phone mt-2"></i></label>
                                <input required="" type="text" className="form-control" placeholder='Phone Number'></input>
                            </div>
							
							</div>
							<div className="msg_box">
								<textarea name="text" id="" placeholder="description" className="text-area-form"></textarea>
								<button className="btn-contact">Submit</button>
							</div>
                        </form>
                    </div>
					
				</div>
			</div>
		</section>
	);
};

export default contactForm;
