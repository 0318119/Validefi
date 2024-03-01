export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency= "USD") =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = () =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

  export const HistoricalCharts = (id,days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=USD&days=${days}`;
  export const BTCSingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;
  export const HistoChart = (id,days) =>
  `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=${days}`;
