import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ShowBillsPaidList from './ShowBillsPaidList';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function CreateBillsPaid() {

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
    let newBillsPaidData = await fetch('http://localhost:3001/billspaids/add', {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, week1, week2, week3, week4 })
    })
    let newBillsPaid = newBillsPaidData.json();
  }

  return (
    <div className="CreateBillsPaid">
      <div className='container'>
        <div>
          <Link to="./BillsPaid" className="btn btn-outline-blue float-right">
            Return to Bills Paid List
              </Link>
          <br />
          <br />
          <hr />
        </div>

        <form onSubmit={handleSubmit}>

          <table>

            <tr>
              <th col-2>
                <label>Name</label>
              </th>
              <td>
                <input type="text" onChange={e => setName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Week 1</label>
              </th>
              <td>
                <input type="number" onChange={e => setWeek1(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Week 2</label>
              </th>
              <td>
                <input type="number" onChange={e => setWeek2(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Week 3</label>
              </th>
              <td>
                <input type="number" onChange={e => setWeek3(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Week 4</label>
              </th>
              <td>
                <input type="number" onChange={e => setWeek4(e.target.value)} />
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
        
        {billspaids.map((billspaid, idx) => {
          return (
            <div key={idx}>
              <table className='grid-container'>
                <tr>
                <td class='col-2'>
                    {billspaid.name}
                  </td>
                  <td class='col-2'>
                    ${billspaid.week1}
                  </td>
                  <td class='col-2'>
                    ${billspaid.week2}
                  </td>
                  <td class='col-2'>
                    ${billspaid.week3}
                  </td>
                  <td class='col-2'>
                    ${billspaid.week4}
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

export default CreateBillsPaid;
