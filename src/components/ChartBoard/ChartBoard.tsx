import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { bithumbCandlestick } from '../../api';
import PriceTicker from '../PriceTicker/PriceTicker';
import Area from '../Chart/Area';
import Candle from '../Chart/Candle';
import ModeChangeBtn from '../ModeChangeBtn/ModeChangeBtn';
import { Wrapper } from './style';

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
          {isActive ? 'Candle' : 'Area'}
        </ModeChangeBtn>
        {isActive ? <Area data={data} /> : <Candle data={data} />}
      </Wrapper>
    </>
  );
};

export default ChartBoard;
