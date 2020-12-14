import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowDebtPayoffDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        debtpayoff: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:3001/debtpayoff/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showDebtPayoffDetails-API-response: " + res.data);
        this.setState({
            debtpayoff: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowDebtPayoffDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:3001/debtpayoff'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowDebtPayoffDetails_deleteClick");
      })
  };


  render() {

    const debtpayoff = this.state.debtpayoff;
    let DebtPayoffItem = <div>
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
            <td>Item</td>
            <td>{ debtpayoff.item }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Amount: </td>
            <td>${ debtpayoff.amount }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Minimum Payment: </td>
            <td>${ debtpayoff.minpayment }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Snowball Payment: </td>
            <td>${ debtpayoff.snowballpayment }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Number of Minimum Payments Left</td>
            <td>{ debtpayoff.numberleft }</td>
          </tr>
          <tr>
          <th scope="row">6</th>
            <td>Number of Snowball Payments Left</td>
            <td>{ debtpayoff.snownumberleft }</td>
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
                  Show Debt Payoff List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Debt Payoff's Record</h1>
              <p className="lead text-center">
                  View Debt Payoff Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { DebtPayoffItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this.debtpayoff._id)}>Delete Debt Payoff</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-debtpayoff/${debtpayoff._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Debt Payoff
              </Link>
              <br />
            </div>

          </div>
            
        </div>
      </div>
    );
  }
}

export default ShowDebtPayoffDetails;