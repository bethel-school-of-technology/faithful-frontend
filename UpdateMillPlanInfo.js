import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateMillPlanInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: '',
      category: '',
      description: '',
      cost: '',
      comments: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/millplan/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          timeline: res.data.timeline,
          category: res.data.category,
          description: res.data.description,
          cost: res.data.cost,
          comments: res.data.comments
        })
      })
      .catch(err => {
        console.log("Error from UpdateMillPlanInfo");
      })
  };

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
      comments: this.state.comments,
    };

    axios
      .put('http://localhost:3031/millplan/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-millplan/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateMillPlanInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateMillPlanInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Million Dollar Plan List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Million Dollar Plan Item</h1>
              <p className="lead text-center">
                  Update Million Dollar Plan's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="timeline">Timeline</label>
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
            <label htmlFor="category">Category</label>
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
            <label htmlFor="description">Description</label>
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
            <label htmlFor="cost">Cost</label>
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
            <label htmlFor="comments">Comments</label>
              <input
                type='text'
                placeholder='Comments'
                name='comments'
                className='form-control'
                value={this.state.comments}
                onChange={this.onChange}
              />
            </div>


            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Million Dollar Plan</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateMillPlanInfo