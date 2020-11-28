import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateAttitude extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      thoughts:'',
      verses:'',
      possibilities:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      date: this.state.date,
      thoughts: this.state.thoughts,
      verses: this.state.verses,
      possibilities: this.state.possibilities
    };

    axios
      .post('http://localhost:3001/attitudes', data)
      .then(res => {
        this.setState({
            date: '',
            thoughts:'',
            verses:'',
            possibilities:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateAttitude!");
      })
  };

  render() {
    return (
      <div className="CreateAttitude">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Attitudes List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Attitude</h1>
              <p className="lead text-center">
                  Create new attitude
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
                    placeholder='Thoughts'
                    name='thoughts'
                    className='form-control'
                    value={this.state.thoughts}
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
                    type='text'
                    placeholder='What is possible?'
                    name='description'
                    className='form-control'
                    value={this.state.description}
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

export default CreateAttitude;