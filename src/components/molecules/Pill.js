import React from "react";

import Blockies from "react-blockies";
import styled from "styled-components";

const Wrap = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #161616;
  padding: 0em 1.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 50px;
  border: 3px solid #e2761b;
  canvas {
    border: 2px solid #f8f8f6;
    padding: 0.25em;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const Pill = ({ address }) => {
  const formatAddress = (addr) => {
    return `${addr.substr(0, 6)}...${addr.substr(-4)}`;
  };

  return (
  
      <div className="connected_btn">          
                    <h1>Connected</h1>
                    <p>{address}</p>
                  </div>
   
  );
};

export default Pill;
