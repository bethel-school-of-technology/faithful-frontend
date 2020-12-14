import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowDreamsDetails () {
class showDreamsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dreams: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/dreams/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showDreamsDetails-API-response: " + res.data);
        this.setState({
            dreams: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowDreamsDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:3001/dreams'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowDreamsDetails_deleteClick");
      })
  };


  render() {

    const dreams = this.state.dreams;
    let DreamsItem = <div>
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
            <td>{ dreams.date }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Dreams and Visions </td>
            <td>{ dreams.dreams }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Verses </td>
            <td>{ dreams.verses }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowDebtPayoffDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Dreams and Visions List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Dreams and Vision's Record</h1>
              <p className="lead text-center">
                  View Dreams and Visions Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { DreamsItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this.dreams._id)}>Delete Dreams and Visions</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-dreams/${dreams._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Dreams and Visions
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Dreams and Visions</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Dreams and Visions</button> */}

        </div>
      </div>
    );
  }
}
}
export default ShowDreamsDetails;