import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomepageContainer from './HomepageContainer';

const App = () => {
	return (
		<div className='flex-wrapper'>
			<Switch>
				<Route path={`${process.env.PUBLIC_URL}/`} component={HomepageContainer} />
			</Switch>
		</div>
	)
}

export default App;