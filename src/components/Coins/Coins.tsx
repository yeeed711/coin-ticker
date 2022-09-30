import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { bithumbCoins } from '../../api';
import * as S from './style';

interface ICoins {
  data: {
    [key: string]: {
      opening_price: string;
      closing_price: string;
      min_price: string;
      max_price: string;
      units_traded: string;
      acc_trade_value: string;
      prev_closing_price: string;
      units_traded_24H: string;
      acc_trade_value_24H: string;
      fluctate_24H: string;
      fluctate_rate_24H: string;
    };
  };
}

const Coins = () => {
  const { data } = useQuery<ICoins>(['Coins'], bithumbCoins, {
    refetchInterval: 1000,
    staleTime: 60 * 1000,
    notifyOnChangeProps: 'tracked',
  });
  const { state } = useLocation();
  const CoinsListData = () => {
    let components = [];
    for (let coin in data?.data) {
      components.push(
        <S.Coin key={coin} className={state?.name === coin ? 'on' : ''}>
          <Link to={`/${coin}/chart`} state={{ name: coin }}>
            <span>
              <S.Img
                src={`https://coinicons-api.vercel.app/api/icon/${coin.toLowerCase()}`}
              />
              {coin}
            </span>
            <span>
              {Number(data?.data[coin].closing_price).toLocaleString('KR-ko')}
            </span>
            {Number(data?.data[coin].fluctate_rate_24H) > 0 ? (
              <S.High>{data?.data[coin].fluctate_rate_24H}%</S.High>
            ) : (
              <S.Low>{data?.data[coin].fluctate_rate_24H}%</S.Low>
            )}
            <span>
              {Number(data?.data[coin].acc_trade_value_24H).toFixed(0)}
            </span>
          </Link>
        </S.Coin>
      );
    }
    components.pop();
    return components;
  };

  return (
    <>
      <S.LabelLi>
        <span>코인명</span>
        <span>가격</span>
        <span>변동률(24h)</span>
        <span>거래금액&darr;</span>
      </S.LabelLi>
      <S.CoinList>{CoinsListData()}</S.CoinList>
    </>
  );
};

export default Coins;
