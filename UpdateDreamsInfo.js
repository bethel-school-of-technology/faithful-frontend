import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateDreamsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      dream: '',
      verses: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/dreams/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          date: res.data.date,
          dream: res.data.dream,
          verses: res.data.verses
        })
      })
      .catch(err => {
        console.log("Error from UpdateDreamsInfo");
      })
  };

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
      .put('http://localhost:3031/dreams/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-dreams/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateDreamsInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateDreamsInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Dreams and Visions List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Dreams and Visions</h1>
              <p className="lead text-center">
                  Update Dreams and Visons' Info
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
            <label htmlFor="dream">Dream or Vision</label>
              <input
                type='text'
                placeholder='Dream or Vision'
                name='dream'
                className='form-control'
                value={this.state.dream}
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

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Dreams and Visions</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateDreamsInfo