import React, { useState, useEffect } from "react";
import PriceTickers from "../components/PriceTickers";
import Header from "../components/Header";
import DashFooter from "../components/DashFooter";
import { TVChartContainer } from "../components/TVChartContainer";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import Pill from '../components/molecules/Pill'
import BullSayss from '../components/BullSays'
import Trendinghrr from '../components/Trending24hr'
import BTCSwaps from '../components/BTCSwap'
// import { color } from "@mui/system";
import 'font-awesome/css/font-awesome.min.css'
import Dashheader from '../components/Dashheader'
import "../css/WhaleTrades.css";
import "../css/trades.css";
import "../css/SearchBar.css";
// import bitcoin_icon from "../images/bitcoin.png";
import LiveChart from "../components/LiveChart";
import Ethcoin_icon from "../images/eth.svg";
import bnbicon from "../images/bsc.png";
import avaicon from "../images/avalanche.png";
import polygon from "../images/polygon.svg";
import okc from "../images/okc.svg";
import fantom from "../images/fantom.png";
import arbitrum from "../images/arbitrum.png";
import metis from "../images/metis.png";
import heco from "../images/heco.svg";
import velas from "../images/velas.svg";
import aurora from "../images/aurora.svg";
import harmony from "../images/harmony.png";
import sushiswap from '../images/sushiswap.png'
import uniswap from '../images/uniswap.png'
import pancakeswap from '../images/pancakeswap.png'
import Apeswap from '../images/apeswap.svg'
import shibaswap from '../images/shibaswap.png'
import kyberswap from '../images/kyberswap.png'
import minty from '../images/minty.svg'
import cryptodefi from '../images/cryptodefi.png'
import justmoney from '../images/justmoney.svg'
import safemoon from '../images/safemoon.svg'
import swapr from '../images/swapr.png'
import empiredex from '../images/empiredex.png'
import degen from '../images/degen.svg'
import dojo from '../images/dojo.svg'
import concave from '../images/concave.svg'
import mdex from '../images/mdex.png'
import wault from '../images/wault.png'
import sheepdex from '../images/sheepdex.png'
import bakery from '../images/bakery.svg'
import coinone from '../images/coinone.png'
import jetswap from '../images/jetswap.png'
import babyswap from '../images/babyswap.png'
import biswap from '../images/biswap.png'
import padswap from '../images/padswap.png'
import mochiswap from '../images/mochiswap.png'
import firebird from '../images/firebird.svg'
import justliquidity from '../images/justliquidity.png'
import shibanova from '../images/shibanova.png'
import acyfinance from '../images/acyfinance.svg'
import fsts from '../images/fst.png'
import niob from '../images/niob.svg'
import mars from '../images/mars.png'
import elkfinance from '../images/elkfinance.svg'
import hyperjump from '../images/hyperjump.png'
import knight from '../images/knight.svg'
import swapx from '../images/swapx.svg'
import traderjoe from '../images/traderjoe.png'
import lydiafinance from '../images/lydiafinance.png'
import pangolin from '../images/pangolin.png'
import hurricaneswap from '../images/hurricaneswap.png'
import yetiswap from '../images/yetiswap.png'
import partyswap from '../images/partyswap.png'
import stormswap from '../images/stormswap.png'
import baguette from '../images/baguette.png'
import olivecash from '../images/olivecash.png'
import dctdao from '../images/dctdao.png'
import canaryexchange from '../images/canaryexchange.svg'
import complus from '../images/complus.png'
import quickswap from '../images/quickswap.png'
import dfyn from '../images/dfyn.png'
import polycat from '../images/polycat.png'
import gravityfinance from '../images/gravityfinance.png'
import cometh from '../images/cometh.png'
import pippi from '../images/pippi.svg'
import jamon from '../images/jamon.png'
import nacho from '../images/nacho.png'
import famoso from '../images/famoso.svg'
import cherry from '../images/cherry.svg'
import island from '../images/island.svg'
import jswap from '../images/jswap.svg'
import kswap from '../images/kswap.svg'
import myswap from '../images/myswap.svg'
import spookyswap from '../images/spookyswap.png'
import paintswap from '../images/paintswap.png'
import spiritswap from '../images/spiritswap.png'
import fbomb from '../images/fbomb.svg'
import soulswap from '../images/soulswap.png'
import morpheusswap from '../images/morpheusswap.png'
import wingswap from '../images/wingswap.svg'
import fantomlive from '../images/fantomlive.png'
import wigo from '../images/wigo.png'
import protofi from '../images/protofi.svg'
import zoo from '../images/zoo.svg'
import darkknight from '../images/darkknight.svg'
import degenhaus from '../images/degenhaus.png'
import tomb from '../images/tomb.svg'
import excalibur from '../images/excalibur.svg'
import redemption from '../images/redemption.svg'
import netswap from '../images/netswap.svg'
import standard from '../images/standard.png'
import tethys from '../images/tethys.png'
import maki from '../images/maki.svg'
import butter from '../images/butter.svg'
import wagyuswap from '../images/wagyuswap.png'
import astro from '../images/astro.svg'
import wanna from '../images/wanna.png'
import trisolaris from '../images/trisolaris.svg'
import nearpad from '../images/nearpad.png'
import auroraicon from '../images/aurora.png'
import amaterasu from '../images/amaterasu.svg'
import wallet_icon from '../images/wallet-solid.svg'
import BullSays from "../components/BullSays";
import Sidebar from "../components/Sidebar";

