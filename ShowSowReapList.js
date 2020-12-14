import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SowReapCard from './SowReapCard';
import Moment from 'moment';

function ShowSowReapList() {

  var [isEdit, setIsEdit] = useState("");
  var [sowreaps, setSowReaps] = useState([]);
  var [sowreap, setSowReap] = useState({});

  var [date, setDate] = useState("");
  var [believingfor, setBelievingfor] = useState("");
  var [scriptures, setScriptures] = useState("");
  var [dailydeclaration, setDailydeclaration] = useState("");
  var [planofaction, setPlanofaction] = useState("");
  var [answerarrived, setAnswerarrived] = useState("");


  useEffect(() => {
    const getAllSowReaps = async () => {
      let sowreapsData = await fetch('http://localhost:3001/sowreaps/')
      let swrp = await sowreapsData.json();

      console.log(swrp);

      setSowReaps(swrp.data.sowreaps);

    }
    getAllSowReaps();
  }, []);


  return (
    <div className="ShowSowReapList">
      <div className="container">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Sow and Reap List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/CreateSowReap" className="btn btn-outline-blue float-right">
          + Add New Sowing and Reapng Item
              </Link>
        <br />
        <br />
        <hr />
      </div>
      <div>

      </div>
      {sowreaps.map((sowreap, idx) => {
        return (

          <div key={idx}>
            <table className='list-container'>

              <tr>
                <td width='100px'>
                {Moment(sowreap.date).format("MM-DD-YYYY")}
                </td>
                <td width='50px'>
                  {sowreap.believingfor}
                </td>
                <td width='90px'>
                  {sowreap.scriptures}
                </td>
                <td width='90px'>
                  {sowreap.dailydeclaration}
                </td>
                <td width='90px'>
                  {sowreap.planofaction}
                </td>
                <td width='100px'>
                {Moment(sowreap.answerarrived).format("MM-DD-YYYY")}
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




export default ShowSowReapList;








