import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateSowReap extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      dreamitem:'',
      amount:'',
      agreement:'',
      verses: '',
      manifestdate: '',
      comments: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      date: this.state.date,
      amount: this.state.amount,
      agreement: this.state.agreement,
      verses: this.state.verses,
      manifestdate: this.state.manifestdate,
      comments: this.state.comments
    };

    axios
      .post('http://localhost:3001/sowreap', data)
      .then(res => {
        this.setState({
            date: '',
            amount:'',
            agreement:'',
            verses:'',
            manifestdate:'',
            comments:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateSowReap!");
      })
  };

  render() {
    return (
      <div className="CreateSowReap">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Sowing and Reaping List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add for what you are sowing and reaping.</h1>
              <p className="lead text-center">
                  Create new sowing and reaping item
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='date'
                    name='date'
                    className='form-control'
                    value={this.state.date}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Expected Outcome'
                    name='dreamitem'
                    className='form-control'
                    value={this.state.dreamitem}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Amount Sown'
                    name='amount'
                    className='form-control'
                    value={this.state.amount}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='With whom did you agree?'
                    name='agreement'
                    className='form-control'
                    value={this.state.agreement}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Verses to declare'
                    name='verses'
                    className='form-control'
                    value={this.state.verses}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='Date Manifested'
                    name='manifestdate'
                    className='form-control'
                    value={this.state.manifestdate}
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

export default CreateSowReap;