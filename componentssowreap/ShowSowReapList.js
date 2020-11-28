import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SowReapCard from './SowReapCard';

class ShowSowReapList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sowreaps: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/sowreap')
      .then(res => {
        this.setState({
            sowreaps: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowSowReapList');
      })
  };


  render() {
    const sowreaps = this.state.sowreaps;
    console.log("PrintSowReap: " + sowreaps);
    let sowreapList;

    if(!sowreaps) {
        sowreapList = "there is no sow and reap record!";
    } else {
        sowreapList = sowreaps.map((sowreap, k) =>
        <SowReapCard sowreap={sowreap} key={k} />
      );
    }

    return (
      <div className="ShowSowReapList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Sow and Reap List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-sowreap" className="btn btn-outline-blue float-right">
                + Add New Sow and Reap Item
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {sowreapList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowSowReapList;