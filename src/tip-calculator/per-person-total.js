import React from 'react';

const PerPersonTotal = ({total}) => {
    return (
        <div className="total-amount">
            {total > 0 &&
                <h2>Amount per Person</h2>
            }
            {total > 0 &&
                <p>{total}</p>
            }
        </div>
    );
};

export default PerPersonTotal;
