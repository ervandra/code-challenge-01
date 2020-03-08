import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './styles/app.scss';

function App() {
  return (
    <div className="container">
      <div className="header"><h1>Analog Clock</h1></div>
      <div className="content">
        <div className="clock">
          <div className="hour"><div className="hr"></div></div>
          <div className="minute"><div className="mn"></div></div>
          <div className="second"><div className="sc"></div></div>
        </div>
      </div>
      <div className="footer"><div className="copyright">Dibuat oleh: <a href="https://www.ervandra.com">Ervandra Halim</a> | <a href="https://reactive.id">Reactive.id</a></div></div>
    </div>
  );
}

export default App;
