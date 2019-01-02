import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Routers from 'pages/router';
import './assets/css/common.less';
// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// import all svg
const reqSvg = require.context('./assets/svg', true, /\.svg$/);
requireAll(reqSvg);
console.log(requireAll(reqSvg));

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<BrowserRouter>
				<Component />
			</BrowserRouter>
		</AppContainer>,
		document.getElementById('app')
	);
};
render(Routers);

if (module.hot) {
	module.hot.accept('pages/router', () => {
		render(Routers);
	});
}
