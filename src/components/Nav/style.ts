import styled from 'styled-components';

export const Header = styled.header`
    height: 10vh;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        padding: 0 20px;
    }
`;

export const Logo = styled.h1`
    font-style: oblique;
    font-weight: 500;
    font-size: 4rem;
    word-break: keep-all;
    @media screen and (max-width: 480px) {
        font-size: 3em;
    }
    @media screen and (max-width: 390px) {
        font-size: 2.8em;
        flex-shrink: 1;
    }
`;
