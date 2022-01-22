import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import AppRoute from './AppRoute';


function App() {
  return (
    <HashRouter>
      <div className='App-wrapper'>
        <Header />
        <Navbar />
        <AppRoute />
      </div>
    </HashRouter>

  );
}

export default App;
