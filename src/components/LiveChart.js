import { useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";
import * as Bitquery from "./TVChartContainer/Bitquery";
import Datafeed from "./TVChartContainer/datafeed";
import axios from "axios";

console.log(Datafeed);

const jsFunc = async () => {
  const chartProperties = {
    width: 1000,
    height: 600,
    timeScale: {
      timeVisible: true,
      secondsVisible: false,
    },
    layout: {
      background: {
        color: '#000000'
      },
      textColor: '#ffffff'
    }
  };

  const domElement = document.getElementById("live_chart");
  const chart = createChart(domElement, chartProperties);
  const candleSeries = chart.addCandlestickSeries();
  
  let baseQuery = localStorage.getItem("@baseQuery");
  let qQuery = localStorage.getItem("@qQuery");
  let network = localStorage.getItem("@network");
  let exchange = localStorage.getItem("@exchange");
  let resolution = 5;
  
  try {
    if (baseQuery.length) 
    { 
      const result = await axios.post(
        Bitquery.endpoint,
        {
          query: Bitquery.GET_COIN_BARS(
            baseQuery,
            qQuery,
            network,
            exchange,
            resolution
          ),
        },
        {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
          },
        }
      )
      const fdata = result.data.data.ethereum.dexTrades;
  
      const cdata = [];
      fdata.map((item) =>
        cdata.push({
          time: new Date(`${item.timeInterval.minute}`).getTime(),
          open: parseFloat(item.open*Math.pow(10,12) ),
          high: parseFloat(item.highMath.pow(10,12) ),
          low: parseFloat(item.low*Math.pow(10,12) ),
          close: parseFloat(item.closeMath.pow(10,12) ),
        })
      );
      
      candleSeries.setData(cdata);
        
    }else{
      <h1>No Data</h1>
    }
  
  } catch (error) {
    console.log("error", error.response.data);
  }

  // candleSeries.setData(cdata);
  //   .then((res) => res.json())
  //   .then((data) => {
  //     const fdata = data.ethereum.dexTrades;
  //     console.log("helllo", data);
  //     const cdata = fdata.map((item) => {
  //       return {
  //         time: new Date(`${item.time.timeInterval}`).getTime(),
  //         open: parseFloat(item.open),
  //         high: parseFloat(item.high),
  //         low: parseFloat(item.low),
  //         close: parseFloat(item.close),
  //       };
  //     });
  //   candleSeries.setData(cdata);
  // })
  // .catch((err) => console.log("my error", err));

  //Dynamic Chart
  // const socket = io.connect('http://127.0.0.1:4000/');

  // socket.on('KLINE',(pl)=>{
  //   //log(pl);
  //   candleSeries.update(pl);
  // });
};

function LiveChart({ baseQuery, qQuery, network, exchange }) {
  const chartRef = useRef();

  useEffect(() => {
    jsFunc(baseQuery, qQuery, network, exchange);
  }, []);

  return (
    <>
      <div ref={chartRef} id="live_chart"></div>
    </>
  );
}

export default LiveChart;
