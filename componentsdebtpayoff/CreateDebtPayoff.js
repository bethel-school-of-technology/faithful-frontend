import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateDebtPayoff extends Component {
  constructor() {
    super();
    this.state = {
      item: '',
      amount:'',
      minpayment:'',
      snowbalpayment:'',
      minnumberleft:'',
      snownumberleft:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      item: this.state.item,
      amount: this.state.amount,
      minpayment: this.state.minpayment,
      snowballpayment: this.state.snowballpayment,
      minnumberleft: this.state.minnumberleft,
      snownumberleft: this.state.snownumberleft
    };

    axios
      .post('http://localhost:3001/debtpayoff', data)
      .then(res => {
        this.setState({
            item: '',
            amount: 0,
            minpayment: 0,
            snowballpayment: 0,
            minnumberleft: 1,
            snownumberleft: 1
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateDebtPayoff!");
      })
  };

  render() {
    return (
      <div className="CreateDebtPayoff">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show What Debt is Remaining List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Bills Paid</h1>
              <p className="lead text-center">
                  Enter the item of the debt, the amnount left to pay, the minimum payment, and the snowball amount.
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Item'
                    name='item'
                    className='form-control'
                    value={this.state.item}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='amount'
                    className='form-control'
                    value={this.state.amount}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='minpayment'
                    className='form-control'
                    value={this.state.minpayment}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='snowballpayment'
                    className='form-control'
                    value={this.state.snowballpayment}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "1"
                    name='minnumberleft'
                    className='form-control'
                    value={this.state.minnumberleft}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='snownumberleft'
                    className='form-control'
                    value={this.state.snownumberleft}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateDebtPayoff;