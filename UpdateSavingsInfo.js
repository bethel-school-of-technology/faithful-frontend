import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateSavingsInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purpose: '',
            goal: '',
            currentamount: ''
        };
    }

    componentDidMount() {
        // console.log("Print id: " + this.props.match.params.id);
        axios
            .get('http://localhost:3001/savings/' + this.props.match.params.id)
            .then(res => {
                // this.setState({...this.state, book: res.data})
                this.setState({
                    purpose: res.data.purpose,
                    goal: res.data.goal,
                    currentamount: res.data.currentamount
                })
            })
            .catch(err => {
                console.log("Error from UpdateSavingsInfo");
            })
    };

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
            .put('http://localhost:3031/savings/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-savings/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdateSavingsInfo!");
            })
    };


    render() {
        return (
            <div className="UpdateSavingsInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Savings List
              </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Edit Savings Item</h1>
                            <p className="lead text-center">
                                Update Savings' Info
              </p>
                        </div>
                    </div>

                    <div className="col-md-8 m-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <label htmlFor="purpose">Purpose</label>
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
                                <label htmlFor="goal">Goal</label>
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
                                <label htmlFor="currentamount">Current Amount</label>
                                <input
                                    type='number'
                                    placeholder='0'
                                    name='currentamount'
                                    className='form-control'
                                    value={this.state.currentamount}
                                    onChange={this.onChange}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Savings</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateSavingsInfo