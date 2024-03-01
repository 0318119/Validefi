
// import Header from "./components/Header";
import  {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard'
import Login from "./pages/Login";
// import ETH from "./pages/ETH";
import Signup from "./pages/Signup";
// import BNB from "./pages/BNB";
// import USDT from "./pages/USDT";
// import Tron from "./pages/Tron";
import About from './pages/About';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Validefidx from './pages/Validefidx';
import Valideficoming from './pages/Valideficoming';
import Validefipsp from './pages/Validefipsp';
import Validefinf from './pages/Validefinf';
import Psp from './pages/Psp';
import Validtoken from './pages/Validtoken';
import Whitepaper from './pages/Whitepaper'
import Validdx  from './pages/Validdx'
import PortfolioTracker from './pages/PortfolioTracker'
import VALIDEFINTTLink from './pages/VALIDEFINTTLink'  
import TitanWallet from './pages/TitanWallet'
import Team  from './pages/Team'
import InvestorRelations from './pages/InvestorRelations'
import Institutional from './pages/Institutional'
import Careers from './pages/Careers'
import NFTPlatform from './pages/NFTPlatform'
import Termofuse from './pages/Termofuse'
import CustomerAgreement from './pages/CustomerAgreement'
import Licenses from './pages/Licenses'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Promotions from './pages/Promotions'
import CoinPage from "./pages/CoinPage";
import WhaleTrade from "./pages/WhaleTrade";
import TextPdf from "./pages/TextPdf";



function App() {
  return (
    
    <Routes>
       <Route path='/' element={<Home />} />
       <Route path='Dashboard' element={ <Dashboard />}/>
       <Route path='Login' element={<Login />} />
       <Route path="Signup" element={<Signup />} />
       <Route path="Cry" element={<Signup />} />
       {/* <Route path="ETH" element={<ETH />} />
       <Route path="BNB" element={<BNB />} />
       <Route path="USDT" element={<USDT />} /> */}
       {/* <Route path="Tron" element={<Tron />} /> */}
       <Route path="WhaleTrade" element={<WhaleTrade />} />
       <Route path="TextPdf" element={<TextPdf />} />
       <Route path="About" element={<About />} />
       <Route path="Faq" element={<Faq />} />
       <Route path="Contact" element={<Contact />} />
       <Route path="Validefidx" element={<Validefidx />} />
       <Route path="Validefinf" element={<Validefinf />} />
       <Route path="Validefipsp" element={<Validefipsp />} />
         <Route path="Valideficoming" element={<Valideficoming />} />
         <Route path="Psp" element={<Psp />} />
         <Route path="coins/:id" element={<CoinPage/>}  />
         <Route path="Validtoken" element={<Validtoken />} />
         <Route path="Whitepaper" element={<Whitepaper />} />
         <Route path="Validdx" element={<Validdx />} />
         <Route path="PortfolioTracker " element={<PortfolioTracker  />} />
         <Route path="VALIDEFINTTLink " element={<VALIDEFINTTLink />} />
          <Route path="TitanWallet " element={<TitanWallet />} />
          <Route path="Team" element={<Team />} />
          <Route path="InvestorRelations" element={<InvestorRelations />} />
          <Route path="Institutional" element={<Institutional />} />
          <Route path="Careers" element={<Careers />} />
          <Route path="NFTPlatform" element={<NFTPlatform />} />
          <Route path="Termofuse" element={<Termofuse />} />
          <Route path="CustomerAgreement" element={<CustomerAgreement />} />
          <Route path=" Licenses" element={< Licenses />} />
          <Route path=" PrivacyPolicy" element={< PrivacyPolicy />} />
          <Route path=" Promotions" element={< Promotions />} />

       
    </Routes>
  );
}

export default App;
