import React from 'react'
import { Link } from 'react-router-dom'

const itemText = "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
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
			<div className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
					<span className="font-semibold text-xl tracking-tight">sho0126hiro</span>
				</div>
				<div className="block lg:h-0">
					{/* <button className="lg:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
						onClick={this.toggleIsOpened}>
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
					</button> */}
					<a className={`mr-3 menu-trigger lg:hidden ${this.state.isOpened ? "active" : ""}`} onClick={this.toggleIsOpened}>
						<span className></span>
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
		)
	}
}