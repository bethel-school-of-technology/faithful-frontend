import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AttitudeCard from './AttitudeCard';

class ShowAttitudeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attitudes: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/attitudes')
      .then(res => {
        this.setState({
            attitudes: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowAttitudeList');
      })
  };


  render() {
    const attitudes = this.state.attitudes;
    console.log("PrintAttitude: " + attitudes);
    let attitudeList;

    if(!attitudes) {
        attitudeList = "there is no attitude record!";
    } else {
        attitudeList = attitudes.map((attitude, k) =>
        <AttitudeCard attitude={attitude} key={k} />
      );
    }

    return (
      <div className="ShowAttitudeList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Attitudes List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-attitude" className="btn btn-outline-blue float-right">
                + Add New Attitude
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {attitudeList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowAttitudeList;