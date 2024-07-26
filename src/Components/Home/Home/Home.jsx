import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AdminAuth } from '../../../Authorization/Authorization';
import Weather from '../../Weather/Weather';


function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
        <Route element={<AdminAuth />}>
          < Route path='/Home' element={< Weather />} />
          </Route  >
        </Routes>
      </div>




    </div>
  )
}

export default Home