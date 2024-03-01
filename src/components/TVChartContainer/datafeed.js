/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import * as Bitquery from './Bitquery';
import * as streaming from './streaming';
import historyProvider from './historyProvider';

// const lastBarsCache = new Map();
const configurationData = {
    supported_resolutions: ['1', '5', '15', '30', '60', '120', '1D', '1W', '1M']
};

export default {
    // This method is used by the Charting Library to get a configuration of your datafeed 
    // (e.g. supported resolutions, exchanges and so on)
    onReady: (callback) => {
        console.log('[onReady]: Method called!!');
        setTimeout(() => callback(configurationData));
    },
    // This method is used by the library to retrieve information about a specific symbol 
    // (exchange, price scale, full symbol etc.).
    resolveSymbol: async(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
        let baseQuery = await localStorage.getItem('@baseQuery');
        let qQuery = await localStorage.getItem('@qQuery');
        let network = await localStorage.getItem('@network');
        let exchange = await localStorage.getItem('@exchange');
        let baseSym = await localStorage.getItem('@baseSym');

        console.log('[resolveSymbol]: Method called!!');
        const response = await axios.post(
            Bitquery.endpoint, {
                query: Bitquery.GET_COIN_INFO(baseQuery, qQuery, network, exchange),
                variables: {
                    "tokenAddress": symbolName
                },
            }, {
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": "BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                }
            }
        );
        // const coin = response.data.data.ethereum.dexTrades[0].baseCurrency; 
        // console.log(response.data.data.ethereum.dexTrades[0].quotePrice); 
        console.log("===datafeed===",response.data.data.ethereum.dexTrades[0].baseCurrency);

        const coin = response.data.data.ethereum.dexTrades[0].baseCurrency;
        if (!coin) {
            onResolveErrorCallback();
        } else {
            const symbol = {
                    // name: symbolName,
                    ticker: symbolName,
                    name: `${coin.symbol}/${baseSym}`,
                    type: "crypto",
                    session: '24x7',
                    timezone: 'Etc/UTC',
                    exchange: `${exchange}`,
                    minmov: 1,
                    pricescale: 1000000000000,
                    has_intraday: true,
                    intraday_multipliers: ['1', '5', '15', '30', '60'],
                    supported_resolution: configurationData.supported_resolutions,
                    volume_precision: 1,
                    data_status: 'streaming',
                }
                //onSymbolResolvedCallback(symbol);
            onSymbolResolvedCallback(symbol)
        }
    },
    // This method is used by the charting library to get historical data for the symbol. 
    // getBars: async(symbolInfo, resolution, periodParams, onHistoryCallback) => {
    //     let baseQuery = await localStorage.getItem('@baseQuery');
    //     let qQuery = await localStorage.getItem('@qQuery');
    //     let network = await localStorage.getItem('@network');
    //     let exchange = await localStorage.getItem('@exchange');
    //     try {
            
    //         const response2 = await axios.post(Bitquery.endpoint, {
    //             query: Bitquery.GET_COIN_BARS(baseQuery, qQuery, network, exchange, resolution),
    //         }, {
    //             mode: 'cors',
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "X-API-KEY": "BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD",
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Access-Control-Allow-Credentials': true,
    //             }
    //         })

    //         const bars = response2.data.data.ethereum.dexTrades.map(el => ({
    //             time: new Date(el.timeInterval.minute).getTime(), // date string in api response
    //             low: el.low,
    //             high: el.high,
    //             open: Number(el.open),
    //             close: Number(el.close),
    //             volume: el.volume
    //         }))

    //         if (bars.length) {
    //             onHistoryCallback(bars, { noData: false });
    //         } else {
    //             onHistoryCallback(bars, { noData: true });
    //         }

    //     } catch (err) {
    //         console.log({ err })
    //     }
    // },
    // subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeID, onResetCacheNeededCallback) => {},
    // unsubscribeBars: (subscribeID) => {}
    getBars: function (
        symbolInfo,
        resolution,
        periodParams,
        onHistoryCallback,
        onErrorCallback
      ) {
        console.log("=====getBars running");
        let baseQuery =  localStorage.getItem('@baseQuery');
        let qQuery =  localStorage.getItem('@qQuery');
        let network =  localStorage.getItem('@network');
        let exchange =  localStorage.getItem('@exchange');

        let gg = {
            baseQuery : baseQuery,
            qQuery : qQuery,
            network : network,
            exchange : exchange
        }

        var split_symbol = symbolInfo.name.split(/[:/]/);
        // console.log('function args',arguments)
        // console.log(`Requesting bars between ${new Date(from * 1000).toISOString()} and ${new Date(to * 1000).toISOString()}`)
        historyProvider
          .getBars(symbolInfo, resolution, periodParams, gg)
          .then((bars) => {
            if (bars.length>=307) {
                onHistoryCallback(bars, { noData: false });
            } else if(bars.length && split_symbol[0] === 'VALID') {
                onHistoryCallback(bars, { noData: false });
            } else {
                console.log('datafeed bars: ', bars);
              onHistoryCallback(bars, { noData: true });
            }
          })
          .catch((err) => {
            console.log({ err });
            onErrorCallback(err);
          });
      },
      subscribeBars: (
        symbolInfo,
        resolution,
        onRealtimeCallback,
        subscribeUID,
        onResetCacheNeededCallback
      ) => {
        console.log("=====subscribeBars runnning");
        streaming.subscribeOnStream(
          symbolInfo,
          resolution,
          onRealtimeCallback,
          subscribeUID,
          onResetCacheNeededCallback
        );
      },
      unsubscribeBars: (subscriberUID) => {
        console.log("=====unsubscribeBars running");
  
        streaming.unsubscribeFromStream(subscriberUID);
      },
      calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
        //optional
        console.log("=====calculateHistoryDepth running");
        // while optional, this makes sure we request 24 hours of minute data at a time
        // CryptoCompare's minute data endpoint will throw an error if we request data beyond 7 days in the past, and return no data
        return resolution < 60
          ? { resolutionBack: "D", intervalBack: "1" }
          : undefined;
      },
      getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
        //optional
        console.log("=====getMarks running");
      },
      getTimeScaleMarks: (
        symbolInfo,
        startDate,
        endDate,
        onDataCallback,
        resolution
      ) => {
        //optional
        console.log("=====getTimeScaleMarks running");
      },
      getServerTime: (cb) => {
        console.log("=====getServerTime running");
      }
};