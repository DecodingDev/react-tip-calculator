import React from 'react';

import './per-person-total.css';
const PerPersonTotal = ({total}) => {
    if(total === 0) {
        return (
            <div></div>
        )
    }
    return (
        <div className="total-amount">
            <h2>{'$' + (total).toFixed(2)}</h2>
            <p>Per Person</p>
        </div>
    );
};

export default PerPersonTotal;
