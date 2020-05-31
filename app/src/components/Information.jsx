import React from 'react'
import { unstable_batchedUpdates } from 'react-dom'

export default () => {
    let infomation = []
    for (let e of INFO) {
        infomation.push(
            <div className="flex text-pink-800 mt-1">
                <p className="flex w-3/12 font-medium text-xs">{e.timestamp}</p>
                <p className="flex w-9/12 ml-4 text-xs">{e.message}</p>
            </div>
        )
    }
    return <div className="rounded-lg m-4 mt-5 p-3 bg-pink-200">
        <label className="font-semibold text-pink-700 mx-2">Information</label>
        <div className="w-full mt-2">
            {infomation}
        </div>
    </div>
}
const INFO = [
    {
        message: "現在開発中です。モバイル対応のレイアウトを書いています。",
        timestamp: "2020/05/20"
    },
    {
        message: "モバイル対応できました。",
        timestamp: "2020/05/31"
    }
]