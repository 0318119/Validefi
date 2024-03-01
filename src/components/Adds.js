import React from 'react'
import avalanche from '../images/avalanche_2_gif.gif'
import PancakeSwap from '../images/PancakeSwap_gif.gif'
import staking from '../images/staking.gif'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/CoinPages.css'

function Adds() {
  return (
    <div className="col-lg-2">
      <div className='Adds_div'>
      <img src={avalanche}/>
      <img src={PancakeSwap} />
      <img src={staking} />
      </div>
    </div>
  )
}

export default Adds