import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const SowReapCard = (props) => {
    const sowreap = props.sowreap;

    return (
        <div className="card-container">
            <div className="desc">
                <table>
                    <tr>
                        <td>
                            <Link to={`/show-sowreap/${sowreap._id}`}>
                                {sowreap.date}
                            </Link>
                        </td>
                        <td>{sowreap.dreamitem}</td>
                        <td>${sowreap.amount}</td>
                        <td>{sowreap.agreement}</td>
                        <td>{sowreap.verses}</td>
                        <td>{sowreap.manifestdate}</td>
                        <td>{sowreap.comments}</td>
                    </tr>

                </table>

            </div>
        </div>
    )
};

export default SowReapCard;