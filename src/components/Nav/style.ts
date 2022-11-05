import styled from 'styled-components';

export const Header = styled.header`
    height: 10vh;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

export const Logo = styled.h1`
    font-style: oblique;
    font-weight: 500;
    font-size: 4rem;
    word-break: keep-all;
    @media screen and (max-width: 390px) {
        font-size: 3em;
        flex-shrink: 1;
    }
`;
