import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
        <div className="flex flex-col justify-center h-20 bg-blue-700 px-10">
            <div className="flex text-center text-blue-200 mx-20">
                <a className="w-1/4" href="https://github.com/sho0126hiro" target="_blank">
                <i class="fab fa-github"></i>
                </a>
                <a className="w-1/4" href="https://www.facebook.com/sho.hirose.142" target="_blank" target="_blank">
                <i class="fab fa-facebook-f"></i>
                </a>
                <a className="w-1/4" href="https://twitter.com/sho0126hiro" target="_blank">
                <i class="fab fa-twitter"></i>
                </a>
                <Link className="w-1/4" to="/contact">
                <i class="far fa-envelope"></i>
                </Link>
            </div>
            <p className="pt-2 text-xs text-center text-blue-200 block"> © 2020 Sho Hirose All right reserved.</p>
        </div>
)