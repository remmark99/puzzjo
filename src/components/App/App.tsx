import React from 'react';
import './App.css';
import Header from '../Header';
import Slider from '../Slider';
import Search from '../Search';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Slider />
      <Search />
    </>
  );
}

export default App;