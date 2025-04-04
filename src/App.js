import './css/App.css';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import AlgoScreen from './screens/AlgoScreen';
import Cookies from 'js-cookie';
import HomeScreen from './screens/HomeScreen';
import ReactGA from 'react-ga4';

const App = () => {
	ReactGA.initialize('G-0ERQ9E89XM');
	ReactGA.send({ hitType: 'pageview', page: 'home' });

	const [loading, setLoading] = useState(true);
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const storedTheme = Cookies.get('theme');
		if (storedTheme) {
			setTheme(storedTheme);
			document.body.setAttribute('data-theme', storedTheme);
		}
		setLoading(false);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		Cookies.set('theme', newTheme);
		document.body.setAttribute('data-theme', newTheme);
	};

	if (loading) {
		return <div>.</div>;
	}

	return (
		<Router basename={process.env.PUBLIC_URL + '/'}>
			<Routes>
				<Route
					path="/about"
					element={<AboutScreen theme={theme} toggleTheme={toggleTheme} />}
				/>
				<Route
					path="/:algo"
					element={<AlgoScreen theme={theme} toggleTheme={toggleTheme} />}
				/>
				<Route path="*" element={<HomeScreen theme={theme} toggleTheme={toggleTheme} />} />
			</Routes>
		</Router>
	);
};

export default App;
