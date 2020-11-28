import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MillPlanCard from './MillPlanCard';

function App() {}

class ShowMillPlanList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        millplans: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/millplan')
      .then(res => {
        this.setState({
            millplans: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowMillPlanList');
      })
  };


  render() {
    const millplans = this.state.millplans;
    console.log("PrintMillPlan: " + millplans);
    let millplanList;
    

    if(!millplans) {
        millplanList = "there is no dream and vision record!";
    } else {
        millplanList = millplans.map((millplan, k) =>
        <MillPlanCard millplan={millplan} key={k} />
      );
    }
   


    return (
      <div className="ShowMillPlanList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Million Dollar Plan List</h2>
            </div>
            <div>
            
            </div>
            <div className="col-md-11">
              <Link to="/create-millplan" className="btn btn-outline-blue float-right">
                + Add New Million Dollar Plan Cash Flow Item
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {millplanList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowMillPlanList;