import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	// This has no sense to be a class, so it is recomendded to change this component to functional
	componentWillUpdate() {
		console.log('[OrderSummary] WillUpdate');
	}
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
			return (
				<li key={igKey}>
					<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<Aux>
				<h3>Your order summary:</h3>
				<p>Your tasty order it is almost complete: </p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total price: {this.props.price.toFixed(2)} $ </strong>
				</p>
				<p>Continue to checkout?</p>
				<Button btnType="Success" clicked={this.props.purchaseContinueHandler}>
					Continue
				</Button>
				<Button btnType="Danger" clicked={this.props.purchaseCancelledHandler}>
					Cancel{' '}
				</Button>
			</Aux>
		);
	}
}

export default OrderSummary;
