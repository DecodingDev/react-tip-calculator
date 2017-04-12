import React from 'react';

const TipButton = ({handleTip, label, tipPercent}) => {
    return (
        <button onClick={() => handleTip(tipPercent)}>
            {label}
        </button>
    )
};
export default TipButton;