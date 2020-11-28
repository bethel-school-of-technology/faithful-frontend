import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateBillsPaidInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      week1: '',
      week2: '',
      week3: '',
      week4: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/billspaid/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          name: res.data.name,
          week1: res.data.week1,
          week2: res.data.week2,
          week3: res.data.week3,
          week4: res.data.week4
        })
      })
      .catch(err => {
        console.log("Error from UpdateBillsPaidInfo");
      })
  };

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
      week4: this.state.week4
    };

    axios
      .put('http://localhost:3031/billspaids/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-billspaid/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBillsPaidInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBillsPaidInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Bills Paid List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Bills Paid</h1>
              <p className="lead text-center">
                  Update Bills Paid's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
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
            <label htmlFor="week1">Week 1</label>
              <input
                type='number'
                placeholder='0'
                name='week1'
                className='form-control'
                value={this.state.week1}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="week2">Week 2</label>
              <input
                type='number'
                placeholder='0'
                name='week2'
                className='form-control'
                value={this.state.week2}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="week3">Week 3</label>
              <input
                type='number'
                placeholder='0'
                name='week3'
                className='form-control'
                value={this.state.week3}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="week4">Week 4</label>
              <input
                type='number'
                placeholder='0'
                name='week4'
                className='form-control'
                value={this.state.week4}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Bills Paid</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateBillsPaidInfo