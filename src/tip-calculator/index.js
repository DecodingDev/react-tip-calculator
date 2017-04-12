import React from 'react';
import FormInput from '../common/form-input';
import TipButton from './tip-button';
import PerPersonTotal from './per-person-total'
export default class TipCalculator extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            checkTotal: 500,
            tipPercent:0,
            people: 1,
            personTotal: 0
        };
        this.updateTip = this.updateTip.bind(this);
        this.updateBill = this.updateBill.bind(this);
        this.updatePeopleCount = this.updatePeopleCount.bind(this);
    }

    calculateTip = () => {
        this.setState((prevState) => ({personTotal: prevState.checkTotal*prevState.tipPercent/prevState.people}));
	};
	updateTip(tip) {
        this.setState({tipPercent: tip});
        this.calculateTip()
    }
    updateBill(event) {
        this.setState({checkTotal: event.target.value});
        this.calculateTip();
    };
    updatePeopleCount(event) {
        this.setState({people: event.target.value});
        this.calculateTip()
    }
	render() {
		return (
			<div className="app">
				<h1>Tipster</h1>
				<FormInput label="What's your bill?" onChange={this.updateBill} name="check-amount" type="text" />
                <FormInput label="How many people?"  onChange={this.updatePeopleCount} name="party" type="number" />
				<h2>Tip percentage</h2>
				<TipButton handleTip={this.updateTip} tipPercent="1.05" label="5%" />
                <TipButton handleTip={this.updateTip} tipPercent="1.10" label="10%" />
                <TipButton handleTip={this.updateTip} tipPercent="1.15" label="15%" />
                <TipButton handleTip={this.updateTip} tipPercent="1.20" label="20%" />
				<PerPersonTotal total={this.state.personTotal}/>
			</div>

		)
	}
}