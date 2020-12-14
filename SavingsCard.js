import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SavingsCard = (props) => {
    const savings = props.savings;

    return (
        <div className="card-container">
            <div className="desc">
                <table>
                    <tr>
                        <td>
                            <Link to={`/show-savings/${savings._id}`}>
                                {savings.purpose}
                            </Link>
                        </td>
                        <td>${savings.goal}</td>
                        <td>${savings.currentamount}</td>
                    </tr>
                </table>

            </div>
        </div>
    )
};

export default SavingsCard;