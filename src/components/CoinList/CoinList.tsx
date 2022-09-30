import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
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

const CoinList = () => {
  const { data } = useQuery<ICoins>(['allCoins'], bithumbCoins, {
    refetchInterval: 1000,
    staleTime: 60 * 1000,
    notifyOnChangeProps: 'tracked',
  });

  const CoinsListData = () => {
    let components = [];
    for (let coin in data?.data) {
      const refValue =
        (Number(data?.data[coin].closing_price) -
          Number(data?.data[coin].prev_closing_price)) /
        Number(data?.data[coin].prev_closing_price);
      components.push(
        <S.Coin key={coin}>
          <Link to={`/${coin}/chart`} state={{ name: coin }}>
            <S.CoinTitle>
              <S.Img
                src={`https://coinicons-api.vercel.app/api/icon/${coin.toLowerCase()}`}
              />
              {coin}
            </S.CoinTitle>
            <S.NowPrice>
              {Number(data?.data[coin].closing_price).toLocaleString('KR-ko')}
            </S.NowPrice>
            <S.Fluctate className={refValue > 0 ? 'high' : 'low'}>
              <span>
                {refValue > 0 ? '+' : '-'}
                {Math.abs(
                  Number(data?.data[coin].prev_closing_price) -
                    Number(data?.data[coin].closing_price)
                ).toLocaleString('KR-ko')}
              </span>
              <span>
                {(
                  ((Number(data?.data[coin].closing_price) -
                    Number(data?.data[coin].prev_closing_price)) /
                    Number(data?.data[coin].prev_closing_price)) *
                  100
                ).toFixed(2)}
                %{refValue > 0 ? '▲' : '▼'}
              </span>
            </S.Fluctate>
            <S.High>
              {Number(data?.data[coin].max_price).toLocaleString('KR-ko')}
            </S.High>
            <S.Low>
              {Number(data?.data[coin].min_price).toLocaleString('KR-ko')}
            </S.Low>
            <S.TradeValue>
              {Number(data?.data[coin].acc_trade_value_24H).toFixed(0)}
            </S.TradeValue>
          </Link>
        </S.Coin>
      );
    }
    components.pop();
    return components;
  };

  return (
    <S.Container>
      <S.LabelLi>
        <span>코인명</span>
        <span>실시간 시세</span>
        <span>변동률(전일대비)</span>
        <span>고가(24h)</span>
        <span>저가(24h)</span>
        <span>거래금액&darr;</span>
      </S.LabelLi>
      <S.CoinItems>{CoinsListData()}</S.CoinItems>
    </S.Container>
  );
};

export default CoinList;
