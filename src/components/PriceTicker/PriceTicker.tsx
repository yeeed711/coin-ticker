import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useParams, useLocation } from 'react-router-dom';
import { bithumbCoinInfo } from '../../api';

interface ICoin {
  data: {
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
}

const PriceTicker = () => {
  const { coinId } = useParams();
  const { state } = useLocation();

  //코인 정보
  const { isLoading, data: coinInfoData } = useQuery<ICoin>(
    ['ohlcv', coinId],
    () => bithumbCoinInfo(`${coinId}`)
  );
  return (
    <Wrapper>
      <Title>
        <Img
          src={`https://coinicons-api.vercel.app/api/icon/${state.name.toLowerCase()}`}
        />
        {state.name}/KWR
      </Title>
      <NowPrice>
        {Number(coinInfoData?.data.closing_price).toLocaleString('KR-ko')}
      </NowPrice>
      <PriceView>
        <PriceCategory>
          <PriceValue>
            <span>변동률(24h)</span>
            <span>{coinInfoData?.data.fluctate_rate_24H}%</span>
          </PriceValue>
          <PriceValue>
            <span>변동가(24h)</span>
            <span>
              {Number(coinInfoData?.data.fluctate_24H).toLocaleString('KR-ko')}
            </span>
          </PriceValue>
          <PriceValue>
            <span>저가(24h)</span>
            <LowPrice>
              {Number(coinInfoData?.data.min_price).toLocaleString('KR-ko')}
            </LowPrice>
          </PriceValue>
          <PriceValue>
            <span>고가(24h)</span>
            <HighPrice>
              {Number(coinInfoData?.data.max_price).toLocaleString('KR-ko')}
            </HighPrice>
          </PriceValue>
          <PriceValue>
            <span>거래량(24h)</span>
            <span>
              {Number(coinInfoData?.data.units_traded_24H).toLocaleString(
                'KR-ko'
              )}
            </span>
          </PriceValue>
        </PriceCategory>
      </PriceView>
    </Wrapper>
  );
};

export default PriceTicker;

const Wrapper = styled.div`
  min-width: 800px;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  justify-content: space-around;
  gap: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: ${(props) => props.theme.coinTitleColor};
  img {
    vertical-align: middle;
  }
`;

const NowPrice = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;

const PriceView = styled.div``;

const PriceCategory = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const PriceValue = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  span:last-child {
    font-size: 1.4rem;
  }
`;

const LowPrice = styled.span`
  color: ${(props) => props.theme.LowColor};
`;

const HighPrice = styled.span`
  color: ${(props) => props.theme.HighColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
