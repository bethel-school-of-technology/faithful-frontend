import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const DreamsCard = (props) => {
    const dreams = props.dreams;

    return (
        <div className="card-container">
            <div className="desc">
                <table>
                    <tr>
                        <td>
                            <Link to={`/show-dreams/${dreams._id}`}>
                                {dreams.date}
                            </Link>
                        </td>
                        <td>{dreams.dream}</td>
                        <td>{dreams.verses}</td>
                    </tr>
                </table>

            </div>
        </div>
    )
};

export default DreamsCard;