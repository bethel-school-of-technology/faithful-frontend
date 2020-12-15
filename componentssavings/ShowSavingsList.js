import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SavingCard from './SavingsCard';




function ShowSavingList() {

  var [isEdit, setIsEdit] = useState("");
  var [savings, setSavings] = useState([]);
  var [saving, setSaving] = useState({});

  var [purpose, setPurpose] = useState("");
  var [goal, setGoal] = useState(-1);
  var [currentamount, setCurrentamount] = useState(-1);

  useEffect(() => {
    const getAllSavings = async () => {
      let savingsData = await fetch('http://localhost:3001/savings/')
      let sav = await savingsData.json();

      console.log(sav);

      setSavings(sav.data.savings);

    }
    getAllSavings();
  }, []);


  return (
    <div className="ShowSavingsList">
      <div className="container">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Savings List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/CreateSavings" className="btn btn-outline-blue float-right">
          + Add New Savings Purpose
              </Link>
        <br />
        <br />
        <hr />
      </div>
      <div>

      </div>
      {savings.map((saving, idx) => {
        return (

          <div key={idx}>
            <table className='list-container'>

              <tr>
                <td width='90px'>
                  {saving.purpose}
                </td>
                <td width='50px'>
                  {saving.goal}
                </td>
                <td width='50px'>
                  {saving.currentamount}
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




export default ShowSavingList;








