import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './Pages/MainPage';
import { Posters } from './Pages/Posters';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Posters" element={<Posters />} />
        <Route path="/MainPage" index element={<MainPage />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
