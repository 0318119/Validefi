export const endpoint = 'https://graphql.bitquery.io';

export const GET_COIN_INFO = (baseQuery, qQuery, network, exchange) => {
    let myQuery = `
{
  ethereum(network: ${network}) {
    dexTrades(
      options: {desc: ["block.height", "transaction.index"], limit: 1}
      exchangeName: {is: "${exchange}"},
      quoteCurrency: {is: "${qQuery}"},
      baseCurrency: {is: "${baseQuery}"}
    ) {
      block {
        height
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
      }
      transaction {
        index
      }
      baseCurrency {
        name
        symbol
        decimals
      }
      quotePrice
    }
  }
}

`;
    return myQuery;
};

// export const GET_COIN_BARS = (baseQuery, qQuery, network, exchange) => {
//   let myQuery;
//   // if(network==='ethereum'){
//   myQuery = `
//     {
//   ethereum(network: ${network}) {
//     dexTrades(
//       options: {limit: 1000, desc: "timeInterval.minute"}
//       date: {since: "2022-04-19"}
//       baseCurrency: {is: "${baseQuery}"}
//       quoteCurrency: {is: "${qQuery}"}
//     ) {
//       timeInterval {
//         minute(count: 15)
//       }
//       baseCurrency {
//         symbol
//         address
//       }
//       baseAmount
//       quoteCurrency {
//         symbol
//         address
//       }

//       quoteAmount
//       trades: count
//       quotePrice
//       maximum_price: quotePrice(calculate: maximum)
//       minimum_price: quotePrice(calculate: minimum)
//       open_price: minimum(of: block, get: quote_price)
//       close_price: maximum(of: block, get: quote_price)
//     }
//   }
// }
//    `;
//   return myQuery;
// };
// }else{
//   console.log("bnb taiche");
//   myQuery =`
//   {
//    ethereum(network: ${network}) {
//      dexTrades(
//        options: {asc: "timeInterval.minute" }
//        date: {is: "2022-01-20" }
//        exchangeName: {is: "${exchange}"}
//        quoteCurrency: {is: "${qQuery}"}
//        baseCurrency: {is: "${baseQuery}"}
//        tradeAmountUsd: {gt: 10}
//      ) {
//        timeInterval {
//          minute(count: 1, format: "%Y-%m-%dT%H:%M:%SZ")
//        }
//        volume: quoteAmount
//        high: quotePrice(calculate: maximum)
//        low: quotePrice(calculate: minimum)
//        open: minimum(of: block, get: quote_price)
//        close: maximum(of: block, get: quote_price)
//      }
//    }
//  }

//  `;
// }

// }

export const GET_COIN_BARS = (baseQuery, qQuery, network, exchange, resolution, from, to) => {
    let q 
    
    if (!from) {
        q = `{
                ethereum(network: ${network}) {
                  dexTrades(
                    options: {asc: "timeInterval.minute"}
                    exchangeName: {is: "${exchange}"}
                    quoteCurrency: {is: "${qQuery}"}
                    baseCurrency: {is: "${baseQuery}"}
                  ) {
                    timeInterval {
                      minute(format:"%FT%TZ", count: ${resolution})
                    }
                    volume: quoteAmount
                    high: quotePrice(calculate: maximum)
                    low: quotePrice(calculate: minimum)
                    open: minimum(of: block, get: quote_price)
                    close: maximum(of: block, get: quote_price)
                  }
                }
            }`

    } else {
        q = `{
                ethereum(network: ${network}) {
                  dexTrades(
                    date: {since: "${from}", till: "${to}"}
                    options: {asc: "timeInterval.minute"}
                    exchangeName: {is: "${exchange}"}
                    quoteCurrency: {is: "${qQuery}"}
                    baseCurrency: {is: "${baseQuery}"}
                  ) {
                    timeInterval {
                      minute(format:"%FT%TZ", count: ${resolution})
                    }
                    volume: quoteAmount
                    high: quotePrice(calculate: maximum)
                    low: quotePrice(calculate: minimum)
                    open: minimum(of: block, get: quote_price)
                    close: maximum(of: block, get: quote_price)
                  }
                }
            }`
    }


    return q
};
