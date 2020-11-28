import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showBillsPaidDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        billspaid: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/billspaid/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBillsPaidDetails-API-response: " + res.data);
        this.setState({
            billspaid: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowBillsPaidDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:3001/billspaid'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBillsPaidDetails_deleteClick");
      })
  };


  render() {

    const billspaid = this.state.billspaid;
    let BillsPaidItem = <div>
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
            <td>Name</td>
            <td>{ billspaid.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Week 1</td>
            <td>{ billspaid.Week1 }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Week 2</td>
            <td>{ billspaid.week2 }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Week 3</td>
            <td>{ billspaid.week3 }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Week 4</td>
            <td>{ billspaid.week4 }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowBillsPaidDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Bills Paid List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Bills Paid's Record</h1>
              <p className="lead text-center">
                  View Bills Paid Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { BillsPaidItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this.billspaid._id)}>Delete Bills Paid</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-billspaid/${billspaid._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Bills Paid
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Bills Paid</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Bills Paid</button> */}

        </div>
      </div>
    );
  }
}

export default showBillsPaidDetails;