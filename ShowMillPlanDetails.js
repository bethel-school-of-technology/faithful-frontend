import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showMillPlanDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        millplan: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/millplans/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showMillPlanDetails-API-response: " + res.data);
        this.setState({
            millplan: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowMillPlanDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:3001/millplans'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowMillPlanDetails_deleteClick");
      })
  };


  render() {

    const millplan = this.state.millplan;
    let MillPlanItem = <div>
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
            <td>timeline</td>
            <td>{ millplan.timeline }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Category </td>
            <td>{ millplan.category }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td> Description</td>
            <td>{ millplan.description }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td> Cost</td>
            <td>${ millplan.cost }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td> Comments</td>
            <td>{ millplan.comments }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowMillPlanDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Million Dollar Plan List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Million Dollar Plan's Record</h1>
              <p className="lead text-center">
                  View Million Dollar Plan Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { MillPlanItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this.millplan._id)}>Delete Million Dollar Plan Item</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-millplan/${millplan._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Million Dollar Plan Item
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Million Dollar Plan</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Million Dollar Plan Item</button> */}

        </div>
      </div>
    );
  }
}

export default showMillPlanDetails;