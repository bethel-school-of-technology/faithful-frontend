import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BillsPaidCard from './BillsPaidCard';




function ShowBillsPaidList() {

  var [isEdit, setIsEdit] = useState("");
  var [billspaids, setBillsPaids] = useState([]);
  var [billspaid, setBillsPaid] = useState({});

  var [name, setName] = useState("");
  var [week1, setWeek1] = useState(-1);
  var [week2, setWeek2] = useState(-1);
  var [week3, setWeek3] = useState(-1);
  var [week4, setWeek4] = useState(-1);
  var [week1total, setWeek1Total] = useState(-1);
  var [week2total, setWeek2Total] = useState(-1);
  var [week3total, setWeek3Total] = useState(-1);
  var [week4total, setWeek4Total] = useState(-1);
  var [monthtotal, setMonthTotal] = useState(-1);

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
      <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Bills Paid List</h2>
            </div>
            <div className="col-md-11">
              <Link to="/create-dream" className="btn btn-outline-blue float-right">
                + Add New Bill to Pay
              </Link>
              <br />
              <br />
              <hr />
            </div>
      {billspaids.map((billspaid, idx) => {
        return (
         
          <div key={idx}>
             <table className = 'list-container'>
           
              <tr>
                <td width = '90px'> 
                  {billspaid.name}
                </td>
                <td width = '50px'> 
                  {billspaid.week1}
                </td>
                <td width = '50px'>
                  {billspaid.week2}
                </td>
                <td width= '50px'>
                  {billspaid.week3}
                </td>
                <td width= '50px'>
                  {billspaid.week4}
                </td>
              </tr>
              </table>
             
          </div>
          
         
        )
      })};
    </div>




  )
}




export default ShowBillsPaidList;








