import { useQuery } from 'react-query';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { bithumbCoins } from '../../api';
import ChartBoard from '../ChartBoard/ChartBoard';

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
  const { isLoading, data } = useQuery<ICoins>(['Coins'], bithumbCoins, {
    refetchInterval: 1000,
    staleTime: 60 * 1000,
    notifyOnChangeProps: 'tracked',
  });
  const { state } = useLocation();
  const CoinsListData = () => {
    let components = [];
    for (let coin in data?.data) {
      components.push(
        <Coin key={coin} className={state?.name == coin ? 'on' : ''}>
          <Link to={`/${coin}/chart`} state={{ name: coin }}>
            <span>
              <Img
                src={`https://coinicons-api.vercel.app/api/icon/${coin.toLowerCase()}`}
              />
              {coin}
            </span>
            <span>
              {Number(data?.data[coin].closing_price).toLocaleString('KR-ko')}
            </span>
            {Number(data?.data[coin].fluctate_rate_24H) > 0 ? (
              <High>{data?.data[coin].fluctate_rate_24H}%</High>
            ) : (
              <Low>{data?.data[coin].fluctate_rate_24H}%</Low>
            )}
            <span>
              {Number(data?.data[coin].acc_trade_value_24H).toFixed(0)}
            </span>
          </Link>
        </Coin>
      );
    }
    components.pop();
    return components;
  };

  return (
    <Container>
      <Routes>
        <Route path='chart' element={<ChartBoard />} />
      </Routes>
      {isLoading ? (
        'COINS 불러오는 중!!!!!!!!'
      ) : (
        <CoinsWrapper>
          <LabelLi>
            <span>코인명</span>
            <span>가격</span>
            <span>변동률(24h)</span>
            <span>거래금액&darr;</span>
          </LabelLi>
          <CoinList>{CoinsListData()}</CoinList>
        </CoinsWrapper>
      )}
    </Container>
  );
};

export default Coins;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 5fr;
  grid-template-rows: 1fr 5fr;
  gap: 2rem;
`;

const CoinsWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
`;

const CoinList = styled.ul`
  overflow-y: auto;
  height: 650px;
  background-color: ${(props) => props.theme.color.bg.lv2};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e2e2e2;
  }
`;

const LabelLi = styled.li`
  background-color: ${(props) => props.theme.color.bg.lv2};
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${(props) => props.theme.color.grey.lv1};
  padding: 1.4rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.text.lv1};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  span:nth-child(2) {
    min-width: 70px;
    text-align: right;
  }
  span:nth-child(3) {
    &.low {
      color: ${(props) => props.theme.color.accent.low};
    }
    &.high {
      color: ${(props) => props.theme.color.accent.high};
    }
  }
  span:nth-child(4) {
  }
`;

const Coin = styled.li`
  border-bottom: 1px solid ${(props) => props.theme.color.grey.lv1};
  a {
    display: flex;
    align-items: center;
    padding: 1.8rem;
    border-radius: inherit;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.color.text.lv1};
    justify-content: space-between;
    transition: all 0.1s ease-in;
    span:first-child {
      min-width: 60px;
      font-weight: 600;
      color: ${(props) => props.theme.color.text.lv2};
    }
    span:nth-child(2),
    span:nth-child(3) {
      min-width: 70px;
      text-align: right;
    }
    span:last-child {
      min-width: 100px;
      text-align: right;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.bg.lv3};
    }
  }
  &.on {
    border: 1.5px solid #619ef9;
    background-color: ${(props) => props.theme.color.bg.lv3};
    position: sticky;
    top: 0;
  }
`;

const Img = styled.img`
  width: 12px;
  height: 12px;
  margin: 0 3px -1px -5px;
`;

const High = styled.span`
  color: ${(props) => props.theme.color.accent.high};
`;
const Low = styled.span`
  color: ${(props) => props.theme.color.accent.low};
`;
