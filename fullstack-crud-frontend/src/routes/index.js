import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import { AddEmployee, Home, ListEmployee } from './pages';

const RootRouter = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/all-emp' element={<ListEmployee />} />
          <Route path='/add-emp' element={<AddEmployee />} />
          <Route path='/edit-emp/:empno' element={<AddEmployee />} />
        </Routes>
      </div>
    </div>
  );
};

export default RootRouter;
