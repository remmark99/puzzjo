import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Slider />
    </>
  );
}

export default App;
