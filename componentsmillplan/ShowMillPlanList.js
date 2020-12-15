/*import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MillPlanCard from './MillPlanCard';


function ShowMillPlanList() {

  var [isEdit, setIsEdit] = useState("");
  var [millplans, setMillPlans] = useState([]);
  var [millplan, setMillPlan] = useState({});

  var [timeline, setTimeline] = useState("");
  var [category, setCategory] = useState("");
  var [description, setDescription] = useState("");
  var [cost, setCost] = useState(-1);
  var [comments, setComments] = useState("");

  useEffect(() => {
    const getAllMillPlans = async () => {
      let millplansData = await fetch('http://localhost:3001/millplans/')
      let mllpln = await millplansData.json();

      console.log(mllpln);

      setMillPlans(mllpln.data.millplans);

    }
    getAllMillPlans();
  }, []);


  return (
    <div className="ShowMillPlanList">
    <div className="container">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Million Dollar Plan List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/CreateMillPlan" className="btn btn-outline-blue float-right">
          + Add New Item to the Million Dollar Plan
              </Link>
        <br />
        <br />
        <hr />
      </div>
      <div>

      </div>
      {millplans.map((millplan, idx) => {
        return (

          <div key={idx}>
            <table className='list-container'>

              <tr>
                <td width='90px'>
                  {millplan.timeline}
                </td>
                <td width='90px'>
                  {millplan.category}
                </td>
                <td width='50px'>
                  {millplan.description}
                </td>
                <td width='50px'>
                  {millplan.cost}
                </td>
                <td width='50px'>
                  {millplan.comments}
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




export default ShowMillPLanList;


*/





