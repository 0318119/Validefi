/* eslint-disable array-callback-return */
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/cardslider.css'
import empiredex from '../images/empiredex.png'
// import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { numberWithCommas } from "./CoinsTable";
function Cardslider() {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();
  
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  
  const settings = {
    stagePadding: 0,
    margin: 0,
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 3,
          draggable: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: 1,
          adaptiveHeight: true,
          // centerMode: true,
          variableWidth: true,
          // autoplay: true,ta
          draggable: true,

        }
      },
  ]
  };
  return (
    <div className="containerr">
        <h3>Top Trading Currency</h3>
        <Slider {...settings}>
            {trending.map((coin) => {
              console.log(coin?.image);
                  return(
                    <div className='card_slider'>
                          <img src={coin?.image} alt={coin.name} />
                          <h3> {coin?.id} </h3>
                        <span> 
                          {coin?.symbol}
                        </span>
                      <div className='inline_div'>
                            <price>${numberWithCommas(coin?.current_price.toFixed(2))}</price>
                            <percantage>{coin?.price_change_percentage_24h?.toFixed(2)}%</percantage>
                      </div>
                  </div>
              )})}
        </Slider>
    </div>
  )
}

export default Cardslider