import React from 'react';
import './App.css'
import DomainListPage from './DomainListPage';
import HeaderLoader from './HeaderLoader';
import Footer from './FooterModule'

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div>
          <HeaderLoader />
        </div>
        <div className='App-title-group'>
          <div className="App-title">shikase.com</div>
          <div className="App-slogan">Exclusive Premium Domains, Curated Weekly</div>
        </div>
      </div>
      <div className='domain-list-container'>
        <DomainListPage />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  );
}

export default App;

