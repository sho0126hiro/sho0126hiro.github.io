import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Navbar from './components/Navbar'

export default () => (
	<div>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Switch>
				<div>
					<Navbar />
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/project' component={Project} />
				</div>
			</Switch>
		</BrowserRouter>
	</div>
)
