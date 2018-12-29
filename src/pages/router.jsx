import React, { Component } from 'react';
import { Switch, Redirect, Route, Link } from 'react-router-dom';

import Home from 'pages/home';
import Login from 'pages/login';
import Error from 'pages/error';

// class Routers extends Component {
// 	render() {
// 		let LayoutRouter = (
// 			<Layout>
// 				<Switch>
// 					<Route exact path="/" component={Home} />
// 					<Route component={Error} />
// 				</Switch>
// 			</Layout>
// 		);
// 		return (
// 			<Switch>
// 				<Route path="/login" component={Login} />
// 				<Route path="/" render={props => LayoutRouter} />
// 			</Switch>
// 		);
// 	}
// }

export default () => (
	<React.Fragment>
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/home" />} />
			<Route path="/home" component={Home} />
			<Route path="/login" component={Login} />
		</Switch>
	</React.Fragment>
);
