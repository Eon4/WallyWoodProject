import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './Pages/MainPage';
import { Posters } from './Pages/Posters';
import { About } from './Pages/About';
import { Contact } from './Pages/contact';
import { Login } from './Pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Posters" element={<Posters />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

