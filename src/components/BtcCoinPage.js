import React from 'react'
import '../css/CoinPages.css'
// import BTC_icon from '../images/btcpage.png'
import { BTCSingleCoin } from "../config/api";
// import { numberWithCommas } from "./CoinsTable";
import { CryptoState } from "../CryptoContext";
import axios from "axios";
import { useEffect, useState } from "react";
export default function BtcCoinPage({id}) {
  const [coins, setCoin] = useState();

  const { currency } = CryptoState();
  const fetchCoin = async () => {
    const { data } = await axios.get(BTCSingleCoin(id));

    setCoin(data);
  };
 

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
       <div className="own_flex_classes">
         <div className='img_left_side_box'>
           <img src={coins?.image.large} alt={coins?.name} height="200"/>
           <h3>
             <stronge className='stronge_head'> {coins?.name} <span className='border_span'></span></stronge>
             <span className='two'>BTC</span>
             <span className='three'>  $
             {
                coins?.market_data.current_price[currency.toLowerCase()]
              }
              {

                coins?.market_data?.ath_change_percentage?.usd}%
              
             </span>
           </h3>
         </div>
         <div className="market_cup">
           <h3>
             <span className="one">Market Cap</span>
             
             <span className="two margin-top-two"><span style={{color:"green"}}>$</span> { coins?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -8)} <span style={{color:"green"}}>B</span></span>
           </h3>
         </div>
         <div className="market_cup">
           <h3>
             <span className="one">Current Price</span>
             <span className="two"><span style={{color:"green"}}>$</span>  {
                coins?.market_data.current_price[currency.toLowerCase()]
              }</span>
             <button className="buy_now">Buy Now</button>
           </h3>
         </div>
       </div>
    </>
  )
}
