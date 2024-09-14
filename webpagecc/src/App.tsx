import React from 'react';
import './App.css';
import Navbar from './Components/Naviagation Bar/Navbar'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Models from './Components/ModelsManagement';
import { Event } from './Components/Event';
import { PhotoSales } from './Components/PhotoSales';
import { Membership } from './Components/Membership';
import { Products } from './Components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Models' element={<Models/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Events' element={<Event/>}/>
        <Route path='/PhotoSale' element={<PhotoSales/>}/>
        <Route path='/Membership' element={<Membership/>}/>
      </Routes>
    </div>
  );
}

export default App;
