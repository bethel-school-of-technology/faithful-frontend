import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DreamCard from './DreamsCard';
import Moment from 'moment';

function ShowDreamList() {

  var [isEdit, setIsEdit] = useState("");
  var [dreams, setDreams] = useState([]);
  var [dream, setDream] = useState({});

  var [date, setDate] = useState("");
  var [title, setTitle] = useState("");
  var [vision, setVision] = useState("");
  var [verses, setVerses] = useState("");

  useEffect(() => {
    const getAllDreams = async () => {
      let dreamsData = await fetch('http://localhost:3001/dreams/')
      let drm = await dreamsData.json();

      console.log(drm);

      setDreams(drm.data.dreams);

    }
    getAllDreams();
  }, []);


  return (
    <div className="ShowDreamsList">
      <div className="container">
      <div className="col-md-12">
        <br />
        <h2 className="display-4 text-center">Dreams and Visions List</h2>
      </div>
      <div className="col-md-11">
        <Link to="/CreateDreams" className="btn btn-outline-blue float-right">
          + Add New Dream and/or Vision
              </Link>
        <br />
        <br />
        <hr />
      </div>
      <div>

      </div>
      {dreams.map((dream, idx) => {
        return (

          <div key={idx}>
            <table className='list-container'>

              <tr>
                <td width='90px'>
                {Moment(dream.date).format("MM-DD-YYYY")}
                </td>
                <td width='50px'>
                  {dream.title}
                </td>
                <td width='50px'>
                  {dream.vision}
                </td>
                <td width='50px'>
                  {dream.verses}
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




export default ShowDreamList;








