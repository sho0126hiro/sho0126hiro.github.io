import React from 'react'

const h1WrapperStyle = "lg:hidden bg-green-700 relative overflow-hidden"
const h1ImgStyle = "w-full object-cover object-top h-56 opacity-50 overflow-hidden"
const h1TextStyle = "absolute bottom-0 right-0 mr-8 mb-4 text-gray-200 text-4xl font-bold"

export default () => (
    <div className="lg:w-8/12 md:w-10/12 md:mx-auto">
        <div className={h1WrapperStyle}>
            <img src="/img/lianchi_tan.JPG" className={h1ImgStyle} />
            <h1 className={h1TextStyle} >
                RESEARCH
            </h1>
        </div>
        {/* lg - img. title */}
        <div className="hidden lg:flex">
            <div className="hidden lg:block lg:mx-10 lg:mt-10 lg:mr-5 lg:bg-green-700 w-1/2 relative">
                <img src="/img/lianchi_tan.JPG" className="w-full h-64 object-top object-cover opacity-75" />
                <label class="absolute bottom-0 right-0 mb-5 mr-10 text-white text-4xl font-bold">RESEARCH</label>
            </div>
            <div className=" m-5 p-3 lg:w-1/2 lg:m-10 lg:ml-5 leading-relaxed ">
                <p className="font-bold text-3xl">
                    研究テーマ
                </p>
                <p className="text-xs lg:text-lg pt-4">
                    機械学習（強化学習、深層強化学習）を活用した応用研究（介護予防システム）
                </p>
                <a href="/pdf/research_intro.pdf">
                    <p className="text-xs text-blue-700 lg:text-lg pt-4">
                        研究紹介（授業用）
                </p>
                </a>
            </div>
        </div>
        {/* sm - md */}
        <div className="m-5 md:mx-16 lg:mx-12">
            <div className="flex lg:hidden">
                <div className="hidden lg:w-1/2 lg:bg-green-700 lg:relative m-10">
                    <img src="/img/lianchi_tan.JPG" className="w-full h-64 opacity-75" />
                    <label className="absolute bottom-0 right-0 m-10 ml-5 text-white text-4xl font-bold">RESEARCH</label>
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-1 md:text-2xl lg:mt-0">研究テーマ</h2>
                    <p className="text-sm px-2 md:text-base">機械学習（強化学習、深層強化学習）を活用した応用研究（介護予防システム）
            　</p>
                    <a href="/pdf/research_intro.pdf">

                        <p className="text-sm px-2 py-1 pl-4 text-blue-500 md:text-base">研究紹介（授業用）</p>
                    </a>
                </div>
            </div>
            <h2 className="text-xl mt-4 font-bold md:text-2xl lg:text-3xl ">研究業績</h2>
            <div className="mx-2 md:mx-5 md:mb-4 lg:mt-4 md:mt-2 md:text-bold md:text-xl">
                <h3 className="md:font-semibold">査読付き学術論文</h3>
                <ul className="mx-5 lg:my-2 lg:mx-10">
                    <li className="list-decimal mb-2 mt-1 text-xs md:text-base">

                        Sho Hirose, Daisuke Kitakoshi, Akihiro Yamashita, Kentarou Suzuki, Masato Suzuki: A Study on Intelligent Dialogue Agent for Older Adults' Preventive Care – Towards Development of a Comprehensive Preventive Care System –, Advances in Science, Technology and Engineering System Journal (ASTESJ), Vol. 5, No. 6, pp. 09-21, 2020
                            <a className=""
                            href="https://astesj.com/v05/i06/p02/">
                            <i class="fas fa-link text-xs ml-1 text-gray-700"></i></a>
                    </li>
                </ul>
                <h3 className="md:font-semibold">国際会議発表</h3>
                <ul className="mx-5 lg:my-2 lg:mx-10">
                    <li className="list-decimal mb-2 mt-1 text-xs md:text-base">
                        Daisuke Kitakoshi, Sho Hirose, Akihiro Yamashita, Kentarou Suzuki, Masato Suzuki: Development of an Intelligent Dialogue Agent for Older Adults -Evaluation of Functions to Control Spontaneous Talk and Coordinate Speech Content-, Proc. 2019 Conference on Technologies and Applications of Artificial Intelligence (TAAI2019), Kaohsiung, Taiwan, 2019 (Accepted).
                            <a className=""
                            href="https://doi.org/10.1109/TAAI48200.2019.8959870">
                            <i class="fas fa-link text-xs ml-1 text-gray-700"></i></a>
                    </li>
                </ul>
                <h3 className="md:font-semibold lg:mt-4 md:mt-2">国内学会発表</h3>
                <ul className="pl-4 list-decimal lg:mx-8 lg:pl-0">
                    <li className="text-xs m-2 md:text-base md:my-2">
                        廣瀬翔, 北越大輔, 鈴木健太郎, 山下晃弘, 鈴木雅人 : 包括的介護予防システムの実現へ向けた検討 ―知的対話エージェントと認知訓練システムの統合―, 2020年度人工知能学会全国大会（第34回）, 熊本, Jun. 2020.
                            <a className=""
                            href="https://doi.org/10.11517/pjsai.JSAI2020.0_1D4GS1301">
                            <i class="fas fa-link text-xs ml-1 text-gray-700"></i></a>
                    </li>
                    <li className="text-xs m-2 md:text-base md:my-2">
                        廣瀬翔, 北越大輔, 鈴木健太郎, 山下晃弘, 鈴木雅人 : 知的対話エージェントにおける発話内容調整機構の特性評価 ―包括的介護予防システムの開発に向けて―, 2020年電子情報通信学会総合大会, 東広島, Mar. 2020.
                </li>
                    <li className="text-xs m-2  md:text-base md:my-2">
                        鈴木健太郎, 廣瀬翔, 坂本紫音, 北越大輔, 山下晃弘, 鈴木雅人 : 知的対話エージェントと認知訓練システムによる包括的な高齢者支援情報環境の構築へ向けて　―印象評価の結果に関する考察―, 2020年電子情報通信学会総合大会, 東広島, Mar. 2020.
                </li>
                    <li className="text-xs m-2  md:text-base md:my-2">
                        廣瀬翔, 北越大輔, 鈴木健太郎, 山下晃弘, 鈴木雅人 : 包括的介護予防システムの基本的特性評価に関する研究 ―知的対話エージェントと認知訓練システムの併用効果―, 第47回知能システムシンポジウム, 名古屋, Mar. 2020.
                </li>
                </ul>
            </div>
        </div>
    </div>
)