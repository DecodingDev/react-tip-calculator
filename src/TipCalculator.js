import React from 'react';
import FormInput from './common/form-input';
import TipButton from './tip-button';
import PerPersonTotal from './per-person-total'
export default class TipCalculator extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            checkTotal: 500,
            people: 1,
            personTotal: 0
        };

        this.updateBill = this.updateBill.bind(this);
        this.updatePeopleCount = this.updatePeopleCount.bind(this);
    }

    calculateTip = (tipPercent) => {
        this.setState((prevState) => ({personTotal: prevState.checkTotal * tipPercent / prevState.people}));
	};
    updateBill(event) {
        this.setState({checkTotal: event.target.value});
    };
    updatePeopleCount(event) {
        this.setState({people: event.target.value});
    }
	render() {
		return (
			<div className="app">
				<h1>Tipster</h1>
				<FormInput label="What's your bill?" onChange={this.updateBill} name="check-amount" type="text" />
                <FormInput label="How many people?"  onChange={this.updatePeopleCount} name="party" type="number" />
				<h2>Tip percentage</h2>
				<TipButton onClickFunction={this.calculateTip} tipPercent="1.05"/>
                <TipButton onClickFunction={this.calculateTip} tipPercent="1.10"/>
                <TipButton onClickFunction={this.calculateTip} tipPercent="1.15"/>
                <TipButton onClickFunction={this.calculateTip} tipPercent="1.20"/>
				<PerPersonTotal total={this.state.personTotal}/>
			</div>

		)
	}
}