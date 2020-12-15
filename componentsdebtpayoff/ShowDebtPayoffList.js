import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DebtPayoffCard from './DebtPayoffCard';




function ShowDebtPayoffList() {

  var [isEdit, setIsEdit] = useState("");
  var [debtpayoffs, setDebtPayoffs] = useState([]);
  var [debtpayoff, setDebtPayoff] = useState({});

  var [item, setItem] = useState("");
  var [amount, setAmount] = useState(-1);
  var [minpayment, setMinpayment] = useState(-1);
  var [snowballpayment, setSnowballpayment] = useState(-1);
  var [numberleft, setNumberleft] = useState(-1);
  var [snownumberleft, setSnownumberleft] = useState(-1);


  useEffect(() => {
    const getAllDebtPayoffs = async () => {
      let debtpayoffsData = await fetch('http://localhost:3001/debtpayoffs/')
      let dbtpyff = await debtpayoffsData.json();

      console.log(dbtpyff);

      setDebtPayoffs(dbtpyff.data.debtpayoffs);

    }
    getAllDebtPayoffs();
  }, []);


  return (
    <div className="ShowDebtPayoffList">
      <div className="container">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Debt Payoff List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/CreateDebtPayoff" className="btn btn-outline-blue float-right">
          + Add New Debt to Payoff
              </Link>
        <br />
        <br />
        <hr />
      </div>
      <div>

      </div>
      {debtpayoffs.map((debtpayoff, idx) => {
        return (

          <div key={idx}>
            <table className='list-container'>

              <tr>
                <td width='90px'>
                  {debtpayoff.item}
                </td>
                <td width='50px'>
                  {debtpayoff.amount}
                </td>
                <td width='50px'>
                  {debtpayoff.minpayment}
                </td>
                <td width='50px'>
                  {debtpayoff.snowballpayment}
                </td>
                <td width='50px'>
                  {debtpayoff.numberleft}
                </td>
                <td width='50px'>
                  {debtpayoff.snownumberleft}
                </td>
              </tr>
            </table>

          </div>


        )
      })};
      </div>
    </div>




  )
}




export default ShowDebtPayoffList;








