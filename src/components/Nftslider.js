import React, { Component } from "react";
import Slider from "react-slick";
import sliderone from '../images/nft_banners.jpg'
import  '../css/NftsSlider.css'

export default class Nftslider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>

          <div className="slider_banner">
            <div className="inner_slider">
             <img src={sliderone}/>
            </div>
          </div>

          <div className="slider_banner">
            <div className="inner_slider">
            <img src={sliderone}/>
            </div>
          </div>

          <div className="slider_banner">
            <div className="inner_slider">
            <img src={sliderone}/>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}
