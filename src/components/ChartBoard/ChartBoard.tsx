import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { bithumbCandlestick } from '../../api';
import PriceTicker from '../PriceTicker/PriceTicker';
import Area from '../Chart/Area';
import Candle from '../Chart/Candle';
import ModeChangeBtn from '../ModeChangeBtn/ModeChangeBtn';

const ChartBoard = () => {
  const { coinId } = useParams();
  const { data } = useQuery<any>(['candlestick', coinId], () =>
    bithumbCandlestick(`${coinId}`)
  );

  const [isActive, setIsActive] = useState(false);
  const toggleChart = () => setIsActive((prev) => !prev);

  return (
    <>
      <PriceTicker />
      <Wrapper>
        <ModeChangeBtn onClick={toggleChart}>
          {isActive ? 'Chart' : 'Area'}
        </ModeChangeBtn>
        {isActive ? <Area data={data} /> : <Candle data={data} />}
      </Wrapper>
    </>
  );
};

export default ChartBoard;

const Wrapper = styled.div`
  padding: 1rem 2rem 0;
  background-color: ${(props) => props.theme.color.bg.lv2};
  border-radius: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  min-width: 800px;
  margin: 0 auto;
`;
