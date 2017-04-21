import React from 'react';
import './tipbotton.css';
const TipButton = ({handleTip, label, tipPercent}) => {
    return (
        <button className="tip-button" onClick={() => handleTip(tipPercent)}>
            {label}<sup>%</sup>
        </button>
    )
};
export default TipButton;