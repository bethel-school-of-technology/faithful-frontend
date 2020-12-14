import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const AttitudeCard = (props) => {
    const attitude = props.attitude;

    return (
        <div className="card-container">
            <div className="desc">
                <table>
                    <tr>
                        <td>
                            <Link to={`/show-attitude/${attitude._id}`}>
                                {attitude.date}
                            </Link>
                        </td>
                        <td>{attitude.thoughts}</td>
                        <td>{attitude.verses}</td>
                        <td>{attitude.possibilities}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default AttitudeCard;