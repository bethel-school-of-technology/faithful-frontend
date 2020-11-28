import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateSowReapInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            dreamitem: '',
            amount: '',
            agreement: '',
            verses: '',
            manifestdate: '',
            comments: ''
        };
    }

    componentDidMount() {
        // console.log("Print id: " + this.props.match.params.id);
        axios
            .get('http://localhost:3001/sowreap/' + this.props.match.params.id)
            .then(res => {
                // this.setState({...this.state, book: res.data})
                this.setState({
                    date: res.data.date,
                    dreamitem: res.data.dreamitem,
                    amount: res.data.amount,
                    agreement: res.data.agreement,
                    verses: res.data.verses,
                    manifestdate: res.data.manifestdate,
                    comments: res.data.comments
                })
            })
            .catch(err => {
                console.log("Error from UpdateSowReapInfo");
            })
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            date: this.state.date,
            dreamitem: this.state.dreamitem,
            amount: this.state.amount,
            agreement: this.state.agreement,
            verses: this.state.verses,
            manifestdate: this.state.manifestdate,
            comments: this.state.comments,
        };

        axios
            .put('http://localhost:3031/sowreap/' + this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-sowreap/' + this.props.match.params.id);
            })
            .catch(err => {
                console.log("Error in UpdateSowReapInfo!");
            })
    };


    render() {
        return (
            <div className="UpdateSowReapInfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Sowing and Reaping List
              </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Edit Sowing and Reaping Item</h1>
                            <p className="lead text-center">
                                Update Sowing and Reaping's Info
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
                                <label htmlFor="dreamitem">For What Sowing</label>
                                <input
                                    type='text'
                                    placeholder='For What Sowing'
                                    name='dreamitem'
                                    className='form-control'
                                    value={this.state.dreamitem}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="amount">Amount</label>
                                <input
                                    type='number'
                                    placeholder='0'
                                    name='amount'
                                    className='form-control'
                                    value={this.state.amount}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor="agreement">Agreement</label>
                                <input
                                    type='text'
                                    placeholder='Agreement'
                                    name='agreement'
                                    className='form-control'
                                    value={this.state.agreement}
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
                                <label htmlFor="manifestdate">Manifestion Date</label>
                                <input
                                    type='date'
                                    placeholder='Manifestion Date'
                                    name='manifestdate'
                                    className='form-control'
                                    value={this.state.manifestdate}
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

                            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Sowing and Reaping</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateSowReapInfo