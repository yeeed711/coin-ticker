import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import CoinInfo from '../pages/CoinInfo';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:coinId/*' element={<CoinInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
