import React from 'react'
import { Link } from 'react-router-dom'

const linkLabelStyle = "block mx-8 text-ms"
const linkContentStyle = "block mx-8 text-xs"


export default() => (
    <div>
        {/* Links */}
		<div className="history py-2">
			<label className="text-xl pl-5 my-3">Links / SNS</label>
			<div>
				<label className={linkLabelStyle}>Home</label>
				<Link className={linkContentStyle} to="/">sho0126hiro.github.io</Link>
				<label className={linkLabelStyle}>Github</label>
				<a href="https://github.com/sho0126hiro" target="_blank" className={linkContentStyle}>sho0126hiro</a>
				<label className={linkLabelStyle}>Twitter</label>
				<a href="https://twitter.com/sho0126hiro" target="_blank" className={linkContentStyle}>@sho0126hiro</a>
				<label className={linkLabelStyle}>Facebook</label>
				<a href="https://www.facebook.com/sho.hirose.142" target="_blank" className={linkContentStyle}>sho.hirose.142</a>
				<label className={linkLabelStyle}>Hatena Blog</label>
				<a href="https://sho0126hiro.hatenablog.com/" target="_blank" className={linkContentStyle}>Shoのシステム開発忘備録</a>
			</div>
		</div>
    </div>
)