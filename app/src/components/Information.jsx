import React from 'react'

export default () => {
    let infomation = []
    for (let e of INFO) {
        infomation.push(
            <div className="flex text-pink-800 mt-1">
                <p className="lg:w-2/12"></p>
                <p className="flex w-3/12 font-medium text-xs lg:block lg:text-center lg:text-base">{e.timestamp}</p>
                <p className="flex w-7/12  lg:w-6/12 ml-4 text-xs lg:text-base">{e.message}</p>
            </div>
        )
    }
    return <div className="rounded-lg m-4 mt-5 p-3 bg-pink-200 lg:mx-23">
        <label className="font-semibold text-pink-700 mx-1">
        <i class="fas fa-info-circle text-pink-700 mr-1 lg:mr-2" ></i>Information</label>
        <div className="w-full mt-2">
            {infomation}
        </div>
    </div>
}
const INFO = [
    {
        message: "モバイル対応できました。",
        timestamp: "2020/05/31"
    },
    {
        message: "現在開発中です。モバイル対応のレイアウトを書いています。",
        timestamp: "2020/05/20"
    },
]