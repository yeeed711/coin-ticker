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
