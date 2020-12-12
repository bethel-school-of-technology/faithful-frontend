import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BillsPaidCard from './BillsPaidCard';
import CreateBillsPaid from './CreateBillsPaid';


function ShowBillsPaidList() {

  var [isEdit, setIsEdit] = useState("");
  var [billspaids, setBillsPaids] = useState([]);
  var [billspaid, setBillsPaid] = useState({});
  var [weektotals, setWeekTotals] = useState([]);

  var [name, setName] = useState("");
  var [week1, setWeek1] = useState(-1);
  var [week2, setWeek2] = useState(-1);
  var [week3, setWeek3] = useState(-1);
  var [week4, setWeek4] = useState(-1);
  //var [week1total, setWeek1Total] = useState(-1);
  //var [week2total, setWeek2Total] = useState(-1);
  //var [week3total, setWeek3Total] = useState(-1);
  //var [week4total, setWeek4Total] = useState(-1);
  //var [monthtotal, setMonthTotal] = useState(-1);
  //var [$sum, set$Sum] = useState(-1);

  let week1total=0
  let week2total=0
  let week3total=0
  let week4total=0
  let monthtotal=0

  useEffect(() => {
    const getAllBillsPaids = async () => {
      let billspaidsData = await fetch('http://localhost:3001/billspaids/')
      let bsps = await billspaidsData.json();
      

      console.log(bsps);

      setBillsPaids(bsps.data.billspaids);

    }
    getAllBillsPaids();
    
}, []);


  return (
    <div className="ShowBillsPaidList">
      <div className="container">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Bills Paid List</h2>
      </div>
      <div className="col-md-11">
        <Link to="./CreateBillsPaid" className="btn btn-outline-blue float-right">
          + Add New Bill to Pay
              </Link>
        <br />
        <br />
        <hr />
      </div>
      <table className='grid-container'>
          <tr>
            <th class='col-2'>
              Bill
            </th>
            <th class='col-2'>
              Week 1
            </th>
            <th class='col-2'>
              Week 2
            </th>
            <th class='col-2'>
              Week 3
            </th>
            <th class='col-2'>
              Week 4
            </th>
          </tr>
        </table>
      <div>

      </div>
      {billspaids.map((billspaid, idx) => {

        return (

          <div key={idx}>
            <table className='grid-container'>
           <tr>
                <td class='col-2'>
                  {billspaid.name}   
                </td>
                <td class='col-2'>
                  {billspaid.week1} 
                </td>
                <td class='col-2'>
                  {billspaid.week2}
                </td>
                <td class='col-2'>
                  {billspaid.week3}
                </td>
                <td class='col-2'>
                  {billspaid.week4}
                </td>
                </tr>
            </table>
            <table>
          <tr>
            <th width='120px'>
              {monthtotal}
            </th>
            <th>
              {week1total}
            </th>
            <th>
              {week2total}
            </th>
            <th>
              {week3total}
            </th>
            <th>
              {week4total}
            </th>
          </tr>
        </table>
          </div>
        )
      })};
      </div>
    </div>
  )  
}

export default ShowBillsPaidList;








