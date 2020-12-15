import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../App.css';
import axios from 'axios';
import ShowBillsPaidList from './ShowBillsPaidList';
import UpdateBillsPaidInfo from './UpdateBillsPaidInfo';

function ShowBillsPaidDetails() {

  var [isEdit, setIsEdit] = useState("");
  var [billspaids, setBillsPaids] = useState([]);
  var [billspaid, setBillsPaid] = useState({});


  var [name, setName] = useState("");
  var [week1, setWeek1] = useState(-1);
  var [week2, setWeek2] = useState(-1);
  var [week3, setWeek3] = useState(-1);
  var [week4, setWeek4] = useState(-1);



  useEffect(() => {
    const getAllBillsPaids = async () => {

      let billspaidsData = await fetch('http://localhost:3001/billspaids/')
      let bsps = await billspaidsData.json();


      console.log(bsps);

      setBillsPaids(bsps.data.billspaids);

    }
    getAllBillsPaids();

  }, [])

  const handleSubmit = async () => {
    let newBillsPaidData = await fetch('http://localhost:3001/billspaids/update/:id', {
      method: "Put",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, week1, week2, week3, week4 })
    })
    let newBillsPaid = newBillsPaidData.json();
  }
  /*
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
*/


  return (
    <div className="ShowBillsPaidDetails">
      <div className='container'>
        <div>
          <Link to="./BillsPaid" className="btn btn-outline-blue float-right">
            Return to Bills Paid List
              </Link>
          <br />
          <br />
          <hr />
        </div>
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Edit Bills Paid Info</h1>
          <p className="lead text-center">
            Update Bills Paid's Info
              </p>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor="week1">Week 1</label>
              <input
                type='number'
                placeholder='Week1'
                name='week1'
                className='form-control'
                value={this.state.week1}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="week2">Week 2</label>
              <input
                type='number'
                placeholder='Week2'
                name='week2'
                className='form-control'
                value={this.state.week2}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="week3">Week 3</label>
              <input
                type='number'
                placeholder='Week3'
                name='week3'
                className='form-control'
                value={this.state.week3}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor="week4">Week 4</label>
              <input
                type='number'
                placeholder='Week4'
                name='week4'
                className='form-control'
                value={this.state.week4}
                onChange={this.onChange}
              />
            </div>
        
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Attitude</button>
            </form>
          </div>





          {billspaids.map((billspaid, idx) => {
            return (
              <div key={idx}>
                <table>
                  <tr>
                    <td cols2>
                      {billspaid.name}
                    </td>
                    <td>
                      {billspaid.week1}
                    </td>
                    <td>
                      {billspaid.week2}
                    </td>
                    <td>
                      ${billspaid.week3}
                    </td>
                    <td>
                      {billspaid.week4}
                    </td>
                  </tr>
                </table>

              </div>
            )
          }
          )}
          </div>
        </div>
      
  )
};

export default ShowBillsPaidDetails;
