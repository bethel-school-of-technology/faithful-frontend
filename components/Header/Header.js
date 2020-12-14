import React from 'react';
import logo from '../../../src/CashFlow.png';
import Tracker from '../Tracker/Tracker'
import '../Header/Header.css';


class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 style={{justifyContent: 'center', bottom: '90%', position: 'absolute'}}>Cash Flow Tracker</h2>
            <img style={{justifyContent: 'center', bottom: '53%', position: 'absolute'}} src={logo} className="App-logo" alt="logo" />
        </div>
        <Tracker />
        <div>
        </div>
      </div>
        
    );
  }
}

export default Header;
