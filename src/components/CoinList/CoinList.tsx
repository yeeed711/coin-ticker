import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { bithumbCoins } from '../../api';

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
        <Coin key={coin}>
          <Link to={`/${coin}/chart`} state={{ name: coin }}>
            {/* 코인명 */}
            <CoinTitle>
              <Img
                src={`https://coinicons-api.vercel.app/api/icon/${coin.toLowerCase()}`}
              />
              {coin}
            </CoinTitle>
            {/* 실시간시세 */}
            <NowPrice>
              {Number(data?.data[coin].closing_price).toLocaleString('KR-ko')}
            </NowPrice>
            {/* 변동률 전일대비 */}
            <Fluctate className={refValue > 0 ? 'high' : 'low'}>
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
            </Fluctate>
            {/* 고가 */}
            <High>
              {Number(data?.data[coin].max_price).toLocaleString('KR-ko')}
            </High>
            {/* 저가 */}
            <Low>
              {Number(data?.data[coin].min_price).toLocaleString('KR-ko')}
            </Low>
            {/* 거래금액 */}
            <TradeValue>
              {Number(data?.data[coin].acc_trade_value_24H).toFixed(0)}
            </TradeValue>
          </Link>
        </Coin>
      );
    }
    components.pop();
    return components;
  };

  return (
    <Container>
      <LabelLi>
        <span>코인명</span>
        <span>실시간 시세</span>
        <span>변동률(전일대비)</span>
        <span>고가(24h)</span>
        <span>저가(24h)</span>
        <span>거래금액&darr;</span>
      </LabelLi>
      <CoinItems>{CoinsListData()}</CoinItems>
    </Container>
  );
};

export default CoinList;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto 10vh;
`;

//coin
const CoinItems = styled.ul`
  overflow-y: auto;
  background-color: ${(props) => props.theme.color.bg.lv2};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  height: 650px;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e2e2e2;
  }
`;

const LabelLi = styled.li`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  color: ${(props) => props.theme.color.text.lv1};
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.color.bg.lv2};
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${(props) => props.theme.color.grey.lv1};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  span {
    min-width: 65px;
  }
`;

// CoinsListData coin
const Img = styled.img`
  width: 12px;
  height: 12px;
  margin: 0 3px -1px -5px;
`;

const Coin = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.color.grey.lv1};
  a {
    display: flex;
    align-items: center;
    padding: 2rem;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme.color.text.lv1};
    justify-content: space-between;
    transition: all 0.1s ease-in;
  }
  &:hover {
    background-color: ${(props) => props.theme.color.bg.lv3};
  }
`;

const CoinTitle = styled.span`
  min-width: 70px;
`;

const NowPrice = styled.span`
  min-width: 80px;
  text-align: right;
`;

const Fluctate = styled(NowPrice)`
  min-width: 120px;
  span + span {
    margin-left: 10px;
  }
  &.high {
    color: ${(props) => props.theme.color.accent.high};
  }
  &.low {
    color: ${(props) => props.theme.color.accent.low};
  }
`;

const High = styled(NowPrice)`
  color: ${(props) => props.theme.color.accent.high};
`;

const Low = styled(NowPrice)`
  color: ${(props) => props.theme.color.accent.low};
`;

const TradeValue = styled(NowPrice)`
  min-width: 100px;
`;
