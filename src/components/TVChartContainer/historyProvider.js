/* eslint-disable import/no-anonymous-default-export */
import * as Bitquery from './Bitquery';
import axios from "axios";
import moment from 'moment';

const api_root = "https://min-api.cryptocompare.com";
const history = {};

export default {
  history: history,

  getBars: async function (symbolInfo, resolution, periodParams, gg) {
      console.log(periodParams);
    var split_symbol = symbolInfo.name.split(/[:/]/);
    const url =
      resolution === "D"
        ? "/data/histoday"
        : resolution >= 60
        ? "/data/histohour"
        : "/data/histominute";
    const qs = {
      e: split_symbol[0],
      fsym: split_symbol[1],
      tsym: split_symbol[2],
      toTs: periodParams.to ? periodParams.to : "",
      limit: 2000
      // aggregate: 1//resolution
    };
    // console.log({qs})

    let dateFrom = null;
    let dateTill = null;
    
    if (split_symbol[0] !== 'VALID') {
        dateFrom = moment(periodParams.from*1000).toISOString();
        dateTill = moment(periodParams.to*1000).toISOString();
    } 

    return await axios.post(Bitquery.endpoint, {
        query: Bitquery.GET_COIN_BARS(gg.baseQuery, gg.qQuery, gg.network, gg.exchange, resolution, dateFrom, dateTill),
        // variables: {
        //     "from": new Date("2021-06-20T07:23:21.000Z").toISOString(),
        //     "to": new Date("2021-06-23T15:23:21.000Z").toISOString(),
        //     "interval": Number(resolution),
        //     "tokenAddress": symbolInfo.ticker
        // },
        
    }, {
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        }
    }).then(res => {
        console.log(res.data.data);
        console.log(typeof res.data.data.ethereum.dexTrades);

        // if (res.status && res.status === "Error") {
        // console.log("CryptoCompare API error:", res.Message);
        // return [];
        // }
        if (res.data.data.ethereum.dexTrades && res.status<307) {
        // console.log(
        //   `Actually returned: ${new Date(
        //     data.TimeFrom * 1000
        //   ).toISOString()} - ${new Date(data.TimeTo * 1000).toISOString()}`
        // );
        var bars = res.data.data.ethereum.dexTrades.map((el) => {
            return {
                time: new Date(el.timeInterval.minute).getTime(), // date string in api response
                low: el.low,
                high: el.high,
                open: Number(el.open),
                close: Number(el.close),
                volume: el.volume,
            };
        });
        if (periodParams.firstDataRequest) {
            var lastBar = bars[bars.length - 1];
            history[symbolInfo.name] = { lastBar: lastBar };
        }
        return bars;
        } else {
        return [];
        }
    })

    // return await axios.get(`${api_root}${url}`,

    // //   url: `${api_root}${url}`,
    // //   qs
    // {params:qs}).then((data) => {
    //   console.log(data.data);
    //   if (data.Response && data.Response === "Error") {
    //     console.log("CryptoCompare API error:", data.Message);
    //     return [];
    //   }
    //   if (data.data.Data.length) {
    //     // console.log(
    //     //   `Actually returned: ${new Date(
    //     //     data.TimeFrom * 1000
    //     //   ).toISOString()} - ${new Date(data.TimeTo * 1000).toISOString()}`
    //     // );
    //     var bars = data.data.Data.map((el) => {
    //       return {
    //         time: el.time * 1000, //TradingView requires bar time in ms
    //         low: el.low,
    //         high: el.high,
    //         open: el.open,
    //         close: el.close,
    //         volume: el.volumefrom
    //       };
    //     });
    //     if (periodParams.firstDataRequest) {
    //       var lastBar = bars[bars.length - 1];
    //       history[symbolInfo.name] = { lastBar: lastBar };
    //     }
    //     return bars;
    //   } else {
    //     return [];
    //   }
    // });
  }
};
