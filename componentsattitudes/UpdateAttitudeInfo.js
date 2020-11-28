import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateAttitudeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      thoughts: '',
      verses: '',
      possibilities: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/attitude/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          date: res.data.date,
          thoughts: res.data.thoughts,
          verses: res.data.verses,
          possiblities: res.data.possibilities
        })
      })
      .catch(err => {
        console.log("Error from UpdateAttitudeInfo");
      })
  };

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
      .put('http://localhost:3031/attitude/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-attitude/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateAttitudeInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateAttitudeInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Attitude List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Attitude</h1>
              <p className="lead text-center">
                  Update Attitude's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="date">Date</label>
              <input
                type='date'
                placeholder='Date'
                name='date'
                className='form-control'
                value={this.state.date}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="thoughts">Thoughts</label>
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
            <label htmlFor="verses">Verses</label>
              <input
                type='text'
                placeholder='Verses'
                name='verses'
                className='form-control'
                value={this.state.verses}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="possibilities">Possibilities</label>
              <input
                type='text'
                placeholder='Dream What is Possible'
                name='possibilities'
                className='form-control'
                value={this.state.possibilities}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Attitude</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateAttitudeInfo