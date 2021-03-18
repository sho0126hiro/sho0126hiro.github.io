import React from 'react'
import { Link } from 'react-router-dom'

const linkLabelStyle = "mt-4 block mx-8 text-ms md:text-lg"
const linkContentStyle = "block mx-8 text-xs md:text-base"


const h1WrapperStyle = "bg-blue-800 relative overflow-hidden lg:hidden"
const h1ImgStyle = "w-full object-cover h-56 opacity-50 overflow-hidden"
const h1TextStyle = "absolute bottom-0 right-0 mr-8 mb-4 text-gray-200 text-4xl font-bold"

export default () => (
	<div className="lg:w-8/12 lg:mx-auto">
		<div className={h1WrapperStyle}>
			<img src="/img/links.JPG" alt="link" className={h1ImgStyle} />
			<h1 className={h1TextStyle} >
				LINKS
            </h1>
		</div>
		{/* Links */}
		<div className="hidden lg:flex">
            <div className="hidden lg:block lg:mx-10 lg:mt-10 lg:mr-5 lg:bg-blue-800 full relative">
                <img src="/img/links.JPG" alt="link" className="w-full h-64 object-cover opacity-75" />
                <label class="absolute bottom-0 right-0 mb-5 mr-10 text-white text-4xl font-bold">LINKS</label>
            </div>
        </div>
		<div className="history py-2 ">
			<div className="md:text-center">
				<label className={linkLabelStyle}><i class="mr-2 fas fa-home"></i>Home</label>
				<div className={`${linkContentStyle}`} >
					<Link to="/">sho0126hiro.github.io</Link>
					<a className="" href="https://github.com/sho0126hiro/sho0126hiro.github.io/tree/develop"><i class="ml-1 fab fa-git-alt"></i></a>
				</div>

				<label className={linkLabelStyle}><i class="mr-2 fab fa-github"></i>Github</label>
				<a href="https://github.com/sho0126hiro" target="_blank" rel="noopener noreferrer" className={linkContentStyle}>sho0126hiro
				<i class="fas fa-link text-xs ml-1 text-gray-700"></i></a>

				<label className={linkLabelStyle}><i class="mr-2 fab fa-twitter text-blue-400"></i>Twitter</label>
				<a href="https://twitter.com/sho0126hiro" target="_blank" rel="noopener noreferrer" className={linkContentStyle}>@sho0126hiro
				<i class="fas fa-link text-xs ml-1 text-gray-700"></i></a>

				<label className={linkLabelStyle}><i class="mr-2 fab fa-facebook-f text-blue-600"></i>Facebook</label>
				<a href="https://www.facebook.com/sho.hirose.142" target="_blank" rel="noopener noreferrer" className={linkContentStyle}>sho.hirose.142
				<i class="fas fa-link text-xs ml-1 text-gray-700"></i></a>

				<label className={`${linkLabelStyle}`}>Hatena Blog</label>
				<a href="https://sho0126hiro.hatenablog.com/" target="_blank" rel="noopener noreferrer" className={`${linkContentStyle} mb-4`}>Shoのシステム開発忘備録
				<i class="fas fa-link text-xs ml-1 text-gray-700"></i></a>
			</div>
		</div>
	</div>
)