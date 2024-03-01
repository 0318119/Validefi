import React from "react";

import metaMask from "./metamask.svg";
import Button from "./Button";
import '../../css/tab_content.css'
import wallet_icon from '../../images/wallet-solid.svg'
const ConnectButton = ({ connect }) => {
  return (
    // <Button handleClick={connect}>
    //   <img src={metaMask} alt="MetaMask Logo" />
    //   <p>Connect Wallet</p>
    // </Button>
      <div className='vollet_msg'>
      <button onClick={connect}>  <img src={wallet_icon} alt="d"/>Connect Wallet</button>
      <p> Wallet is not Connected</p>
   
    </div>
  );
};

export default ConnectButton;
