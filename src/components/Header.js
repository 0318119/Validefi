import React from 'react'
import '../css/header.css'
import logo from '../images/logo.svg'
import side_logo from '../images/logoFtr.svg'
// import drop_img_one from '../images/bitcoin.png'
// import drop_img_two from '../images/ethereum.png'
// import drop_img_three from '../images/tether.png'
// import drop_img_four from '../images/binance-coin.png'
// import drop_img_five from '../images/tron.png'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
          <nav className='main_nav'>
              <div className='wrapper'>
                <div className="logo">
                    <a href=""><img src={logo} height='65'/></a>
                </div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />

                <ul className="nav-links">
                   <label htmlFor="close-btn" className="btn close-btn"><i className="fa fa-times"></i></label>
                   <a href=""><img src={side_logo} className="side_logo" /></a>
                   <li className='menu-links'><Link to='/'>Home</Link></li>
                    <li className='menu-links'>
                        <a href="" className="desktop-item">PLATFORMS<i className="fa fa-caret-down"></i></a>
                        <input type="checkbox" id="showDrop" />
                        <label for="showDrop" className="mobile-item">PLATFORMS<i className="fa fa-caret-down"></i></label>
                        <ul className="drop-menu">
                            <li><Link to="/SearchTokenData">VALIDEFI•DX</Link></li>
                            <li><Link to="/Validefinf">VALIDEFI•NF T-Link (Coming Soon)</Link></li>
                            <li><a href="https://validefi.global/psp/" target='_blank' >Validefi PSP</a></li>
                            <li><Link to="/Valideficoming">Validefi•Pro (Coming Soon)</Link></li>
                        </ul>
                    </li>
                    <li className='menu-links'><Link to="/About">About</Link></li>
                    <li className='menu-links'><Link to="/Faq">Faq</Link></li>
                    <li className='menu-links'><Link to="/Contact">Contact</Link></li>
                    {/* <li className='menu-links display_none'>
                        <a href="" className="desktop-item abbreviations_bit"><img src={drop_img_one} className='drop_img' /> BTC<i className="fa fa-caret-down"></i></a>
                        <ul className="drop-menu display_none">
                            <li><Link to="/"><img src={drop_img_two}/>ETH</Link></li>
                            <li><Link to="/"><img src={drop_img_three}/>USDT</Link></li>
                            <li><Link to="/"><img src={drop_img_four}/>BNB</Link></li>
                            <li><Link to="/"><img src={drop_img_five}/>TRON</Link></li>
                        </ul>
                    </li> */}
                    {/* <li className='menu-links login display_none'><Link to="/Login">SIGNIN</Link></li> */}
                    {/* <li className='menu-links login display_none sign_up'><Link to="/">SIGNUP</Link></li>   */}
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fa fa-bars"></i></label>
              </div>
          </nav>
        </>
    )
}

export default Header