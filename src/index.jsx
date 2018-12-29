import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import Routers from 'pages/router';

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
