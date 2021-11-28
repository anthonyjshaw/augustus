import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './components/About';
import './App.scss';
import "@fontsource/urbanist";
import HomepageContainer from './components/HomepageContainer';
import Fashion from './components/Fashion';
import NavbarContainer from './components/NavbarContainer';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';
import AdminPage from './components/AdminPage';
import AdminDashboard from './components/AdminDashboard';
import AdminNavbar from './components/AdminNavbar';

const App = () => {
	const adminLinks = ['/admin', 'admin-dashboard']
	return (
		<>
		{location.pathname === "/admin-dashboard" ?  <AdminNavbar/>: <NavbarContainer />}
		<div className='flex-wrapper'>
			<Switch>
				<Route path={`${process.env.PUBLIC_URL}/shop/:name`} component={ProductPage}/>
				<Route path={`${process.env.PUBLIC_URL}/admin-dashboard`} component={AdminDashboard} />
				<Route path={`${process.env.PUBLIC_URL}/about`} component={About}/>
				<Route path={`${process.env.PUBLIC_URL}/fashion`} component={Fashion}/>
				<Route path={`${process.env.PUBLIC_URL}/admin`} component={AdminPage} >
					{localStorage.getItem('loginStatus') === 'true' ?  <Redirect to="/admin-dashboard" /> : <AdminPage />}
				</Route>
				<Route path={`${process.env.PUBLIC_URL}/`} component={HomepageContainer} />
			</Switch>
		{location.pathname === "/admin-dashboard" ? "": <Footer />}
		</div>
		</>
	)
}

export default App;