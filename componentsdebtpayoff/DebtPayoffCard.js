import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const DebtPayoffCard = (props) => {
    const  debtpayoff  = props.debtpayoff ;

    return(
        <div className="card-container">
            <div className="desc">
                <h3>
                    <Link to={`/show-debtpayoff/${debtpayoff._id}`}>
                        { debtpayoff.item }
                    </Link>
                </h3>
                <h3>{debtpayoff.amount}</h3>
                <h3>{debtpayoff.minpayment}</h3>
                <h3>{debtpayoff.snowballpayment}</h3>
                <h3>{debtpayoff.numberleft}</h3>
                <h3>{debtpayoff.snownumberleft}</h3>
            </div>
        </div>
    )
};

export default DebtPayoffCard;