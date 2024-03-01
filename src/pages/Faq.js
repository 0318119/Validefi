import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/faq.css";
import SearchOutlined from "@ant-design/icons";
import Tabs from "../components/Tabs";

const Faq = () => {
	return (
		<>
			<Header />
			<section className="banner-faq">
				<div className="container-fluid bannerfaq-clss">
					<div className="row faq-row">
						<div className="col-lg-12 text-banner">
							<h4 className="faq">FAQ</h4>
							<h1 className="faq-heading"> Have Any Question ?</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="banner-faq1">
				<div className="container-fluid ">
					<div className="row  search-row">
						<div className="col-lg-12  faq-search">
							<div className="form-group faq-input">
								<label className="" for="exampleInputName2"></label>
								<input
									required=""
									type="text"
									className="search"
									placeholder="Search Your Query"
								/>
								<i className="fa fa-search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							
						</div>
					</div>
				</div>
			</section>
            <div>
            <Tabs />
            </div>
          
			<Footer />
		</>
	);
};

export default Faq;
