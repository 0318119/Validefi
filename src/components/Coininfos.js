
import BtcCoinPage from './BtcCoinPage';
// import { CryptoState } from "../CryptoContext";


const CoinInfos = ({ id }) => {
// const [historicData, setHistoricData] = useState();
// const [days] = useState(1);
// const { currency } = CryptoState();
// const [flag,setflag] = useState(false);
    // const fetchHistoricData = async () => {
    //   const { data } = await axios.get(HistoChart(id,days));
    // //   setflag(true);
    //   setHistoricData(data);
    // };
    
    // useEffect(() => {
    //   fetchHistoricData();
    // });

    
    // const marketdata =()=>{
    //   let data = [["day", "a", "b","c","d"]]
    //   historicData.map(coin=>{
              
    //     let date=new Date(coin[0]);
    //     let time =
    //     date.getHours() > 12
    //       ? `${date.getHours() - 12}:${date.getMinutes()} PM`
    //       : `${date.getHours()}:${date.getMinutes()} AM`;
    //       data.push([days === 1 ? time : date.toLocaleDateString(),coin[2],coin[1],coin[4],coin[3]])
          
    // }
    //   )
    //   return data
    // }
      
    return (
        <>
     
            <BtcCoinPage id={id}/> 
        </>
          );
        };

export default CoinInfos;