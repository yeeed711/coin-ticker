import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from '../pages/Coin';
import Coins from '../pages/Coins';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/:coinid' element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
