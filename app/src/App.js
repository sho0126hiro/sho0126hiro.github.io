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

export default () => {
	return <BrowserRouter basename={process.env.PUBLIC_URL}>
		<Switch>
			<div>
			<ScrollToTop />
			<Navbar />
			<div className="pt-14"></div>
			<Route exact path='/' component={Home} />
			<Route path='/about' component={About} />
			<Route path='/works' component={Works} />
			<Route path='/research' component={Research} />
			<Route path='/links' component={Links} />
			<Route path='/contact' component={Contact} />
			</div>
		</Switch>
		
	</BrowserRouter>
}