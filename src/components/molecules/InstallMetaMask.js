import React from "react";
import Link from './Link'
import metaMask from './metamask.svg'
import Button from './Button'
const InstallMetaMask = () => {
  return (
    <Link href="https://metamask.io">
      <Button>
        <img src={metaMask} alt="MetaMask Logo" />
        <p>Install MetaMask</p>
      </Button>
    </Link>
  );
};

export default InstallMetaMask;