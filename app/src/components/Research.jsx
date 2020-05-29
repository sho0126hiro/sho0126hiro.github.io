import React from 'react'

const h1WrapperStyle = "bg-green-800 relative overflow-hidden"
const h1ImgStyle = "w-full object-cover object-top h-56 opacity-50 overflow-hidden"
const h1TextStyle = "absolute bottom-0 right-0 mr-8 mb-4 text-gray-200 text-4xl font-bold"

export default () => (
    <div>
        <div className={h1WrapperStyle}>
            <img src="/img/lianchi_tan.JPG" className={h1ImgStyle} />
            <h1 className={h1TextStyle} >
                RESEARCH
            </h1>
        </div>
        <div className="m-5">
            <h2 className="text-xl font-bold my-2">研究テーマ</h2>
            <p className="text-sm m-2">機械学習（強化学習、深層強化学習）を活用した応用研究（介護予防システム）
        </p>
            <h2 className="text-xl my-2 font-bold">研究業績</h2>
            <div>
                <h3>国際会議発表</h3>
                <ul className="pl-4">
                    <li className="list-decimal text-xs m-2">
                        Daisuke Kitakoshi, Sho Hirose, Akihiro Yamashita, Kentarou Suzuki, Masato Suzuki: Development of an Intelligent Dialogue Agent for Older Adults -Evaluation of Functions to Control Spontaneous Talk and Coordinate Speech Content-, Proc. 2019 Conference on Technologies and Applications of Artificial Intelligence (TAAI2019), Kaohsiung, Taiwan, 2019 (Accepted).
                        [
                <a className="font-bold underline"
                            href="https://ieeexplore.ieee.org/document/8959870">link</a>
                        ]
                </li>
                </ul>
                <h3>国内学会発表</h3>
                <ul className="pl-4 list-decimal">
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