import React from 'react';

export default class TipButtom extends React.Component{
    handleClick = () => {
        this.props.onClickFunction(this.props.tipPercent);
    };

    render () {
        return (
            <button onClick={this.handleClick}>
                {this.props.tipPercent} %
            </button>
        )
    }
}