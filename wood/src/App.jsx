import React from 'react';
import style from './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './Pages/MainPage';
import { Posters } from './Pages/Posters';
import { About } from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Posters" element={<Posters />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

