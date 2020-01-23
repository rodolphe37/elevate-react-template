import React from 'react';
// import './App.css';
import Header from './components/header/Header';
import MainContentWrap from './components/mainContentWrap/MainContentWrap';
import Preloader from './components/preloader/Preloader';
import Footer from './components/footer/Footer';
import Navigation from './components/navigation/Navigation'

function App() {
  return (
    <div className="App">
      <Preloader />
      <Header />
      <Navigation />
      <MainContentWrap />
      <Footer />
    </div>
  );
}

export default App;
