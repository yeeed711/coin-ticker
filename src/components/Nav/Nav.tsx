import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isDarkAtom } from '../../atoms';
import ModeChangeBtn from '../ModeChangeBtn/ModeChangeBtn';

const Nav = () => {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <Header>
      <Logo>
        <Link to='/'>{`{ COIN$ TICKER }`}</Link>
      </Logo>
      <ModeChangeBtn onClick={toggleDarkAtom}>
        {isDark ? 'Light' : 'Dark'}
      </ModeChangeBtn>
    </Header>
  );
};

export default Nav;

const Header = styled.header`
  height: 10vh;
  text-align: center;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-style: oblique;
  font-weight: 500;
  font-size: 4rem;
`;
