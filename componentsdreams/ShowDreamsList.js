import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DreamsCard from './DreamsCard';

class ShowDreamsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dreams: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/dreams')
      .then(res => {
        this.setState({
            dreams: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowDreamsList');
      })
  };


  render() {
    const dreams = this.state.dreams;
    console.log("PrintDreams: " + dreams);
    let dreamList;

    if(!dreams) {
        dreamList = "there is no dream and vision record!";
    } else {
        dreamList = dreams.map((dream, k) =>
        <DreamsCard dream={dream} key={k} />
      );
    }

    return (
      <div className="ShowDreamsList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Dreams and Visons List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-dream" className="btn btn-outline-blue float-right">
                + Add New Dream or Vision
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {dreamList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDreamsList;