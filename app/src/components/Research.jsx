import React from 'react'

const h1WrapperStyle = "lg:hidden bg-green-800 relative overflow-hidden"
const h1ImgStyle = "w-full object-cover object-top h-56 opacity-50 overflow-hidden"
const h1TextStyle = "absolute bottom-0 right-0 mr-8 mb-4 text-gray-200 text-4xl font-bold"

export default () => (
    <div className="lg:w-7/12 lg:mx-auto">
        <div className={h1WrapperStyle}>
            <img src="/img/lianchi_tan.JPG" className={h1ImgStyle} />
            <h1 className={h1TextStyle} >
                RESEARCH
            </h1>
        </div>
        <div className="hidden lg:flex">
            <div className="hidden lg:block lg:mx-10 lg:mt-10 lg:mr-5 lg:bg-green-700 w-1/2 relative">
                <img src="/img/lianchi_tan.JPG" className="w-full h-64 object-top object-cover opacity-75" />
                <label class="absolute bottom-0 right-0 mb-5 mr-10 text-white text-4xl font-bold">RESEARCH</label>
            </div>
            <div className=" m-5 p-3 lg:w-1/2 lg:m-10 lg:ml-5 leading-relaxed ">
                <p className="text-green-900 font-bold lg:text-3xl">
                    研究テーマ
                </p>
                <p className="text-green-900 text-xs lg:text-lg pt-4">
                    機械学習（強化学習、深層強化学習）を活用した応用研究（介護予防システム）
                </p>
            </div>
        </div>
        <div className="m-5 lg:mx-12">
            <div className="flex lg:hidden">
                <div className="hidden lg:w-1/2 lg:bg-green-700 lg:relative m-10">
                    <img src="/img/lianchi_tan.JPG" className="w-full h-64 opacity-75" />
                    <label className="absolute bottom-0 right-0 m-10 ml-5 text-white text-4xl font-bold">RESEARCH</label>
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-1 lg:mt-0">研究テーマ</h2>
                    <p className="text-sm px-2">機械学習（強化学習、深層強化学習）を活用した応用研究（介護予防システム）
            </p>
                </div>
            </div>
            <h2 className="text-xl mt-4 font-bold lg:text-3xl ">研究業績</h2>
            <div className="mx-2 lg:mx-5 lg:mb-4 lg:mt-4 lg:text-bold lg:text-xl">
                <h3 className="lg:font-semibold">国際会議発表</h3>
                <ul className="mx-5 lg:my-2 lg:mx-10">
                    <li className="list-decimal mb-2 mt-1 text-xs">
                        Daisuke Kitakoshi, Sho Hirose, Akihiro Yamashita, Kentarou Suzuki, Masato Suzuki: Development of an Intelligent Dialogue Agent for Older Adults -Evaluation of Functions to Control Spontaneous Talk and Coordinate Speech Content-, Proc. 2019 Conference on Technologies and Applications of Artificial Intelligence (TAAI2019), Kaohsiung, Taiwan, 2019 (Accepted).
                        [
                <a className="font-bold underline"
                            href="https://ieeexplore.ieee.org/document/8959870">link</a>
                        ]
                </li>
                </ul>
                <h3 className="lg:font-semibold lg:mt-4">国内学会発表</h3>
                <ul className="pl-4 list-decimal lg:mx-8 lg:pl-0">
                    <li className="text-xs m-2">
                        廣瀬翔, 北越大輔, 鈴木健太郎, 山下晃弘, 鈴木雅人 : 知的対話エージェントにおける発話内容調整機構の特性評価 ―包括的介護予防システムの開発に向けて―, 2020年電子情報通信学会総合大会, 東広島, Mar. 2020.
                </li>
                    <li className="text-xs m-2">
                        鈴木健太郎, 廣瀬翔, 坂本紫音, 北越大輔, 山下晃弘, 鈴木雅人 : 知的対話エージェントと認知訓練システムによる包括的な高齢者支援情報環境の構築へ向けて　―印象評価の結果に関する考察―, 2020年電子情報通信学会総合大会, 東広島, Mar. 2020.
                </li>
                    <li className="text-xs m-2">
                        廣瀬翔, 北越大輔, 鈴木健太郎, 山下晃弘, 鈴木雅人 : 包括的介護予防システムの基本的特性評価に関する研究 ―知的対話エージェントと認知訓練システムの併用効果―, 第47回知能システムシンポジウム, 名古屋, Mar. 2020.
                </li>
                </ul>
            </div>
        </div>
    </div>
)