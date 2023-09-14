import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './Pages/MainPage';
import { Posters } from './Pages/Posters';
import { About } from './Pages/About';
import { Contact } from './Pages/contact';
import { Login } from './Pages/Login';
import { Details } from "./Pages/Details";

import { CSSTransition, TransitionGroup } from 'react-transition-group';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Posters" element={<Posters />} />
        <Route path="/details/:slug" element={<Details/>}/>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

