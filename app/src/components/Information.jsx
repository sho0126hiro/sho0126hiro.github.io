import React from 'react'
import { unstable_batchedUpdates } from 'react-dom'

export default () => {
    let infomation = []
    for (let e of INFO) {
        infomation.push(
            <p>{e.message}
                <span className="text-xs pl-5">{e.timestamp}</span>
            </p>
        )

    }
    return <div className="my-4">
        <label className="text-xl ml-4">information</label>
        <div className="mx-8">
            {infomation}
        </div>
    </div>
}
const INFO = [
    {
        message: "現在開発中です。モバイル対応のレイアウトを書いています。",
        timestamp: "2020/05/20"
    }
]