import React from 'react'
import { Link } from 'react-router-dom'

const itemText = "block mt-4 md:inline-block md:mt-0 text-blue-200 lg:mx-5 hover:text-white mr-4"
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
			<div className="flex items-center justify-between flex-wrap bg-blue-700 p-4  lg:px-64">
					<Link className="inner-block" to="/">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<img className="fill-current h-8 w-8 mr-2" alt="logo" src="/img/logo.png" widht="54" height="54"  viewBox="0 0 54 54"></img>
					<span className="font-semibold text-xl tracking-tight lg:text-2xl">sho0126hiro</span>
				</div>
				</Link>
				<div className="block md:h-0">
					<a href={() => false} className={`mr-3 menu-trigger md:hidden ${this.state.isOpened ? "active" : ""}`} onClick={this.toggleIsOpened}>
						<span></span>
						<span></span>
						<span></span>
					</a>
				</div>
				<div className={`w-full block flex-grow md:flex md:items-center md:w-auto 
					${this.state.isOpened ? "navbar-open": "navbar-close"}`}>

					<div className="text-sm md:flex-grow lg:text-lg">
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