import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MillPlanCard = (props) => {
    const millplans = props.millplans;

    return (
        <div className="card-container">
            <div className="desc">
                <table>
                    <tr>
                        <td>
                            <Link to={`/show-millplan/${millplans._id}`}>
                                {millplans.timeline}
                            </Link>
                        </td>
                        <td>{millplans.category}</td>
                        <td>{millplans.description}</td>
                        <td>{millplans.cost}</td>
                        <td>{millplans.comments}</td>
                    </tr>
                </table>

            </div>
        </div>
    )
};

export default MillPlanCard;