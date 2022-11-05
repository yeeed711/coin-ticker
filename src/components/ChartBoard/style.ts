import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1rem 2rem 0;
    background-color: ${(props) => props.theme.color.bg.lv2};
    border-radius: 10px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
`;
