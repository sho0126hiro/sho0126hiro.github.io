import React from 'react'
import './css/App.css';
import './js/delighters.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Works from './components/Works'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Links from './components/Links'
import Research from './components/Research';
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer';

export default () => {
	return <BrowserRouter basename={process.env.PUBLIC_URL}>
		<Switch>
			<div onTouchStart="" className="flex flex-col min-h-screen">
				<ScrollToTop />
				<Navbar className="" />
				<div className="flex-1">
					<div className="pt-14"></div>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/works' component={Works} />
					<Route path='/research' component={Research} />
					<Route path='/links' component={Links} />
					<Route path='/contact' component={Contact} />
				</div>

				<Footer className="" />
			</div>
		</Switch>

	</BrowserRouter>
}
