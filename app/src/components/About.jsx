import React from 'react'
import { Link } from 'react-router-dom'

const profileLabelStyle = "flex-1 text-right pr-5 font-semibold text-xs"
const profileContentStyle = "content text-xs font-light"

const historyLabelStyle = "flex-1 text-right pr-5 text-xs"
const historyContentStyle = "content font-light text-xs"

const linkLabelStyle = "block mx-8 text-xs font-bold"
const linkContentStyle = "block mx-8 text-xs"

export default () => (
	<div className="about">
		<h1 className="text-4xl text-center py-4 bg-gray-200">About</h1>
		{/* profile */}
		<div className="profile py-2">
			<label className="text-2xl pl-5">Sho Hirose</label>
			<p className="px-5 text-xs">National Institute of Technology, Tokyo Collage</p>
			<p className="px-5 text-xs">Advanced Cource of Mechanical and Computer Science</p>
			<img src="/img/profile.JPG" className="w-3/6 h-3/6 mx-auto p-5" />
			<div className="flex flex-col">
				<div className="flex flex-auto">
					<label className={profileLabelStyle}>名前</label>
					<p className={profileContentStyle}>廣瀬 翔</p>
				</div>
				<div className="flex flex-auto">
					<label className={profileLabelStyle}>出身地</label>
					<p className={profileContentStyle}>熊本県 熊本市</p>
				</div>
				<div className="flex flex-auto">
					<label className={profileLabelStyle}>所属</label>
					<p className={profileContentStyle}>
						国立東京工業高等専門学校<br />機械情報システム工学専攻</p>
				</div>
				<div className="flex flex-auto">
					<label className={profileLabelStyle}>連絡先</label>
					<p className={profileContentStyle}>
						sho0126hiro@gmail.com<br />s20613@tokyo.kosen-ac.jp</p>
				</div>
			</div>
		</div>
		{/* History */}
		<div className="history py-2">
			<label className="text-xl pl-5">History</label>
			<div className="flex flex-col my-2">
				<div className="flex-auto flex">
					<label className={historyLabelStyle}>2015.04</label>
					<p className={historyContentStyle}>
						熊本高等専門学校 熊本キャンパス <br />人間情報システム工学科 入学</p>
				</div>
				<div className="flex-auto flex">
					<label className={historyLabelStyle}>2016.04</label>
					<p className={historyContentStyle}>
						国立東京工業高等専門学校 <br />情報工学科 転入学</p>
				</div>
				<div className="flex-auto flex">
					<label className={historyLabelStyle}>2020.03</label>
					<p className={historyContentStyle}>
						国立東京工業高等専門学校 <br />情報工学科 卒業</p>
				</div>
				<div className="flex-auto flex">
					<label className={historyLabelStyle}>2020.04</label>
					<p className={historyContentStyle}>
						国立東京工業高等専門学校 <br />機械情報システム工学専攻 在学中 (1年)</p>
				</div>
			</div>
		</div>
		{/* Skills */}
		<div className="history py-2">
			<label className="text-xl pl-5 my-3">Skills</label>
			<div className="mx-8 text-sm">
				<p>C, Java, Python, Kotlin, HTML, CSS, JavaScript, Nodejs, TypeScript, PHP, Springboot, ReactJS, Laravel, ReactNative, MySQL, Docker, <br />
					Machine Learning, Reinforcement Learning, Deep Reinforcement Learning</p>
			</div>
		</div>
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
/**
 *　名前、所属、趣味、スキル
 */