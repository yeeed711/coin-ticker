import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import ChartBoard from '../components/ChartBoard/ChartBoard';
import Coins from '../components/Coins/Coins';

const CoinInfo = () => {
    return (
        <Container>
            <Routes>
                <Route path='chart' element={<ChartBoard />} />
            </Routes>
            <CoinsWrapper>
                <Coins />
            </CoinsWrapper>
        </Container>
    );
};

export default CoinInfo;

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 5fr;
    grid-template-rows: 1fr 5fr;
    gap: 2rem;

    @media screen and (max-width: 1200px) {
        width: auto;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 5fr;
        justify-items: center;
    }
`;

const CoinsWrapper = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / -1;

    @media screen and (max-width: 1200px) {
        display: none;
    }
`;
