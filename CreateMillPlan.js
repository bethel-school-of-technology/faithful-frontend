import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateMillPlan extends Component {
  constructor() {
    super();
    this.state = {
      timeline: '',
      category:'',
      description:'',
      cost:'',
      comments: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      timeline: this.state.timeline,
      category: this.state.category,
      description: this.state.description,
      cost: this.state.cost,
      comments: this.state.comments
    };

    axios
      .post('http://localhost:3001/millplan', data)
      .then(res => {
        this.setState({
            timeline: '',
            category:'',
            description: '',
            cost: "",
            comments: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateMillPlan!");
      })
  };

  render() {
    return (
      <div className="CreateMillPlan">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Million Dollar Plan List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Savings</h1>
              <p className="lead text-center">
                  Enter a new item in the Million Dollar Cash Flow
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Timeline'
                    name='timeline'
                    className='form-control'
                    value={this.state.timeline}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Category'
                    name='category'
                    className='form-control'
                    value={this.state.category}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Description'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='0'
                    name='cost'
                    className='form-control'
                    value={this.state.cost}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Comments'
                    name='comments'
                    className='form-control'
                    value={this.state.comments}
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

export default CreateMillPlan;