function SearchTokenData() {
  var [account, setAccount] = useState("");
  const [resd, setResd] = useState([]);
  const [search, setSearch] = useState();
  const [exchange, setExchange] = useState();
  const [baseSym, setBaseSym] = useState();
  const [qoute, setQoute] = useState();
  const [network, setNetwork] = useState();
  const [showResults, setShowResults] = useState()
  const [NexBoxResults, setNexBoxResults] = useState()
  const [BorderRadius, setBorderRadius] = useState()
  const [BorderRadiusBtn, setBorderRadiusBtn] = useState()
  const [CroxIconBtn, setCroxIconBtn] = useState()


  const [switchClassOne, setswitchClassOneToogled] = useState(false);
  const [switchClassTwo, setswitchClassTwoToogled] = useState(false);
  const [switchClassThree, setswitchClassThreeToogled] = useState(false);
  const [switchClassFour, setswitchClassFourToogled] = useState(false);
  const [switchClassFive, setswitchClassFiveToogled] = useState(false);
  const [switchClassSix, setswitchClassSixToogled] = useState(false);
  const [switchClassSeven, setswitchClassSevenToogled] = useState(false);
  const [switchClassEight, setswitchClassEightToogled] = useState(false);
  const [switchClassNine, setswitchClassNineToogled] = useState(false);
  const [switchClassTen, setswitchClassTenToogled] = useState(false);
  const [switchClassEleven, setswitchClassElevenToogled] = useState(false);


  const { ethereum } = window;
  useEffect(() => {
    (async () => {
      try {
        const connectedAccount = (
          await ethereum.request({ method: "eth_accounts" })
        )[0];
        setAccount(connectedAccount);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [ethereum]);

  const providerOptions = {
    /* See Provider Options Section */
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: "4013365e8f774d45a4d9e84d6f5e2940" // required
      }
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "My Awesome App", // Required
        infuraId: "4013365e8f774d45a4d9e84d6f5e2940", // Required
        rpc: "", // Optional if `infuraId` is provided; otherwise it's required
        chainId: 1, // Optional. It defaults to 1 if not provided
        darkMode: true // Optional. Use dark theme, defaults to false
      }
    },
      binancechainwallet: {
        package: true
      },
  
  };
 
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });
  async function connectwallet() { 
	  var provider = await web3Modal.connect();
      var web3 = new Web3(provider); 
      await window.ethereum.send('eth_requestAccounts'); 
      var accounts = await web3.eth.getAccounts(); 
      account = accounts[0]; 
      document.getElementById('wallet-address').textContent = account; 
      // contract = new web3.eth.Contract(ABI, ADDRESS);
    }





let btnIds = ["top_box_active","top_box_not_active"];
  const [switchBox, setswitchBox] = useState(false);

  useEffect(() => {
    callApi();
  }, [search]);

  const callApi = () => {
    if (search || exchange || network || qoute) {
      fetch(
        `https://validefi.global:8080/exchange?bcurrency=${search}&network=${network}&qcurrency=${qoute}`
      ).then((resd) =>
        resd.json().then((re) => {
          setResd(re);
        })
      );
      switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
      // NexBoxResults ? setNexBoxResults(false) : setNexBoxResults(true);
      switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
      switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
      switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
      switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
      switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
      switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
      switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
      switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
      switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
      switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
    } else if (search === "") {
      console.log("no Search");
    }
  };
  
  let ShowBOx = showResults ?  "search_active" : "search_not_active"
  const handleClick = () => {
    CroxIconBtn ?  setCroxIconBtn (true) : setCroxIconBtn (true)
  }
  const handleClickSvg = () => {
    CroxIconBtn ?  setCroxIconBtn (true) : setCroxIconBtn (true)
  }

  const Ethcoin = () => {
    setBaseSym("ETH");
    setExchange("Uniswap");
    setNetwork("ethereum");
    setQoute("0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2");
    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(true);
    // NexBoxResults ? setNexBoxResults(false) : setNexBoxResults(true);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const BNBcoin = () => {
    setBaseSym("BNB");
    setExchange("Pancake v2");
    setNetwork("bsc");
    setQoute("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c");


    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(true);
    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);

  };
  const AVAcoin = () => {
    setBaseSym("AVAX");
    setExchange("Partyswap");
    setNetwork("avalanche");
    setQoute("0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7");
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const polygoncoin = () => {
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const okccoin = () => {
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const fantomcoin = () => {
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const arbitrumcoin = () => {
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const metiscoin = () => {
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const hecocoin = () => {
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const velascoin = () => {
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(false);
  };
  const auroracoin = () => {
    switchClassEleven ? setswitchClassElevenToogled(false) : setswitchClassElevenToogled(true);

    switchClassOne ? setswitchClassOneToogled(false) : setswitchClassOneToogled(false);
    switchClassTwo ? setswitchClassTwoToogled(false) : setswitchClassTwoToogled(false);
    switchClassThree ? setswitchClassThreeToogled(false) : setswitchClassThreeToogled(false);
    switchClassFour ? setswitchClassFourToogled(false) : setswitchClassFourToogled(false);
    switchClassFive ? setswitchClassFiveToogled(false) : setswitchClassFiveToogled(false);
    switchClassSix ? setswitchClassSixToogled(false) : setswitchClassSixToogled(false);
    switchClassSeven ? setswitchClassSevenToogled(false) : setswitchClassSevenToogled(false);
    switchClassEight ? setswitchClassEightToogled(false) : setswitchClassEightToogled(false);
    switchClassNine ? setswitchClassNineToogled(false) : setswitchClassNineToogled(false);
    switchClassTen ? setswitchClassTenToogled(false) : setswitchClassTenToogled(false);
  };

  function thisToFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
  }


  const Results = () => (
    <div className="search-results">
        <div className="scroll_box">
            <li
              className="top_box"
              onClick={Ethcoin}
              id={switchClassOne ? "top_box_active" : "top_box_not_active"}
            >
              <img src={Ethcoin_icon} />
              <span>ETHEREUM</span>
            </li>
            {console.log(exchange)}
            <li
              className="top_box"
              onClick={BNBcoin}
              id={switchClassTwo ? "top_box_active" : "top_box_not_active"}
            >
              <img src={bnbicon} />
              <span>BNB</span>
            </li>
            <li
              className="top_box"
              onClick={AVAcoin}
              id={switchClassThree ? "top_box_active" : "top_box_not_active"}
            >
              <img src={avaicon} />
              <span>AVALANCE</span>
            </li>
            <li
              className="top_box"
              onClick={polygoncoin}
              id={switchClassFour ? "top_box_active" : "top_box_not_active"}
            >
              <img src={polygon} />
              <span>POLYGON</span>
            </li>
            <li
              className="top_box"
              onClick={okccoin}
              id={switchClassFive ? "top_box_active" : "top_box_not_active"}
            >
              <img src={okc} />
              <span>OKC</span>
            </li>
            <li
              className="top_box"
              onClick={fantomcoin}
              id={switchClassSix ? "top_box_active" : "top_box_not_active"}
            >
              <img src={fantom} />
              <span>FANTOM</span>
            </li>
            <li
              className="top_box"
              onClick={arbitrumcoin}
              id={switchClassSeven ? "top_box_active" : "top_box_not_active"}
            >
              <img src={arbitrum} />
              <span>ARBITRUM</span>
            </li>
            <li
              className="top_box"
              onClick={metiscoin}
              id={switchClassEight ? "top_box_active" : "top_box_not_active"}
            >
              <img src={metis} />
              <span>METIS</span>
            </li>
            <li
              className="top_box"
              onClick={hecocoin}
              id={switchClassNine ? "top_box_active" : "top_box_not_active"}
            >
              <img src={heco} />
              <span>HECO</span>
            </li>
            <li
              className="top_box"
              onClick={velascoin}
              id={switchClassTen ? "top_box_active" : "top_box_not_active"}
            >
              <img src={velas} />
              <span>VELAS</span>
            </li>
            <li
              className="top_box"
              onClick={auroracoin}
              id={switchClassEleven ? "top_box_active" : "top_box_not_active"}
            >
              <img src={aurora} />
              <span>AURORA</span>
            </li>
        </div>
    </div>
  );

  const EthSwap = () => (
    <div className="check_box_parent">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                <input type="radio" name="radio"  />
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                 <input type="radio" name="radio"  />
                <img src={sushiswap} />
                Sushiswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
            <input type="radio" name="radio"  />
            <img src={uniswap} />
            Uniswap
            <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
            <input type="radio" name="radio"  />
              <img src={shibaswap} />
              Shibaswap
              <span class="checkmark"></span>
           </label>

           <label class="container-radio">
           <input type="radio" name="radio"  />
             <img src={kyberswap} />
             kyberswap
             <span class="checkmark"></span>
          </label>


                <label class="container-radio">
                <input type="radio" name="radio"  />
                  <img src={minty} />
                  Minty
                  <span class="checkmark"></span>
              </label>

              <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={cryptodefi} />
                Cryptodefiswap
                <span class="checkmark"></span>
              </label>


              <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={justmoney} />
                justmoney
                <span class="checkmark"></span>
            </label>


            <label class="container-radio">
              <input type="radio" name="radio"  />
                <img src={safemoon} />
                safemoonswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
              <input type="radio" name="radio"  />
                <img src={swapr} />
                Swapr
                <span class="checkmark"></span>
            </label>


            <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={empiredex} />
              Empiredex
              <span class="checkmark"></span>
            </label>

          <label class="container-radio">
          <input type="radio" name="radio"  />
            <img src={degen} />
            Degen
            <span class="checkmark"></span>
        </label>


        <label class="container-radio">
          <input type="radio" name="radio"  />
            <img src={dojo} />
            Dojoswap
            <span class="checkmark"></span>
        </label>

        <label class="container-radio">
          <input type="radio" name="radio"  />
            <img src={concave} />
            Concaveswap
            <span class="checkmark"></span>
        </label>

         </div>
       </div>
    </div>
  );
  
  const BNBSwap = () => (
    <div className="check_box_parent">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                <input type="radio" name="radio" />
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
               <input type="radio" name="radio" />
                <img src={Apeswap} />
                Apeswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={pancakeswap} />
                Pancakeswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={mdex} />
                MDEX
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={empiredex} />
                Empiredex
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={wault} />
                Wault
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={sheepdex} />
                Sheepdex
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={bakery} />
                Bakery
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={sushiswap} />
                Sushiswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={coinone} />
                Coinone
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={jetswap} />
                Jetswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={babyswap} />
                Babyswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={kyberswap} />
                kyberswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={biswap} />
                Biswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={padswap} />
                Padswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={mochiswap} />
                Mochiswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={firebird} />
                Firebird
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={justliquidity} />
                JustLiquidity
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={shibanova} />
                Shibanova
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={acyfinance} />
                ACYfinance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={fsts} />
                Fsts
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
              <input type="radio" name="radio" />
              <img src={niob} />
              Niob
              <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={mars} />
                Mars
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={safemoon} />
                Safemoonswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={elkfinance} />
                Elkfinance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={hyperjump} />
                Hyperjump
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={knight} />
                knight
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio" />
                <img src={swapx} />
                Swapx
                <span class="checkmark"></span>
            </label>

         </div>
       </div>
    </div>
  );

  const AVASwap = () => (
    <div className="check_box_parent">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                <input type="radio" name="radio"  />
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                 <input type="radio" name="radio"  />
                <img src={traderjoe} />
                Trader Joe
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={pangolin} />
                Pangolin
                <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={lydiafinance} />
                Lydia Finance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={hurricaneswap} />
                Hurricane Swap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={elkfinance} />
                 Elk Finance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={sushiswap} />
                Sushiswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={yetiswap} />
                Yeti Swap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={partyswap} />
                Partyswap
                <span class="checkmark"></span>
           </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={stormswap} />
                StormSwap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={empiredex} />
                EmpireDex
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={baguette} />
                Baguette
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={olivecash} />
                Olive Cash
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={dctdao} />
                DCT DAO
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={canaryexchange} />
                Canary Exchange
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={complus} />
              Complus
              <span class="checkmark"></span>
          </label>

         </div>
       </div>
    </div>
  );

  const PolygonSwap = () => (
    <div className="check_box_parent">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                <input type="radio" name="radio"  />
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                 <input type="radio" name="radio"  />
                <img src={quickswap} />
                QuickSwap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={sushiswap} />
                SushiSwap
                <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={dfyn} />
                DFYN
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={Apeswap} />
                Apeswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={wault} />
                Wault
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={jetswap} />
                 Jetswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={kyberswap} />
                kyberswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={empiredex} />
                EmpireDex
                <span class="checkmark"></span>
           </label>

            <label class="container-radio">
              <input type="radio" name="radio"  />
                <img src={uniswap} />
                Uniswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
              <input type="radio" name="radio"  />
                <img src={polycat} />
                Polycat
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={gravityfinance} />
                Gravity Finance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                 <img src={firebird} />
                 Firebird
                 <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={acyfinance} />
                  Acy Finance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={elkfinance} />
                  EIk Finance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={cometh} />
                Cometh Swap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={pippi} />
                Pippi.Finance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={jamon} />
                Jamon Swap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={nacho} />
                Nacho Finance
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={justmoney} />
                Just Money
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={famoso} />
                Famoso
                <span class="checkmark"></span>
            </label>

         </div>
       </div>
    </div>
  );

  const OKCSwap = () => (
    <div className="check_box_parent">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                <input type="radio" name="radio"  />
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                 <input type="radio" name="radio"  />
                <img src={cherry} />
                Cherryswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={island} />
                Islandswap
                <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={jswap} />
                Jswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={kswap} />
                Kswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={sushiswap} />
              Sushiswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={myswap} />
              Myswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={pippi} />
              Pippi.Finance
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={elkfinance} />
             EIk Finance
              <span class="checkmark"></span>
          </label>

         </div>
       </div>
    </div>
  );

  const FantomSwap = () => (
    <div className="check_box_parent">
       <div className="check_box_width">
         <div className="check_box_scroll_box">
            <label class="container-radio">
                <input type="radio" name="radio"  />
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                 <input type="radio" name="radio"  />
                 <img src={spookyswap} />
                  Spookyswap
                 <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={paintswap} />
                Paintswap
                <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={empiredex} />
                EmpireDex
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={spiritswap} />
                Spiritswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={fbomb} />
               FBOMB
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={sushiswap} />
               Sushiswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={shibaswap} />
              Shibaswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={kyberswap} />
               Kyberswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={soulswap} />
              Soulswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={jetswap} />
              Jetswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={morpheusswap} />
              MorpheusSwap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={wingswap} />
              WingSwap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={elkfinance} />
              Elk Finance
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={firebird} />
              Firebird
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={fantomlive} />
              Fantom Live
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={wigo} />
              Wigoswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={protofi} />
              ProtoFi
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={hyperjump} />
              Hyperjump
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={zoo} />
              ZooDex
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={darkknight} />
              DarkKnight
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={degenhaus} />
              Degen Haus
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={tomb} />
              Tomb Finance
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={excalibur} />
              Excalibur
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={redemption} />
              Redemption
              <span class="checkmark"></span>
          </label>

         </div>
       </div>
    </div>
  );

  const ArbitrumSwap = () => (
      <div className="check_box_parent">
        <div className="check_box_width">
          <div className="check_box_scroll_box">
            <label class="container-radio">
                <input type="radio" name="radio"  />
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                  <input type="radio" name="radio"  />
                  <img src={sushiswap} />
                  Sushiswap
                  <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={swapr} />
                Swapr
                <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={uniswap} />
                Uniswap
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={dfyn} />
                DFYIN
                <span class="checkmark"></span>
            </label>

          </div>
        </div>
    </div>
  );

  const METIsSwap = () => (
      <div className="check_box_parent">
        <div className="check_box_width">
          <div className="check_box_scroll_box">
            <label class="container-radio">
                <input type="radio" name="radio"  />
                All Exchanges
                <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                  <input type="radio" name="radio"  />
                  <img src={netswap} />
                  Netswap
                  <span class="checkmark"></span>
            </label>

            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={standard} />
                Standard
                <span class="checkmark"></span>
            </label>
            
            <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={tethys} />
                Tethys Finance
                <span class="checkmark"></span>
            </label>

          </div>
        </div>
      </div>
  );

  const HecoSwap = () => (
    <div className="check_box_parent">
      <div className="check_box_width">
        <div className="check_box_scroll_box">
          <label class="container-radio">
              <input type="radio" name="radio"  />
              All Exchanges
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={mdex} />
                 MDEX
                <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={pippi} />
              Pippi.Finance
              <span class="checkmark"></span>
          </label>
          
          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={maki} />
              Makiswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={butter} />
              Butterswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={elkfinance} />
              Elk Finance
              <span class="checkmark"></span>
          </label>

        </div>
      </div>
    </div>
  );

  const VELASSwap = () => (
    <div className="check_box_parent">
      <div className="check_box_width">
        <div className="check_box_scroll_box">
          <label class="container-radio">
              <input type="radio" name="radio"  />
              All Exchanges
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={wagyuswap} />
                Wagyuswap
                <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={astro} />
              Astroswap
              <span class="checkmark"></span>
          </label>

        </div>
      </div>
    </div>
  );

  const AURORASwap = () => (
    <div className="check_box_parent">
      <div className="check_box_width">
        <div className="check_box_scroll_box">
          <label class="container-radio">
              <input type="radio" name="radio"  />
              All Exchanges
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
                <input type="radio" name="radio"  />
                <img src={wanna} />
                Wannaswap
                <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={trisolaris} />
              Trisolaris
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={nearpad} />
              Nearpad
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={auroraicon} />
              Auroraswap
              <span class="checkmark"></span>
          </label>

          <label class="container-radio">
              <input type="radio" name="radio"  />
              <img src={amaterasu} />
              Amaterasu
              <span class="checkmark"></span>
          </label>

        </div>
      </div>
    </div>
  );

  return (
    <>
<Sidebar/>
<Dashheader/>
      <section className="bannerAdds_whale_trade"></section>
      <div className="container-fluid custom_container">
        <div className="row">
      
          <div className="col-12 mt-3">
            <PriceTickers />
          </div>
        </div>
        <div className="col-12">
          <div className="table_trades">

            <div className="Trades_search">

                  <div className="search_max">
                    <div>
                          <input type="text" onClick={handleClick} value={search}  autoComplete="off"
                          onChange={(e) => {
                            setSearch(e.target.value);
                            localStorage.setItem("@baseQuery", e.target.value);
                            localStorage.setItem("@qQuery", qoute);
                            localStorage.setItem("@network", network);
                            localStorage.setItem("@exchange", exchange);
                            localStorage.setItem("@baseSym", baseSym);
                          }}
                          placeholder="Search Token Address"
                          id={BorderRadius ?  "input_active" : null}
                        />
                        <svg id={CroxIconBtn ?  "svg_active" : "svg_not_active"} onClick={() => setSearch(() => "")}
                            role="img" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z">
                            </path>
                        </svg>
                    </div>
                {/* <button
                    type="submit"
                    onClick={() => {
                      callApi();
                    }}
                    id={BorderRadiusBtn ?  "btn_active" : "btn_not_active"}
                  >
                  Search
                  </button>*/}
                  </div>

                  <div class="next_search">
                      <Results />
                  </div>
                  <div className="" id={switchClassOne ?  "search_active" : "search_not_active"}>
                    <EthSwap />
                  </div>
                  <div className="" id={switchClassTwo ?  "search_active" : "search_not_active"}>
                    <BNBSwap />
                  </div>
                  <div className="" id={switchClassThree ?  "search_active" : "search_not_active"}>
                        <AVASwap />
                  </div>
                  <div className="" id={switchClassFour ?  "search_active" : "search_not_active"}>
                        <PolygonSwap />
                  </div>
                  <div className="" id={switchClassFive ?  "search_active" : "search_not_active"}>
                        <OKCSwap />
                  </div>
                  <div className="" id={switchClassSix ?  "search_active" : "search_not_active"}>
                        <FantomSwap />
                  </div>
                  <div className="" id={switchClassSeven ?  "search_active" : "search_not_active"}>
                        <ArbitrumSwap />
                  </div>
                  <div className="" id={switchClassEight ?  "search_active" : "search_not_active"}>
                        <METIsSwap />
                  </div>
                  <div className="" id={switchClassNine ?  "search_active" : "search_not_active"}>
                        <HecoSwap />
                  </div>
                  <div className="" id={switchClassTen ?  "search_active" : "search_not_active"}>
                        <VELASSwap />
                  </div>
                  <div className="" id={switchClassEleven ?  "search_active" : "search_not_active"}>
                        <AURORASwap />
                  </div>


                  <div className="Btn_wallet">
                      {account ? (
                        <Pill address={account} />
                      ) : ethereum ? (
                        <div className='wallet_msg'>
                        <button onClick={()=>connectwallet('injected')}>  <img src={wallet_icon} alt="d"/>Connect Wallet</button>
                          <p> Wallet is not Connected</p>
                        </div>
                      ) : (
                        <div className='wallet_msg'>
                            <button onClick={()=>connectwallet('injected')}>  <img src={wallet_icon} alt="d"/>Connect Wallet</button>
                            <p> Wallet is not Connected</p>
                        </div>
                      )}
                </div>
              
            </div> 

            {/* <Searchbar  data={SearchData}/> */}
            <div className="icons_info">
              {resd.slice(0, 1).map((post, key) => {
                if(network==='bsc'){
                return (
                  <div className="img_box">
                    <img src={bnbicon} />
                    <li className="wrapper_name">
                      {post.quoteCurrency.symbol} / {post.baseCurrency.symbol}{" "}
                    </li>
                  </div>
                )
                }else if(network==='ethereum'){
                  return(
                  <div className="img_box">
                    <img src={Ethcoin_icon} />
                    <li className="wrapper_name">
                      {post.quoteCurrency.symbol} / {post.baseCurrency.symbol}{" "}
                    </li>
                  </div>
                  )} else{
                    return(
                      <div className="img_box">
                      <img src={avaicon} />
                      <li className="wrapper_name">
                        {post.quoteCurrency.symbol} / {post.baseCurrency.symbol}{" "}
                      </li>
                    </div>
                    )
                  }
              })}
              {resd.slice(0, 1).map((post, key) => {
                if(network==='bsc'){
                return (
                  <div className="coin_names">
                  <li className="value_names">
                    <li>${((post?.quotePrice)*408.16)}</li>
                  </li>

                  <span>BNB {(thisToFixed(post.quotePrice))}</span>


                </div>
                )
                }else if(network==='ethereum'){
                  return(
                    <div className="coin_names">
                    <li className="value_names">
                      <li>${((post?.quotePrice)*2937.69).toPrecision(5)}</li>
                    </li>

                    <span>ETH {(thisToFixed(post.quotePrice))}</span>


                  </div>
                  )} else{
                    return(
                      <div className="coin_names">
                      <li className="value_names">
                        <li>${((post?.quotePrice)*73.05).toPrecision(5)}</li>
                      </li>

                      <span>AVAX {(thisToFixed(post.quotePrice))}</span>


                    </div>
                    )
                  }
              })}
            </div>
            {resd.slice(0, 1).map((post, key) => {
              return (
                <div className="li_pairs">
                  <li className="li_div">
                    {post.baseCurrency.name}
                    <li className="inner_li">
                      Token:{post.baseCurrency.address}
                    </li>
                    <li className="inner_li">
                      Pair: {post.quoteCurrency.address}
                    </li>
                  </li>
                </div>
              );
            })}
            {console.log("post", resd)}

            <div className="ChartContainer">
              <TVChartContainer
                baseQuery={search}
                network={network}
                qQuery={qoute}
                exchange={exchange}
                
              />
                 {/* <LiveChart
                baseQuery={search}
                network={network}
                qQuery={qoute}
                exchange={exchange}
              /> */}
              <div className="SwapsContainer">
                <BTCSwaps />
              </div>    
            </div>
            {/* <div className="SwapsContainer1">
                <BTCSwaps />
              </div>  */}
              <div className="flex_box_table">
                <h3>Trades</h3>
                {/* <div className='btns_lengends'>
                      <button className='buy'>Buy</button>
                      <button className='sell'>Sale</button>
                </div> */}
              </div>

              {/* ++-++  TRADES TABLE DATA  ++-++ */}

              <table>
              {resd.slice(0, 1).map((post, key) => {
                    if (network === 'bsc') {
                      return (
                        <thead>  
                        <th>Date</th>
                        <th>Type</th>
                        <th>PRICE USDT</th>
                        <th className="transform">Amount WBNB</th>
                        <th className="transform">Price BNB</th>
                        <th className="transform">TOTAL {thisToFixed(post.baseCurrency.symbol)}</th>
                        <th>Maker</th>
                      </thead>
                );
              } else if(network==='ethereum') {  
                return(      
                <thead>  
                <th>Date</th>
                <th>Type</th>
                <th>PRICE USDT</th>
                <th className="transform">Amount WETH</th>
                <th className="transform">Price ETH</th>
                <th className="transform">TOTAL {thisToFixed(post.baseCurrency.symbol)}</th>
                <th>Maker</th>
              </thead>
              
              )} else {
                return(
                <thead>  
                <th>Date</th>
                <th>Type</th>
                <th>PRICE USDT</th>
                <th className="transform">Amount AVAX</th>
                <th className="transform">Price AVAX</th>
                <th className="transform">TOTAL {thisToFixed(post.baseCurrency.symbol)}</th>
                <th>Maker</th>
              </thead>
                )
              }
            
            })}
                <tbody>
                  {resd.slice(0, 100).map((post, key) => {
                    if (post.side == "BUY") {
                      return (
                        <tr key={key}>
                          <td className="date_table">
                          {post.block.timestamp.time}
                          </td>
                          <td className="red">SELL</td>
                          <td className="">{(thisToFixed(post.quotePrice))*408.16}</td>
                          <td className="truncate">{thisToFixed(post.quoteAmount)}</td>
                          <td className="truncate">{thisToFixed(post.quotePrice)}</td>
                          <td className="truncate">{thisToFixed(post.baseAmount)}</td>
                          <td className="truncate maker_table">
                            {post.transaction.txFrom.address.slice(0, -2)}
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr key={key}>
                          <td className="date_table">
                            {post.block.timestamp.time}
                          </td>
                          <td className="green">BUY</td>
                          <td className="">{(thisToFixed(post.quotePrice))*408.16}</td>
                          <td className="truncate">{thisToFixed(post.quoteAmount)}</td>
                          <td className="truncate">{thisToFixed(post.quotePrice)}</td>
                          <td className="truncate">{thisToFixed(post.baseAmount)}</td>
                          <td className="truncate maker_table">
                            {post.transaction.txFrom.address.slice(0, -2)}
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
              <div className="SwapsContainer1">
                <BTCSwaps />
              </div> 

            <div className='wig_width mt-2'>
              <BullSayss />
            </div>

            <div className='wig_width mt-2'>
              <Trendinghrr/>
            </div>

          </div>
        </div>
      </div>
      <DashFooter />
    </>
  );
}
export default SearchTokenData;