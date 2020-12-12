import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ShowBillsPaidList from './ShowBillsPaidList';
import { Link } from 'react-router-dom';

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
              <label>Week1</label>
            </th>
            <td>
                <input type="number" onChange={e => setWeek1(e.target.value)} />
              </td>
              </tr>
              <tr>
            <th col-2>
              <label>Week2</label>
            </th>
            <td>
                <input type="number" onChange={e => setWeek2(e.target.value)} />
              </td>
            </tr>
              <tr>
            <th col-2>
              <label>Week3</label>
            </th>
            <td>
                <input type="number" onChange={e => setWeek3(e.target.value)} />
              </td>
            </tr>
              <tr>
            <th col-2>
              <label>Week4</label>
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

      {billspaids.map((billspaid, idx) => {
        return (
          <div key={idx}>
            <table>
              <tr>
                <td cols2>
                  {billspaid.name}
                </td>
                <td>
                  {billspaid.week1}
                </td>
                <td>
                  {billspaid.week2}
                </td>
                <td>
                  ${billspaid.week3}
                </td>
                <td>
                  {billspaid.week4}
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
