/* eslint-disable import/no-anonymous-default-export */

import * as Bitquery from './Bitquery';

const lastBarsCache = new Map();
const configurationData = {
    supported_resolutions: ['1', '5', '15', '30', '60', '1D', '1W', '1M'],
};

export default {
    // This method is used by the Charting Library to get a configuration of your datafeed
    // (e.g. supported resolutions, exchanges and so on)
    onReady: (callback) => {
        console.log('[onReady]: Method called!!');
        setTimeout(() => callback(configurationData));
    },
    resolveSymbol: async(
        symbolName,
        onSymbolResolvedCallback,
        onResolveErrorCallback
    ) => {
        console.log('[resolveSymbol]: Method called!!');

        let baseQuery = await localStorage.getItem('@baseQuery');
        let qQuery = await localStorage.getItem('@qQuery');
        let network = await localStorage.getItem('@network');
        let exchange = await localStorage.getItem('@exchange');
        console.log('BaseQuery', baseQuery);
        console.log('qQuery', qQuery);
        console.log('network', network);
        console.log('exchange', exchange);

        const bitquery1 = await fetch(Bitquery.endpoint, {
            method: 'POST',
            variables: {
                tokenAddress: symbolName,
            },
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': `BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            //body: JSON.stringify({ query: Bitquery.GET_COIN_INFO2(baseQuery) }) // ({ QUERY })
            body: JSON.stringify({
                query: Bitquery.GET_COIN_INFO(baseQuery, qQuery, network, exchange),
            }), // ({ QUERY })
        });
        const response = await bitquery1.json();

        const coin = response.data.ethereum.dexTrades[0].baseCurrency;
        if (!coin) {
            onResolveErrorCallback();
        } else {
            const symbol = {
                    ticker: symbolName,
                    name: `${coin.symbol}/USD`,
                    session: '24x7',
                    timezone: 'Etc/UTC',
                    minmov: 1,
                    pricescale: 10000000,
                    has_intraday: true,
                    intraday_multipliers: ['1', '5', '15', '30', '60'],
                    has_empty_bars: true,
                    has_weekly_and_monthly: false,
                    supported_resolutions: configurationData.supported_resolutions,
                    volume_precision: 1,
                    data_status: 'streaming',
                }
                //onSymbolResolvedCallback(symbol);
            onSymbolResolvedCallback(symbol)
        }
        /* .then((response) => {
                if (response) {
                    return response.json();
                } else {
                    return response.json();
                }
            })
            .then((resp) => {
                window.mydata = resp.data.ethereum.dexTrades[0].baseCurrency;
            });
        // const coin = response.data.data.ethereum.dexTrades[0].baseCurrency;
        // console.log(response.data.data.ethereum.dexTrades[0].quotePrice);
        //console.log(response.data.data.ethereum.dexTrades[0].baseCurrency);
        console.log('query Posted');
        const coin = window.mydata;
        if (!coin) {
            onResolveErrorCallback();
        } else {
            const symbol = {
                ticker: symbolName,
                name: `${coin.symbol}/USD`,
                session: '24x7',
                timezone: 'Etc/UTC',
                minmov: 1,
                pricescale: 10000000,
                has_intraday: true,
                intraday_multipliers: ['1', '5', '15', '30', '60'],
                has_empty_bars: true,
                has_weekly_and_monthly: false,
                supported_resolutions: configurationData.supported_resolutions,
                volume_precision: 1,
                data_status: 'streaming',
            };
            //onSymbolResolvedCallback(symbol);
            onSymbolResolvedCallback(symbol);
        }*/
    },
    getBars: async(symbolInfo, resolution, periodParams, onHistoryCallback) => {
        const { from, to, firstDataRequest } = periodParams;
        console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
        let baseQuery = await localStorage.getItem('@baseQuery');
        let qQuery = await localStorage.getItem('@qQuery');
        let network = await localStorage.getItem('@network');
        let exchange = await localStorage.getItem('@exchange');

        try {
            if (resolution === '1D') {
                resolution = 1440;
            }
            // const response2 = await fetch(Bitquery.endpoint, {
            const bitquery = await fetch(Bitquery.endpoint, {
                method: 'POST',
                variables: {
                    from: new Date('2022-04-18T07:23:21.000Z').toISOString(),
                    to: new Date('2022-04-19T15:23:21.000Z').toISOString(),
                    interval: Number(resolution),
                    tokenAddress: symbolInfo.ticker,
                },
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': 'BQYH5kJPfhPiJsmS36s6zasFiNkfgWbD',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({
                    query: Bitquery.GET_COIN_BARS(baseQuery, qQuery, network, exchange),
                }),
            })
            const content = await bitquery.json();
            // => {
            //   return response2.json()
            // console.log(response2.data);
            //return response2.json();
            // 

            // })


            const bars = content.data.ethereum.dexTrades.map(el => {
                console.log(new Date(el.timeInterval.minute).getTime());



                return {
                    time: new Date(el.timeInterval.minute).getTime(), // date string in api response
                    low: el.low,
                    high: el.high,
                    open: Number(el.open),
                    close: Number(el.close),
                    volume: el.volume,
                };

            })

            // console.log(response2.data);
            //return response2.json();
            // 



            if (bars.length) {
                console.log("datafeed : ", bars);
                onHistoryCallback(bars, { noData: true });
            } else {
                console.log("bars length: ", bars.length);
                onHistoryCallback(bars, { noData: false });
            }
        } catch (err) {
            console.log({ err });
            // onErrorCallback(err)
        }
    },

    subscribeBars: (
        symbolInfo,
        resolution,
        onRealtimeCallback,
        subscribeUID,
        onResetCacheNeededCallback
    ) => {
        console.log(
            '[subscribeBars]: Method call with subscribeUID:',
            subscribeUID,
            symbolInfo,
            resolution,
            onRealtimeCallback,
            subscribeUID,
            onResetCacheNeededCallback,
            lastBarsCache.get(symbolInfo.full_name)
        );
    },
    unsubscribeBars: (subscriberUID) => {
        console.log(
            '[unsubscribeBars]: Method call with subscriberUID:',
            subscriberUID
        );
    },
};