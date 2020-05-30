import React from 'react'
import { Link } from 'react-router-dom'

const profileLabelStyle = "flex-1 text-right pr-5 font-semibold text-xs"
const profileContentStyle = "content text-xs font-normal"

const historyLabelStyle = "flex-1 text-right pr-5 text-xs"
const historyContentStyle = "content text-xs"

const linkLabelStyle = "block text-xs font-bold"
const linkContentStyle = "block text-xs"

const h1WrapperStyle = "bg-yellow-800 relative overflow-hidden"
const h1ImgStyle = "w-full object-cover object-top h-56 opacity-50 overflow-hidden"
const h1TextStyle = "absolute bottom-0 right-0 mr-8 mb-4 text-gray-200 text-4xl font-bold"


export default () => (
	<div className="about">
		<div className={h1WrapperStyle}>
			<img src="/img/about.JPG" className={h1ImgStyle} />
			<h1 className={h1TextStyle} >
				ABOUT
            </h1>
		</div>
		{/* profile */}
		<div className="profile py-2">
			<label className="text-2xl pl-5 font-bold">Sho Hirose</label>
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
			<label className="text-xl pl-5 font-semibold">History</label>
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
		{/* Career */}
		<div className="career">
			<label className="text-xl pl-5 my-3 font-semibold" id="career">Career</label>
			<div className=""> 
			<div className="px-6 mt-1">
				<a className="px-2 text-sm font-medium text-blue-500" href="https://lecre.jp/">株式会社ルクレ
				<span className="text-xs pl-2 m-1 text-gray-700">2018.08 (2week)</span></a>
				<p className="text-xs mx-4 mt-1 mb-2">CreateJSを用いて動きのあるリッチなWebアプリケーションを開発しました。</p>
				<hr />
			</div>
			<div className="px-6 mt-1">
				<a className="px-2 text-sm font-medium text-blue-500" href="https://bldt.jp/">株式会社ビルディット
				<span className="text-xs m-1 pl-2 text-gray-700">2019.06 - 2019.07 (2month)</span></a>
				<p className="text-xs mx-4 mt-1 mb-2">シンプルな静的サイトの開発やReactJSを用いたTodoアプリ、およびPHP(Laravel)を用いてWebサービスを開発しました。</p>
				<hr />
			</div>
			<div className="px-6 mt-1">
				<a className="px-2 text-sm font-medium text-blue-500" href="https://www.askul.co.jp/kaisya/">アスクル株式会社
				<span className="text-xs m-1  ml-2 text-gray-700">2019.08 (2week)</span></a>
				<p className="text-xs mx-4 mt-1 mb-2">個人向け通販サイト<a href="https://lohaco.jp" className="text-blue-600">Lohaco</a>のサービス改善のための提案および開発を行いました。</p>
				<hr />
			</div>
			<div className="px-6 mt-1 mb-2">
				<a className="px-2 text-sm font-medium text-blue-500"　href="https://info.cookpad.com/">クックパッド株式会社
				<span className="text-xs m-1 ml-2 text-gray-700">2020.04 (1day)</span></a>
				<p className="text-xs mx-4 mt-1 mb-2">Rubyを用いたCookpad模擬アプリケーションのパフォーマンスチューニングを行いました。</p>
				<hr />
			</div>
			</div>
		</div>
		{/* Skills */}
		<div className="">
			<label className="text-xl pl-5 my-3 font-semibold">Skills</label>
			<div className="ml-10 mr-8 text-sm">
				<p>C, Java, Python, Kotlin, HTML, CSS, JavaScript, Nodejs, TypeScript, PHP, Springboot, ReactJS, Laravel, ReactNative, MySQL, Docker, <br />
					Machine Learning, Reinforcement Learning, Deep Reinforcement Learning</p>
			</div>
		</div>
		{/* Links */}
		<div className="history py-2">
			<label className="text-xl pl-5 my-3 font-semibold">Links / SNS</label>
			<div className="ml-10">
				<label className={linkLabelStyle}>Home</label>
				<Link className={linkContentStyle} to="/">sho0126hiro.github.io
				<i class="fas fa-link text-xxs ml-1 text-gray-700"></i></Link>
				<label className={linkLabelStyle}>Github</label>
				<a href="https://github.com/sho0126hiro" target="_blank" className={linkContentStyle}>sho0126hiro
				<i class="fas fa-link text-xxs ml-1 text-gray-700"></i></a>
				<label className={linkLabelStyle}>Twitter</label>
				<a href="https://twitter.com/sho0126hiro" target="_blank" className={linkContentStyle}>@sho0126hiro
				<i class="fas fa-link text-xxs ml-1 text-gray-700"></i></a>
				<label className={linkLabelStyle}>Facebook</label>
				<a href="https://www.facebook.com/sho.hirose.142" target="_blank" className={linkContentStyle}>sho.hirose.142
				<i class="fas fa-link text-xxs ml-1 text-gray-700"></i></a>
				
				<label className={linkLabelStyle}>Hatena Blog</label>
				<a href="https://sho0126hiro.hatenablog.com/" target="_blank" className={linkContentStyle}>Shoのシステム開発忘備録
				<i class="fas fa-link text-xxs ml-1 text-gray-700"></i></a>
			</div>
		</div>
	</div>
)
/**
 *　名前、所属、趣味、スキル
 */