import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Slider />
    </>
  );
}

export default App;