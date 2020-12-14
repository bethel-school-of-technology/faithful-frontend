import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ShowAttitudeList from './ShowAttitudeList';
import { Link } from 'react-router-dom';
import Moment from 'moment';


function CreateAttitude() {

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
  }, [])

 

  const handleSubmit = async () => {
    let newAttitudeData = await fetch('http://localhost:3001/attitudes/add', {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date, title, thoughts, verses, possibilities })
    })
    let newAttitude = newAttitudeData.json();
  }

  return (
    <div className="CreateAttitude">
      <div className='container'>
        <div>
          <Link to="./Attitude" className="btn btn-outline-blue float-right">
            Return to Attitudes List
              </Link>
          <br />
          <br />
          <hr />
        </div>

        <form onSubmit={handleSubmit}>

          <table>

            <tr>
              <th col-2>
                <label>Date</label>
              </th>
              <td>
                <input type="date" onChange={e => setDate(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Title</label>
              </th>
              <td>
                <input type="text" onChange={e => setTitle(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Thoughts</label>
              </th>
              <td>
                <input type="text" onChange={e => setThoughts(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Verses</label>
              </th>
              <td>
                <input type="text" onChange={e => setVerses(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Possibilities</label>
              </th>
              <td>
                <input type="text" onChange={e => setPossibilities(e.target.value)} />
              </td>
            </tr>

            <tbody>
              <tr>
                <td>
                  <input type="submit" />
                </td>

              </tr>
            </tbody>

          </table>

        </form>

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
        }
        )}
      </div>
    </div>

  )
};




export default CreateAttitude;