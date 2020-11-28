import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DebtPayoffCard from './DebtPayoffCard';

class ShowDebtPayoffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        debtpayoffs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/debtpayoff')
      .then(res => {
        this.setState({
            debtpayoffs: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowDebtPayoffList');
      })
  };


  render() {
    const debtpayoffs = this.state.debtpayoffs;
    console.log("PrintDebtPayoff: " + debtpayoffs);
    let debtpayoffList;

    if(!debtpayoffs) {
        debtpayoffList = "there is no debt payoff record!";
    } else {
        debtpayoffList = debtpayoffs.map((debtpayoff, k) =>
        <DebtPayoffCard debtpayoff={debtpayoff} key={k} />
      );
    }

    return (
      <div className="ShowDebtPayoffList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Debt Payoff List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-debtpayoff" className="btn btn-outline-warning float-right">
                + Add New Debt to Payoff
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {debtpayoffList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDebtPayoffList;