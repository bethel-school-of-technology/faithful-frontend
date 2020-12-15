import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowAttitudeDetails () {
class showAttitudeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attitude: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/attitudes/' + this.props.match.params.id)
      .then(res => {
        // console.log("Print-showAttitudeDetails-API-response: " + res.data);
        this.setState({
          attitude: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowAttitudeDetails");
      })
  };

  onDeleteClick(id) {
    axios
      .delete('http://localhost:3001/attitude' + id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowAttitudeDetails_deleteClick");
      })
  };


  render() {

    const attitude = this.state.attitude;
    let AttitudeItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Date</td>
            <td>{attitude.date}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Thoughts</td>
            <td>{attitude.thoughts}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Verses</td>
            <td>{attitude.verses}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Possibilities</td>
            <td>{attitude.possibilities}</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowAttitudeDetails">

        <div className="row">
          <div className="col-md-10 m-auto">
            <br /> <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Attitude List
              </Link>
          </div>
          <br />
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Attitude's Record</h1>
            <p className="lead text-center">
              View Attitude Info
              </p>
            <hr /> <br />
          </div>
        </div>
        <div>
          {AttitudeItem}
        </div>

        <div className="row">
          <div className="col-md-6">
            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this.attitude._id)}>Delete Attitude</button><br />
          </div>

          <div className="col-md-6">
            <Link to={`/edit-attitude/${attitude._id}`} className="btn btn-outline-info btn-lg btn-block">
              Edit Attitude
              </Link>
            <br />
          </div>

        </div>
        
      </div>

    );
  }
}
};

export default ShowAttitudeDetails;