import React, { useReducer } from 'react'
import { Link, useLocation, Redirect } from 'react-router-dom'
import Information from './Information'
import queryString from 'query-string'

const contentTextStyle = "absolute text-white text-4xl font-bold"
const contentImgStyle = "w-full object-cover object-top h-48 opacity-75 overflow-hidden"
const contentWrapperStyle = "bg-blue-800 m-5 relative overflow-hidden"

const urlList = [
    "/",
    "/about",
    "/works",
    "/research",
    "/links",
    "/contact"
]
/**
 * github pages deploy用
 */
const redirect = (url) => {
    console.log(url)
    if(urlList.indexOf(url) == -1) return <Redirect to="/" />
    console.log(url)
    return <Redirect to={url}/>
}

export default () => {
    const location = useLocation()
    const search = queryString.parse(location.search)
    if(search.redirect){
        return redirect(search.redirect)
    }
    return <div className="home">
        <div className="bg-yellow-900 relative overflow-hidden">
            <img src="/img/home.JPG" className="w-full object-cover h-56 opacity-50" />
            <h1 className="absolute bottom-0 left-0 ml-8 mb-4 text-gray-200 text-5xl font-bold">
                Portfolio</h1>
        </div>
        <Information />
        <div className="content">
            <p className={`text-xl ml-5 font-bold`}>Contents</p>
            <div className={`${contentWrapperStyle} mt-1`} data-delighter>
                <Link to="/about">
                    <img src="/img/about.JPG" className={contentImgStyle} />

                    <h2 className={contentTextStyle} >
                        About
            </h2>
                </Link>
            </div>
            <div className={contentWrapperStyle} data-delighter>
                <Link to="/works">
                    <img src="/img/skytree.JPG" className={contentImgStyle} />
                    <h2 className={contentTextStyle}>
                        Works
            </h2>
                </Link>
            </div>
            <div className={contentWrapperStyle} data-delighter>
                <Link to="/research">
                    <img src="/img/lianchi_tan.JPG" className={contentImgStyle} />
                    <h2 className={contentTextStyle}>
                        Research
            </h2>
                </Link>
            </div>
            <div className={contentWrapperStyle} data-delighter>
                <Link to="/links">
                    <img src="/img/links.JPG"
                        className={"w-full object-cover h-48 opacity-75 overflow-hidden"} />
                    <h2 className={contentTextStyle}>
                        Links
            </h2>
                </Link>
            </div>
            <div className={contentWrapperStyle} data-delighter>
                <Link to="/contact">
                    <img src="/img/contact.JPG"
                        className={"w-full object-cover h-48 opacity-75 overflow-hidden"} />
                    <h2 className={contentTextStyle}>
                        Contact
            </h2>
                </Link>
            </div>
        </div>
    </div>
}

