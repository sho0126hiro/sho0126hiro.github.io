import React from 'react'
export default () => {
    return <div className="contact">
        <h1 className="text-4xl text-center py-8 bg-gray-200">Contact</h1>
        <div className="text-center my-3">
            <input type="text" placeholder="Your Name"
                className="border-4 pr-24 pl-2 py-3 m-3" />
            <input type="text" placeholder="e-mail address"
                className="border-4  pr-24 pl-2 py-3 m-3" />
            <textarea type="text" placeholder="Inquery Contents"
                className="border-4 pr-24 pl-2 py-3 m-3 h-64" />
        </div>
        <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
            </button>
        </div>
    </div>
}