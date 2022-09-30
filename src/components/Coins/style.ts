import styled from 'styled-components';

export const CoinList = styled.ul`
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

export const LabelLi = styled.li`
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

export const Coin = styled.li`
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

export const Img = styled.img`
  width: 12px;
  height: 12px;
  margin: 0 3px -1px -5px;
`;

export const High = styled.span`
  color: ${(props) => props.theme.color.accent.high};
`;
export const Low = styled.span`
  color: ${(props) => props.theme.color.accent.low};
`;
