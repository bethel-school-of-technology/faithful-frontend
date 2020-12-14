import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateDreams extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      dream:'',
      verses:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      date: this.state.date,
      dream: this.state.dream,
      verses: this.state.verses
    };

    axios
      .post('http://localhost:3001/dreams', data)
      .then(res => {
        this.setState({
            date: '',
            dream:'',
            verses:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateDreams!");
      })
  };

  render() {
    return (
      <div className="CreateDreams">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Dreams and Visions List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Dream or Vision</h1>
              <p className="lead text-center">
                  Record a new Dream or Vision
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
                    placeholder='Dream'
                    name='dream'
                    className='form-control'
                    value={this.state.dream}
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

export default CreateDreams;