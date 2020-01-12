import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		);
	}
}
