import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchCoins } from '../api';
import { Link } from 'react-router-dom';

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
  return (
    <Container>
      <Header>
        <Title>코인 리스트</Title>
      </Header>

      <CoinList>
        {data?.slice(0, 100).map((coin) => (
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`} state={{ name: coin.id }}>
              <Img
                src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
              />
              {coin.name}
            </Link>
          </Coin>
        ))}
      </CoinList>
    </Container>
  );
};

export default Coins;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 5rem;
`;

const CoinList = styled.ul`
  padding: 2rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 2rem 4rem;
`;

const Coin = styled.li`
  width: 100%;
  border-radius: 1.2rem;
  background-color: #ffffff;
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    border-radius: inherit;
    font-size: 2.4rem;
    color: ${(props) => props.theme.textColor};
    transition: all 0.1s ease-in;
    &:hover {
      color: ${(props) => props.theme.accentColor};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      transform: translateY(-0.4rem);
    }
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
