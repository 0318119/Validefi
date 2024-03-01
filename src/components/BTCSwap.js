import React from 'react'
import '../css/CoinPages.css'
import '../css/SwapTabs.css'
import BitCoin from './BitCoin'
import Exchange_b from '../images/exchange_binance.png'
import Exchange_uni from '../images/exchange-uniswap.jpg'
import Exchange_pan from '../images/pancakeswap.jpg'
import Exchange_coinBase from '../images/exchange-coinbase.jpg'
import Exchnage_1inch from '../images/exchange-1inch.jpg'
import Exchnage_kyber from '../images/exchange-kyber.jpg'
import Exchnage_dydx from '../images/exchange-dydx.jpg'
import Exchnage_0x from '../images/exchange-0x.jpg'
import Exchnage_idex from '../images/exchange-idex.jpg'
import Exchnage_bln from '../images/exchange-bln.jpg'
import Exchnage_dapprader from '../images/exchange-dapprader.jpg'

export default function BTCSwap() {
  return (
    <>
       <div className=''>
            {/* col-lg-3 display_one */}
            <div className="swap_box">
            <h4 className='left-right-head'>Swap</h4>
              <div class="swaps" role="tabpanel">
                  <ul class="swap-tabs" role="tablist">
                      <li role="presentation"><a href="#btcSwap" aria-controls="home" role="tab" data-toggle="tab">Swap</a></li>
                      <li role="presentation" class="active"><a href="#btcBuy" aria-controls="profile" role="tab" data-toggle="tab">Buy Crypto</a></li>
                  </ul>
                  <div class="tab-content tabs">
                      <div role="tabpanel" class="tab-pane fade" id="btcSwap">
                         <div className='exchange_links'>
                           <a href='https://www.binance.com/en' target="_blank" ><img src={Exchange_b}/></a>
                           <a href='https://uniswap.org/' target="_blank"><img src={Exchange_uni}/></a>
                           <a href='https://pancakeswap.finance/' target="_blank"><img src={Exchange_pan}/></a>
                           <a href='https://www.coinbase.com/' target="_blank"><img src={Exchange_coinBase}/></a>
                           <a href='https://app.1inch.io/#/1/swap/ETH/DAI' target="_blank"><img src={Exchnage_1inch}/></a>
                           <a href='https://kyber.network/' target="_blank"><img src={Exchnage_kyber}/></a>
                           <a href='https://dydx.exchange/I' target="_blank"><img src={Exchnage_dydx}/></a>
                           <a href='https://www.0x.org/' target="_blank"><img src={Exchnage_0x}/></a>
                           <a href='https://idex.io/' target="_blank"><img src={Exchnage_idex}/></a>
                           <a href='https://app.balancer.fi/#/' target="_blank"><img src={Exchnage_bln}/></a>
                           <a href='https://dappradar.com/ethereum/exchanges/dex-ag' target="_blank"><img src={Exchnage_dapprader}/></a>
                         </div>
                      </div>
                      <div role="tabpanel" class="tab-pane fade in active" id="btcBuy">
                        <BitCoin/>
                      </div>
                  </div>
              </div>
            </div>
       </div>
    </>
  )
}