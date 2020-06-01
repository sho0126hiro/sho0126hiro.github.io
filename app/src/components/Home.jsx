import React, { useReducer } from 'react'
import { Link, useLocation, Redirect } from 'react-router-dom'
import Information from './Information'
import queryString from 'query-string'

const contentWrapperStyle = "p-2 px-4 lg:p-4 lg:bg-white relative overflow-hidden lg:w-1/2"
const contentImgStyle = "w-full object-cover object-top h-48 lg:h-64 opacity-75"
const contentTextStyle = "absolute text-white text-4xl font-bold"


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
    if (urlList.indexOf(url) == -1) return <Redirect to="/" />
    console.log(url)
    return <Redirect to={url} />
}

export default () => {
    const location = useLocation()
    const search = queryString.parse(location.search)
    if (search.redirect) {
        return redirect(search.redirect)
    }
    return <div className="home lg:mx-0">
        <div className="bg-yellow-900 relative overflow-hidden">
            <img src="/img/banner-pc.jpg" className="w-full object-cover h-56 lg:object-top opacity-50" />
            <h1 className="absolute bottom-0 left-0 ml-8 mb-4 lg:ml-20 text-gray-200 text-6xl lg:text-7xl font-bold">
                Portfolio</h1>
        </div>
        <div className="lg:w-7/12 lg:mx-auto mt-5">
            {/* <Information /> */}
            <div className="content">
                <p className={`text-xl ml-5 font-bold lg:text-3xl mb-m-1`}>Contents</p>
                <div className="flex flex-wrap justify-center">
                    <div className={`${contentWrapperStyle}`}>
                        <Link to="/about">
                            <div className="bg-blue-800 overflow-hidden">
                                <img src="/img/about.JPG" className={`${contentImgStyle} `} />
                            </div>
                            <h2 className={contentTextStyle} >
                                About
            </h2>
                        </Link>
                    </div>
                    <div className={contentWrapperStyle}>
                        <Link to="/works">
                            <div className="bg-blue-800 overflow-hidden">

                                <img src="/img/skytree.JPG" className={contentImgStyle} />
                            </div>
                            <h2 className={contentTextStyle}>
                                Works
            </h2>
                        </Link>
                    </div>
                    <div className={contentWrapperStyle}>
                        <Link to="/research">
                            <div className="bg-blue-800 overflow-hidden">

                                <img src="/img/lianchi_tan.JPG" className={contentImgStyle} />
                            </div>
                            <h2 className={contentTextStyle}>
                                Research
            </h2>
                        </Link>
                    </div>
                    <div className={contentWrapperStyle}>
                        <Link to="/links">
                            <div className="bg-blue-800 overflow-hidden">

                                <img src="/img/links.JPG"
                                    className={"w-full object-cover h-48 opacity-75 overflow-hidden lg:h-64"} />
                            </div>
                            <h2 className={contentTextStyle}>
                                Links
            </h2>
                        </Link>
                    </div>
                </div>
                <div className={`lg:w-full mb-4 ${contentWrapperStyle}`}>
                    <Link to="/contact">
                        <div className="bg-blue-800 overflow-hidden">

                            <img src="/img/contact.JPG"
                                className={"w-full object-cover h-48 opacity-75 overflow-hidden lg:h-64"} />
                        </div>
                        <h2 className={contentTextStyle}>
                            Contact
            </h2>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

