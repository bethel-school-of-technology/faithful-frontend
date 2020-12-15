import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ShowDebtPayoffList from './ShowDebtPayoffList';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function CreateDebtPayoff() {

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
      let dtpff = await debtpayoffsData.json();


      console.log(dtpff);

      setDebtPayoffs(dtpff.data.debtpayoffs);

    }
    getAllDebtPayoffs();

  }, [])

  const handleSubmit = async () => {
    let newDebtPayoffData = await fetch('http://localhost:3001/debtpayoffs/add', {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item, amount, minpayment, snowballpayment, numberleft, snownumberleft })
    })
    let newDebtPayoff = newDebtPayoffData.json();
  }

  return (
    <div className="CreateDebtPayoff">
      <div className='container'>
        <div>
          <Link to="./DebtPayoff" className="btn btn-outline-blue float-right">
            Return to Debt Payoff List
              </Link>
          <br />
          <br />
          <hr />
        </div>

        <form onSubmit={handleSubmit}>

          <table>

            <tr>
              <th col-2>
                <label>Item</label>
              </th>
              <td>
                <input type="text" onChange={e => setItem(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Amount</label>
              </th>
              <td>
                <input type="number" onChange={e => setAmount(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Minimum Payment</label>
              </th>
              <td>
                <input type="number" onChange={e => setMinpayment(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Snowball Payment</label>
              </th>
              <td>
                <input type="number" onChange={e => setSnowballpayment(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Number Left</label>
              </th>
              <td>
                <input type="number" onChange={e => setNumberleft(e.target.value)} />
              </td>
            </tr>
            <tr>
              <th col-2>
                <label>Snowball Number Left</label>
              </th>
              <td>
                <input type="number" onChange={e => setSnownumberleft(e.target.value)} />
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
              item
            </th>
            <th class='col-2'>
              Amount
            </th>
            <th class='col-2'>
              Minimum Payment
            </th>
            <th class='col-2'>
              Snowball Payment
            </th>
            <th class='col-2'>
              Number Left
            </th>
            <th class='col-2'>
              Snowball Number Left
            </th>
          </tr>
        </table>
        
        {debtpayoffs.map((debtpayoff, idx) => {
          return (
            <div key={idx}>
              <table className='grid-container'>
                <tr>
                <td class='col-2'>
                    {debtpayoff.item}
                  </td>
                  <td class='col-2'>
                    ${debtpayoff.amount}
                  </td>
                  <td class='col-2'>
                    ${debtpayoff.minpayment}
                  </td>
                  <td class='col-2'>
                    ${debtpayoff.snowballpayment}
                  </td>
                  <td class='col-2'>
                    ${debtpayoff.numberleft}
                  </td>
                  <td class='col-2'>
                    ${debtpayoff.snownumberleft}
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

export default CreateDebtPayoff;
