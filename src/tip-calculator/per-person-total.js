import React from 'react';

const PerPersonTotal = ({total}) => {
    return (
        <div className="total-amount">
            <h2>Amount per Person</h2>
            <p>{total}</p>
        </div>
    );
};

export default PerPersonTotal;
