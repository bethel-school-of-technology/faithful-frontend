import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateSavings extends Component {
  constructor() {
    super();
    this.state = { 
      purpose:'',
      goal: '',
      currentamount: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      purpose: this.state.purpose,
      goal: this.state.goal,
      currentamount: this.state.currentamount
    };

    axios
      .post('http://localhost:3001/savings', data)
      .then(res => {
        this.setState({
            purpose: '',
            goal: '',
            currentamount:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateSavings!");
      })
  };

  render() {
    return (
      <div className="CreateSavings">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Savings List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Savings</h1>
              <p className="lead text-center">
                  Create a new purpose for which you are saving
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Purpose'
                    name='purpose'
                    className='form-control'
                    value={this.state.purpose}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='0'
                    name='goal'
                    className='form-control'
                    value={this.state.goal}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='currentamount'
                    className='form-control'
                    value={this.state.currentamount}
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

export default CreateSavings;