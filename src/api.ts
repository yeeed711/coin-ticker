const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  return await (await fetch(`${BASE_URL}/coins`)).json();
};
