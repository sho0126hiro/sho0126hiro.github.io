import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/project">project</Link>
    </div>
)