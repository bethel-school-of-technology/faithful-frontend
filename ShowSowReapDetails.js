import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showSowReapDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        sowreap: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/sowreap/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showSowReapDetails-API-response: " + res.data);
        this.setState({
            sowreap: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowSowReapDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:3001/sowreap'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowSowReapDetails_deleteClick");
      })
  };


  render() {

    const sowreap = this.state.sowreap;
    let SowReapItem = <div>
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
            <td>{ sowreap.date }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Item for which Sowing </td>
            <td>{ sowreap.dreamitem }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Amount </td>
            <td>${ sowreap.amount }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Agreement </td>
            <td>{ sowreap.agreement }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Verses </td>
            <td>{ sowreap.verses }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Date of Manifestation </td>
            <td>{ sowreap.manifestdate }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Comments </td>
            <td>{ sowreap.comments }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowSowReapDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Sowing and Reaping List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sowing and Reaping Record</h1>
              <p className="lead text-center">
                  View Sowing and Reaping Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { SowReapItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this.sowreap._id)}>Delete Sowing and Reaping Item</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-sowreap/${sowreap._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Sowing and Reaping Item
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Sowing and Reaping</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Sowing and Reaping Item</button> */}

        </div>
      </div>
    );
  }
}

export default showSowReapDetails;