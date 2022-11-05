import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDarkAtom } from '../../atoms';
import ModeChangeBtn from '../ModeChangeBtn/ModeChangeBtn';
import * as nav from './style';

const Nav = () => {
    const setDarkAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
    const isDark = useRecoilValue(isDarkAtom);

    return (
        <nav.Header>
            <nav.Logo>
                <Link to='/'>{`{ COIN$ TRACKER }`}</Link>
            </nav.Logo>
            <ModeChangeBtn onClick={toggleDarkAtom}>{isDark ? 'Light' : 'Dark'}</ModeChangeBtn>
        </nav.Header>
    );
};

export default Nav;
