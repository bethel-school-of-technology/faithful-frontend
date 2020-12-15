import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AttitudeCard from './AttitudeCard';
import Moment from 'moment';


function ShowAttitudeList() {

  var [isEdit, setIsEdit] = useState("");
  var [attitudes, setAttitudes] = useState([]);
  var [attitude, setAttitude] = useState({});

  var [date, setDate] = useState("");
  var [title, setTitle] = useState("");
  var [thoughts, setThoughts] = useState("");
  var [verses, setVerses] = useState("");
  var [possibilities, setPossibilities] = useState("");


  useEffect(() => {
    const getAllAttitudes = async () => {
      let attitudesData = await fetch('http://localhost:3001/attitudes/')
      let att = await attitudesData.json();

      console.log(att);

      setAttitudes(att.data.attitudes);

    }
    getAllAttitudes();
  }, []);


  return (
    <div className="ShowAttitudeList">
      <div className="container">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Attitudes List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/CreateAttitude" className="btn btn-outline-blue float-right">
          + Add New Attitude Toward Money
              </Link>
        <br />
        <br />
        <hr />
        </div>
      <table className='grid-container'>
          <tr>
            <th class='col-2'>
              Date
            </th>
            <th class='col-2'>
              Title
            </th>
            <th class='col-2'>
              Thoughts
            </th>
            <th class='col-2'>
              Verses
            </th>
            <th class='col-2'>
              Possibilities
            </th>
          </tr>
        </table>
      <div>

      </div>
      {attitudes.map((attitude, idx) => {
        return (

          <div key={idx}>
           
            <table className='grid-container'>

              <tr>
              <td class='col-2'>
                {Moment(attitude.date).format("MM-DD-YYYY")}
                </td>
                <td class='col-2'>
                  {attitude.title}
                </td>
                <td class='col-2'>
                  {attitude.thoughts}
                </td>
                <td class='col-2'>
                  {attitude.verses}
                </td>
                <td class='col-2'>
                  {attitude.possibilities}
                </td>
              </tr>
            </table>

          </div>


        )
      })};
      </div>
    </div>




  )
};



export default ShowAttitudeList;