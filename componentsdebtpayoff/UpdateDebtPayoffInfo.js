import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateDebtPayoffInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      amount: '',
      minpayment: '',
      snowballpayment: '',
      numberleft: '',
      snownumberleft: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/debtpayoff/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          item: res.data.item,
          amount: res.data.amount,
          minpayment: res.data.minpayment,
          snowballpayment: res.data.snowballpayment,
          numberleft: res.data.numberleft,
          snownumberleft: res.data.snownumberleft
        })
      })
      .catch(err => {
        console.log("Error from UpdateDebtPayoffInfo");
      })
  };

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
      numberleft: this.state.numberleft,
      snownumberleft: this.state.snownumberleft
    };

    axios
      .put('http://localhost:3031/debtpayoff/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-debtpayoff/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateDebtPayoffInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateDebtPayoffInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Bills Paid List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Debt Payoff</h1>
              <p className="lead text-center">
                  Update Debt Payoff's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="item">Item</label>
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
            <label htmlFor="amount">Amount</label>
              <input
                type='number'
                placeholder='0'
                name='amount'
                className='form-control'
                value={this.state.amount}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="minpayment">Minimum Payment</label>
              <input
                type='number'
                placeholder='0'
                name='minpayment'
                className='form-control'
                value={this.state.minpayment}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="snowballpayment">Snowball Payment</label>
              <input
                type='number'
                placeholder='0'
                name='snowballpayment'
                className='form-control'
                value={this.state.snowballpayment}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="numberleft">Number of Minimum Payments Left</label>
              <input
                type='number'
                placeholder='0'
                name='numberleft'
                className='form-control'
                value={this.state.numberleft}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="snownumberleft">Number of Snowball Payments Left</label>
              <input
                type='number'
                placeholder='0'
                name='snownumberleft'
                className='form-control'
                value={this.state.snownumberleft}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Debt Payoff</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateDebtPayoffInfo