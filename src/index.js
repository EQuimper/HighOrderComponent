import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
	createStore,
	applyMiddleware
} from 'redux';
import {
	Router,
	Route,
	browserHistory
} from 'react-router';

import requireAuth from './components/Require_Auth';

import App from './components/app';
import Resources from './components/Resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="resources" component={requireAuth(Resources)} />
			</Route>
		</Router>
	</Provider>
	, document.querySelector('.container'));
