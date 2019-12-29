import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Aux>
			<h3>Your order summary:</h3>
			<p>Your tasty order it is almost complete: </p>
			<ul>{ingredientSummary}</ul>
			<p>Continue to checkout?</p>
		</Aux>
	);
};

export default orderSummary;
