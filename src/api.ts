const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  return await (await fetch(`${BASE_URL}/coins`)).json();
};

// export const fetchCoinHistory = async (coinId: string) => {
//   return await (
//     await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
//   ).json();
// };

// bithumb API

const API_URL = `https://api.bithumb.com/public/`;

export const bithumbCoins = async () => {
  return await (await fetch(`${API_URL}/ticker/ALL_KRW`)).json();
};

export const bithumbCoinInfo = async (coinId: string) => {
  return await (await fetch(`${API_URL}/ticker/${coinId}_KRW`)).json();
};

export const bithumbCandlestick = async (coinId: string) => {
  return await (await fetch(`${API_URL}/candlestick/${coinId}_KRW`)).json();
};
