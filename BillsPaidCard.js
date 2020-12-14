import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BillsPaidCard = (props) => {
    const billspaid = props.billspaid;

    return (
        <div className="card-container">
            <div className="desc">
                <table>
                    <tr>
                        <td>
                            <Link to={`/show-billspaid/${billspaid._id}`}>
                                {billspaid.name}
                            </Link>
                        </td>
                        <td>Week 1: {billspaid.week1}</td>
                        <td>Week 2: {billspaid.week2}</td>
                        <td>Week 3: {billspaid.week3}</td>
                        <td>Week 4: {billspaid.week4}</td>
                    </tr>
                </table>

            </div>
        </div>
    )
};

/*
const Total = props => {
  const total = props.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0
  );
  return <p>Totalzzz: {total}</p>;
};
*/
export default BillsPaidCard;