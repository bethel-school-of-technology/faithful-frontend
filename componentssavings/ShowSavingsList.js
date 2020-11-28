import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SavingsCard from './SavingsCard';

class ShowSavingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        savings: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/savings')
      .then(res => {
        this.setState({
            savings: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowSavingsList');
      })
  };


  render() {
    const savings = this.state.savings;
    console.log("PrintSavings: " + savings);
    let savingList;

    if(!savings) {
        savingList = "there is no savings record!";
    } else {
        savingList = savings.map((saving, k) =>
        <SavingsCard saving={saving} key={k} />
      );
    }

    return (
      <div className="ShowSavingsList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Savings List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-saving" className="btn btn-outline-blue float-right">
                + Add New Savings Item
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {savingList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowSavingsList;