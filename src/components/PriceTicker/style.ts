import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${(props) => props.theme.color.bg.lv2};
    border-radius: 10px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 0 20px;
    /* @media screen and (max-width: 820px) {
        min-width: fit-content;
    } */
`;

export const Title = styled.h2`
    font-size: 1.4rem;
    color: ${(props) => props.theme.color.text.lv2};
`;

export const NowPrice = styled.div`
    font-size: 1.4rem;
    span + span {
        margin-right: 7px;
    }
    span:nth-of-type(1) {
        display: block;
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 10px;
    }
    span:nth-of-type(2) {
        color: #9c9c9c;
        font-size: 1.4rem;
    }
    span:nth-of-type(3) {
    }
    &.low {
        color: ${(props) => props.theme.color.accent.low};
    }
    &.high {
        color: ${(props) => props.theme.color.accent.high};
    }
`;

export const PriceView = styled.div``;

export const PriceCategory = styled.div`
    display: flex;
    gap: 3rem;
`;

export const PriceValue = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    span:last-child {
        font-size: 1.4rem;
        &.low {
            color: ${(props) => props.theme.color.accent.low};
        }
        &.high {
            color: ${(props) => props.theme.color.accent.high};
        }
    }
`;

export const Img = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 8px 3px 0;
    vertical-align: middle;
`;
