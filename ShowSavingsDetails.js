import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showSavingsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        savings: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/savings/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showSavingsDetails-API-response: " + res.data);
        this.setState({
            savings: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowSavingsDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:3001/savings'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowSavingsDetails_deleteClick");
      })
  };


  render() {

    const savings = this.state.savings;
    let SavingsItem = <div>
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
            <td>Purpose</td>
            <td>{ savings.purpose }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Goal </td>
            <td>${ savings.goal }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Current Amount </td>
            <td>${ savings.currentamount }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowSavingsDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Savings List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Savings' Record</h1>
              <p className="lead text-center">
                  View Savings Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { SavingsItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this.savings._id)}>Delete Savings Item</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-savings/${savings._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Savings Item
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Savings</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Savings Item</button> */}

        </div>
      </div>
    );
  }
}

export default showSavingsDetails;