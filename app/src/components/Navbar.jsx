import React from 'react'
import { Link } from 'react-router-dom'

const itemText = "block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
export default class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isOpened: false }
	}

	toggleIsOpened = () => {
		this.setState({ isOpened: !this.state.isOpened })
	}

	close = () => {
		this.setState({ isOpened: false})
	}

	render() {
		return (
			<div className="fixed top-0 left-0 z-10 w-full">
			<div className="flex items-center justify-between flex-wrap bg-blue-700 p-3">
					<Link className="inner-block" to="/">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
					<span className="font-semibold text-xl tracking-tight">sho0126hiro</span>
					
				</div>
				</Link>
				<div className="block lg:h-0">
					<a className={`mr-3 menu-trigger lg:hidden ${this.state.isOpened ? "active" : ""}`} onClick={this.toggleIsOpened}>
						<span></span>
						<span></span>
						<span></span>
					</a>
				</div>
				<div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto
					${this.state.isOpened ? "navbar-open": "navbar-close"}`}>

					<div className="text-sm lg:flex-grow">
						<Link to="/" className={`${itemText}`} onClick={this.close}>Home</Link>
						<Link to="/about" className={`${itemText}`} onClick={this.close}>About</Link>
						<Link to="/works" className={`${itemText}`} onClick={this.close}>Works</Link>
						<Link to="/research" className={`${itemText}`} onClick={this.close}>Research</Link>
						<Link to="/links" className={`${itemText}`} onClick={this.close}>Links</Link>
						<Link to="/contact" className={`${itemText}`} onClick={this.close}>Contact</Link>
					</div>
				</div>
			</div>
			</div>
		)
	}
}