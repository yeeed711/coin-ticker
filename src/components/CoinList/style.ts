import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto 10vh;
    @media screen and (max-width: 1250px) {
        margin: 0 20px 10vh;
    }
`;

export const CoinItems = styled.ul`
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

export const LabelLi = styled.li`
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
    @media screen and (max-width: 768px) {
        span:nth-child(6) {
            display: none;
        }
    }

    @media screen and (max-width: 375px) {
        span:not(:first-child) {
            text-align: right;
        }
        span:nth-child(3) {
            display: none;
        }
    }
`;

export const Img = styled.img`
    width: 12px;
    height: 12px;
    margin: 0 3px -1px -5px;
`;

export const Coin = styled.li`
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
        @media screen and (max-width: 768px) {
            span:nth-child(6) {
                display: none;
            }
        }

        @media screen and (max-width: 375px) {
            span:nth-child(3) {
                display: none;
            }
        }
    }
    &:hover {
        background-color: ${(props) => props.theme.color.bg.lv3};
    }
`;

export const CoinTitle = styled.span`
    min-width: 70px;
`;

export const NowPrice = styled.span`
    min-width: 80px;
    text-align: right;
`;

export const Fluctate = styled(NowPrice)`
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

export const High = styled(NowPrice)`
    color: ${(props) => props.theme.color.accent.high};
`;

export const Low = styled(NowPrice)`
    color: ${(props) => props.theme.color.accent.low};
`;

export const TradeValue = styled(NowPrice)`
    min-width: 100px;
`;
