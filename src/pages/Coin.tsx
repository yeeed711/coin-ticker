import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ApexChart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { bithumbCandlestick, bithumbCoinInfo } from '../api';

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

// interface ICandlestick {

// }

const Coin = () => {
  const { coinId } = useParams();
  const { state } = useLocation();

  const { isLoading: coinInfoLoading, data: coinInfoData } = useQuery<ICoin>(
    ['ohlcv', coinId],
    () => bithumbCoinInfo(`${coinId}`)
  );

  const { isLoading: candlestickLoading, data: candlestickData } =
    useQuery<any>(['candlestick', coinId], () =>
      bithumbCandlestick(`${coinId}`)
    );

  const loading = coinInfoLoading || candlestickLoading;
  return (
    <Container>
      <Title>{state.name}</Title>
      <Wrapper>
        <NowPrice>
          {Number(coinInfoData?.data.closing_price.slice(0, -3)).toLocaleString(
            'KR-ko'
          )}
        </NowPrice>
        <PriceView>
          <PriceCategory>
            <span>변동률(당일)</span>
            <span>저가(당일)</span>
            <span>고가(당일)</span>
          </PriceCategory>
          <PriceValue>
            <span>{coinInfoData?.data.fluctate_rate_24H}%</span>
            <span>
              {Number(coinInfoData?.data.min_price.slice(0, -3)).toLocaleString(
                'KR-ko'
              )}
            </span>
            <span>
              {Number(coinInfoData?.data.max_price.slice(0, -3)).toLocaleString(
                'KR-ko'
              )}
            </span>
          </PriceValue>
        </PriceView>
      </Wrapper>
      {loading ? (
        '로딩차트'
      ) : (
        <ApexChart
          width='800px'
          type='candlestick'
          series={[
            {
              data:
                candlestickData.data.slice(0, 100).map((candle: any) => {
                  return {
                    x: candle[0],
                    y: [candle[1], candle[3], candle[4], candle[2]],
                  };
                }) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: 'light',
            },
            chart: {
              toolbar: {
                show: false,
              },
              background: 'transparent',
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: '#cf314a',
                  downward: '#02c076',
                },
              },
            },
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              opposite: true,
              tooltip: {
                enabled: true,
              },
            },
          }}
        />
      )}
    </Container>
  );
};

export default Coin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`;

const NowPrice = styled.span`
  float: left;
  font-size: 7rem;
  font-weight: 900;
`;

const PriceView = styled.div`
  display: flex;
  justify-content: space-between;
  div + div {
    margin-left: 5rem;
  }
`;

const PriceCategory = styled.div`
  span {
    display: block;
    font-size: 1.6rem;
    line-height: 2rem;
  }
  span + span {
    margin-top: 2rem;
  }
`;

const PriceValue = styled(PriceCategory)`
  span {
    text-align: right;
    font-size: 2rem;
    font-weight: 800;
  }
`;
