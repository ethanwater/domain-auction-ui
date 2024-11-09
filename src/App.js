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
          <div className="App-title">SHIKASE _MARKET</div>
          <div className="App-slogan"></div>
        </div>
        <div className='App-profile'>
          <img 
            src="https://via.placeholder.com/40" // Replace with your profile image URL
            alt="Profile"
            className="Profile-image"
          />
        </div>
        
      </div>
      <div className='domain-list-container'>
        <DomainListPage title='Technology'/>
      </div>
      <div className='domain-list-container'>
        <DomainListPage title='Health and Wellness'/>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}



export default App;

