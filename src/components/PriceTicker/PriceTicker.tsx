import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { bithumbCoinInfo } from '../../api';
import * as S from './style';

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

  //코인 정보
  const { isLoading, data: coinInfoData } = useQuery<ICoin>(
    [['coinTicker'], coinId],
    () => bithumbCoinInfo(`${coinId}`),
    { staleTime: 1000, refetchInterval: 1000, notifyOnChangeProps: 'tracked' }
  );
  let refValue =
    (Number(coinInfoData?.data.closing_price) -
      Number(coinInfoData?.data.prev_closing_price)) /
    Number(coinInfoData?.data.prev_closing_price);

  let fluctateRefValue = Number(coinInfoData?.data.fluctate_24H);

  if (isLoading) return <div>PreceTicker 로딩중</div>;

  return (
    <S.Wrapper>
      <S.NowPrice className={refValue > 0 ? 'high' : 'low'}>
        <S.Title>
          <S.Img
            src={`https://coinicons-api.vercel.app/api/icon/${coinId?.toLowerCase()}`}
          />
          {coinId}/KWR
        </S.Title>
        <span>
          {Number(coinInfoData?.data.closing_price).toLocaleString('KR-ko')}
        </span>
        <span>전일대비</span>
        <span>
          {(
            ((Number(coinInfoData?.data.closing_price) -
              Number(coinInfoData?.data.prev_closing_price)) /
              Number(coinInfoData?.data.prev_closing_price)) *
            100
          ).toFixed(2)}
          %
        </span>
        <span>
          {refValue > 0 ? '▲ ' : '▼ '}
          {Math.abs(
            Number(coinInfoData?.data.prev_closing_price) -
              Number(coinInfoData?.data.closing_price)
          ).toLocaleString('KR-ko')}
        </span>
      </S.NowPrice>
      <S.PriceView>
        <S.PriceCategory>
          <S.PriceValue>
            <span>변동률(24h)</span>
            <span className={fluctateRefValue > 0 ? 'high' : 'low'}>
              {coinInfoData?.data.fluctate_rate_24H}%
            </span>
          </S.PriceValue>
          <S.PriceValue>
            <span>변동가(24h)</span>
            <span className={fluctateRefValue > 0 ? 'high' : 'low'}>
              {Number(coinInfoData?.data.fluctate_24H).toLocaleString('KR-ko')}
            </span>
          </S.PriceValue>
          <S.PriceValue>
            <span>저가(24h)</span>
            <span className='low'>
              {Number(coinInfoData?.data.min_price).toLocaleString('KR-ko')}
            </span>
          </S.PriceValue>
          <S.PriceValue>
            <span>고가(24h)</span>
            <span className='high'>
              {Number(coinInfoData?.data.max_price).toLocaleString('KR-ko')}
            </span>
          </S.PriceValue>
          <S.PriceValue>
            <span>거래량(24h)</span>
            <span>
              {Number(coinInfoData?.data.units_traded_24H).toLocaleString(
                'KR-ko'
              )}
            </span>
          </S.PriceValue>
        </S.PriceCategory>
      </S.PriceView>
    </S.Wrapper>
  );
};

export default PriceTicker;

// const Wrapper = styled.div`
//   min-width: 800px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   background-color: ${(props) => props.theme.color.bg.lv2};
//   border-radius: 10px;
//   box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   font-size: 1.4rem;
//   color: ${(props) => props.theme.color.text.lv2};
// `;

// const NowPrice = styled.div`
//   font-size: 1.4rem;
//   span + span {
//     margin-right: 7px;
//   }
//   span:nth-of-type(1) {
//     display: block;
//     font-size: 3rem;
//     font-weight: 600;
//     margin-bottom: 10px;
//   }
//   span:nth-of-type(2) {
//     color: #9c9c9c;
//     font-size: 1.4rem;
//   }
//   span:nth-of-type(3) {
//   }
//   &.low {
//     color: ${(props) => props.theme.color.accent.low};
//   }
//   &.high {
//     color: ${(props) => props.theme.color.accent.high};
//   }
// `;

// const PriceView = styled.div``;

// const PriceCategory = styled.div`
//   display: flex;
//   gap: 3rem;
// `;

// const PriceValue = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   span:last-child {
//     font-size: 1.4rem;
//     &.low {
//       color: ${(props) => props.theme.color.accent.low};
//     }
//     &.high {
//       color: ${(props) => props.theme.color.accent.high};
//     }
//   }
// `;

// const Img = styled.img`
//   width: 20px;
//   height: 20px;
//   margin: 0 8px 3px 0;
//   vertical-align: middle;
// `;
