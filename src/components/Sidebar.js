import React from 'react'
import '../css/sidebar.css'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import logo from '../images/logoFtr.svg'
import head_img from '../images/head_img.png'
import add_one from '../images/side_banner2.png'
import platform from '../images/3859776.png'

function Sidebar() {
  return (
      <>
        <nav className='side_menu'>
            <div className="wrapper">
              <input type="radio" name="slider" id="menu-btn" />
              <input type="radio" name="slider" id="close-btn" />
              <ul className="side-links">
                <Link to='/'><img src={logo} className="side_img_logo" /></Link>
                <Link to='/'><img src={head_img} className="side_img" /></Link>
                <li className='li_hover active'><i class="fa fa-tachometer side_icons"></i><Link to='/'>Home</Link></li>
                <li className='li_hover'><i class="fa fa-line-chart side_icons"></i><a href="#">Charts</a></li>

                <li>
                  <input type="checkbox" id="firstDrop" />
                  <label for="firstDrop" className="side_mobile-items">
                    <i class="fa fa-database side_icons"></i>
                      <a> Exchanges<i className="fa fa-caret-down drop_arrow"></i></a>
                  </label>
                  <ul className="drop_menu_one">
                    <li><a href="https://www.binance.com/en" target="_blank">Binance</a></li>
                    <li><a href="https://uniswap.org/" target="_blank">Uniswap</a></li>
                    <li><a href="https://pancakeswap.finance/" target="_blank">PancakeSwap</a></li>
                    <li><a href="https://www.coinbase.com/" target="_blank">Coinbase</a></li>
                    <li><a href="https://app.1inch.io/#/1/swap/ETH/DAI" target="_blank">1inch</a></li>
                    <li><a href="https://kyber.network/" target="_blank">Kyber</a></li>
                    <li><a href="https://dydx.exchange/" target="_blank">dYdX</a></li>
                    <li><a href="https://www.0x.org/" target="_blank">0x</a></li>
                    <li><a href="https://idex.io/" target="_blank">IDEX</a></li>
                    <li><a href="https://app.balancer.fi/#/" target="_blank">Balancer</a></li>
                    <li><a href="https://dappradar.com/ethereum/exchanges/dex-ag" target="_blank">DEX.ag</a></li>
                  </ul>
                </li>

                {/* <li className='li_hover'><i class="fa fa-globe side_icons"></i><Link to='/WhaleTrade'>Whale Trade</Link></li> */}
                {/*<li className='li_hover'><i class="fa fa-globe side_icons"></i><Link to='/Live_Pairs'>New Live Pairs</Link></li>*/}
                <li>
                  <input type="checkbox" id="scdDrop" />
                  <label for="scdDrop" className="side_mobile-items">
                    <i class="fa fa-globe side_icons"></i>
                    <a>Platforms <i className="fa fa-caret-down drop_arrow"></i></a> 
                  </label>
                
                  <ul className="drop_menu_two">
                    <li><a>Charting system</a></li>
                    <li><a>Portfolio Tracker</a></li>
                    <li><a>NFT Platform</a></li>
                    {/* <li><a>Whale Trade</a></li> */}
                  </ul>
                </li>

                <div className='Add_banner'>
                    <img src={add_one}/>
                    <img src={add_one}/>
                    <img src={add_one}/>
                </div>
              </ul>

              <label for="menu-btn" className="btn menu-btn"><i className="fa fa-bars"></i></label>
              <label for="close-btn" className="btn close-btn"><i className="fa fa-times"></i></label>
            </div>
        </nav>
      </>
  )
}

export default Sidebar