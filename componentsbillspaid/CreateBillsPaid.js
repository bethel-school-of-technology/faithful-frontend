import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateBillsPaid extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      week1:'',
      week2:'',
      week3:'',
      week4:'',
      week1total:'',
      week2total:'',
      week3total:'',
      week4total:'',
      monthtotal:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      week1: this.state.week1,
      week2: this.state.week2,
      week3: this.state.week3,
      week4: this.state.week4,
      week1total: this.state.week1total,
      week2total: this.state.week2total,
      week3total: this.state.week3total,
      week4total: this.state.week4total,
      monthtotal: this.state.monthtotal
    };

    axios
      .post('http://localhost:3001/billspaids', data)
      .then(res => {
        this.setState({
            name: '',
            week1: 0,
            week2: 0,
            week3: 0,
            week4: 0,
            week1total: 0,
            week2total: 0,
            week3total: 0,
            week4total: 0,
            monthtotal: 0
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBillsPaid!");
      })
  };

  render() {
    return (
      <div className="CreateBillsPaid">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show When Bills are Paid List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Bills Paid</h1>
              <p className="lead text-center">
                  Enter the name of the bill and then enter the amount into the week it will be paid.
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='week1'
                    className='form-control'
                    value={this.state.week1}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='week2'
                    className='form-control'
                    value={this.state.week2}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='week3'
                    className='form-control'
                    value={this.state.week3}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='week4'
                    className='form-control'
                    value={this.state.week4}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='week1total'
                    className='form-control'
                    value={this.state.week1total}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='week2total'
                    className='form-control'
                    value={this.state.week2total}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='week3total'
                    className='form-control'
                    value={this.state.week3total}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='week4total'
                    className='form-control'
                    value={this.state.week4total}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder= "0"
                    name='monthtotal'
                    className='form-control'
                    value={this.state.monthtotal}
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

export default CreateBillsPaid;