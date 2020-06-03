import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
const h1WrapperStyle = "bg-indigo-700 relative overflow-hidden md:hidden"
const h1ImgStyle = "w-full object-cover object-top h-56 opacity-75 overflow-hidden"
const h1TextStyle = "absolute bottom-0 right-0 mr-8 mb-4 text-gray-200 text-4xl font-bold"


const WorksItem = (prop) => {
    let item = prop.item
    let tags = []
    item.tags.forEach((t, i) => {
        let color = TAG_COLORS[t] || "text-gray-800"
        tags.push(<>
            <i class={`fas fa-circle text-xs ${color}`}></i>
            <span key={i} className="inline-block text-xs text-gray-900 m-1">
                {t}</span>
        </>
        )
    })
    return (
        <div className={`m-5 max-w-sm rounded-b-lg border overflow-hidden shadow-lg lg:m-8
        ${prop.effect ? "effect" : "no-effect"}`}>
            <img className={`w-full ${item.imgPath ? "" : "hidden"}`} src={item.imgPath} alt="works img" />
            <div className="px-6 py-3">
                <div className="">
                    <div className="flex">
                        <p className="flex w-1/2 text-xs text-gray-600">{item.term}</p>
                        <a href={item.blogUrl} className={`text-xs w-1/2 text-gray-600 text-right ${item.blogUrl ? "" : "hidden"}`}>詳細ブログ</a>
                    </div>
                    <h2 className="font-bold text-xl md:text-2xl">{item.title}</h2>
                    <h3 className="text-sm mb-2 md:text-base">{item.subtitle}<a href={item.githubUrl}><i class={`text-gray-900 fab fa-git-alt text-sm　my-1 ml-2 ${item.githubUrl ? "" : "hidden"}`}></i></a></h3>
                    <p className="text-gray-700 text-xs leading-relaxed md:text-sm">{item.discription}</p>
                </div>
                <div className="pt-1 text-left">
                    {tags}
                </div>
            </div>
        </div>
    )
}

export default class Works extends React.Component {
    constructor() {
        super()
        this.state = { latest: true, effect: false }
    }

    toggleLatest = () => {
        this.setState({ latest: !this.state.latest, effect: true })
        setTimeout(() => {
            this.setState({ effect: false })
        }, 400)
    }

    scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    render() {
        let works = []
        let data = WORKS
        data = data.sort((a, b) => {
            let m_a = moment(b.timestamp, "YYYY/MM")
            let m_b = moment(a.timestamp, "YYYY/MM")
            if (this.state.latest) return m_a - m_b
            return m_b - m_a
        })
        data.forEach((item, i) => {
            works.push(<WorksItem key={i} item={item} effect={this.state.effect} />)
        })
        return <div className="works md:w-10/12 lg:w-7/12 md:mx-auto">
            <div className={h1WrapperStyle}>
                <img src="/img/skytree.JPG" className={h1ImgStyle} />
                <h1 className={h1TextStyle} >
                    WORKS
            </h1>
            </div>
            <div className="md:flex">
                <div className="hidden md:block md:m-8 lg:m-10 md:mr-5 md:bg-blue-700 w-1/2 relative">
                    <img src="/img/skytree.JPG" className="w-full lg:h-64 md:h-40 object-top object-cover opacity-75" />
                    <label class="absolute bottom-0 right-0 mb-5 mr-10 text-white text-4xl font-bold">WORK</label>
                </div>
                <div className=" m-5 p-3 bg-gray-200 md:w-1/2 md:m-8 lg:m-10 lg:ml-5 md:justify-center lg:text-center leading-relaxed md:flex md:items-center md:border">
                    <p className="text-gray-700 text-xs md:text-sm lg:text-base">
                        個人またはチームで取り組んだ開発作品です。<br />
                        研究業績については<Link className="underline" to="/research">こちら</Link> <br />
                        インターンシップ履歴については<NavHashLink className="underline" to="/about#career" scroll={el => this.scrollWithOffset(el)}>こちら</NavHashLink>
                    </p>
                </div>
            </div>
            <div className="text-right mx-5 lg:mr-20" onClick={this.toggleLatest}>
                <label className="text-sm mx-3 pr-10 cursor-pointer">日付順</label>
                <div className="inline allow-wrapper relative cursor-pointer">
                    <p className={`allow ${this.state.latest ? "up" : ""}`}></p>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {works}
            </div>
        </div>
    }
}

const TAG_COLORS = {
    "ReactJS": "text-blue-600",
    "Kotlin": "text-orange-500",
    "SpringBoot": "text-green-600",
    "Node.js": "text-green-700",
    "GoogleAppsScript": "text-blue-800",
    "TypeScript": "text-blue-800",
    "ReactNative": "text-blue-700",
    "HTML/CSS": "text-yellow-500",
    "Python": "text-pink-400",
    "Firebase": "text-orange-400"
}

const WORKS = [
    {
        term: "2020.05",
        timestamp: "2020/05", // ソート用
        title: "sho0126hiro.github.io",
        subtitle: "個人ホームページ",
        discription: "就活用に自分のHPをゼロから作成しました。主にReact, TailswindCSS, GoogleAppsScriptを使っています。初めてモバイルファーストを意識して実装しました。",
        tags: ["ReactJS", "GoogleAppsScript"],
        blogUrl: "https://sho0126hiro.hatenablog.com/entry/2020/06/03/220720",
        imgPath: null,
        githubUrl: "https://github.com/sho0126hiro/sho0126hiro.github.io/tree/develop"
    },
    {
        term: "2020.05",
        timestamp: "2020/04", // ソート用
        title: "DiaryShare(仮)",
        subtitle: "日記共有アプリ（開発中）",
        discription: "SNSとブログの中間に位置し、特定の相手にだけ日記を共有できるようなアプリを個人で開発しています。現在はバックエンドをKotlinで開発中です。",
        tags: ["Kotlin", "SpringBoot", "ReactJS", "TypeScript"],
        blogUrl: null,
        imgPath: null,
        githubUrl: "https://github.com/sho0126hiro/DiaryShare-backend"
    },
    {
        term: "2018.10 - 2019.03",
        timestamp: "2018/10", // ソート用
        title: "SHIWORI",
        subtitle: "本のしおりをIoTに",
        discription: "HackU 2018(Yahoo! Japan)でチーム(4人)で取り組んだプロジェクト。読書量の管理をし、スマホアプリでデータを可視化して表示するアプリを開発しました。書籍検索、本のレビューなどの機能も実装しました。自分はReactNative, Reduxを用いたアプリの開発を担当しました。",
        tags: ["ReactNative", "Node.js"],
        blogUrl: "https://sho0126hiro.hatenablog.com/entry/2019/03/12/141824",
        imgPath: "/img/shiwori.jpg",
        githubUrl: "https://github.com/meister-prism/shiwori"
    },
    {
        term: "2019.10 - 2020.03",
        timestamp: "2019/10", // ソート用
        title: "KOYOMI",
        subtitle: "スマートな壁掛けカレンダー",
        discription: "HackU2019(Yahoo! Japan)でチーム(4人)で取り組んだプロジェクト。壁掛けカレンダーとスマホのカレンダーを同時に管理したい！という気持ちから、壁掛けカレンダーをIoTにしました。Webアプリ化することでどんな端末でも使える様にし、家族間での共有メモ機能やカレンダー上の付加情報など、IoTカレンダーならではの機能を実装しました。サーバーサイド開発をメインとして開発した初めてのプロジェクトでした。",
        tags: ["ReactJS", "TypeScript", "Kotlin", "SpringBoot",],
        blogUrl: null,
        imgPath: "./img/koyomi.jpg",
        githubUrl: "https://github.com/meister-prism/currender-api"
    },
    {
        term: "2019.09 - 2019.10",
        timestamp: "2019/09", // ソート用
        title: "文化祭 HP 2019",
        subtitle: "最新情報をいち早くお届け",
        discription: "チーム（5名程度）で取り組みました。1年目の反省を生かし、模擬店長や部長から直接最新情報を入力してもらうことで、商品の値下がりやイベントの変更などの情報をいち早く届ける動的HPを実現しました。自分はプロジェクトリーダーとして、全体の計画やスケジューリングなどを行うほか、フロントエンド開発を行いました。",
        tags: ["ReactJS", "Firebase"],
        blogUrl: null,
        imgPath: "/img/kfes2019.jpg"
    },
    {
        term: "2019.09 - 2019.10",
        timestamp: "2018/09", // ソート用
        title: "文化祭 HP 2018 / LINE@",
        subtitle: "当校初めての文化祭HP / LINE@",
        discription: "文化祭でHPを作成するのは当校において初めてでした。新しい文化祭実行部門の立ち上げに携わり、文化祭HPの作成に取り組みました。特に、インターンの経験を生かして、直感的に遷移するマップ機能をHP上およびLINE＠に実装しました。",
        tags: ["HTML/CSS", "Node.js",],
        blogUrl: "https://sho0126hiro.hatenablog.com/entry/2018/11/06/233849",
        imgPath: "/img/kfes2018.png",
        githubUrl: "https://github.com/teamET/2018.perform"
    },
    {
        term: "2017.10 - 2018.03",
        timestamp: "2017/10", // ソート用
        title: "2017年度マイスター作品",
        subtitle: "直感的な手の動作で動くラジコン",
        discription: "初めてのチームプロジェクト(4名)。HackU 2017(Yahoo! Japan)での作品です。LeapMotionを用いて認識した手の角度やポーズなどを利用して、手を倒した方向に進むといった、直感的な動作で動くラジコンを実装しました。LeapMotionで受け取った詳細な手指の位置データからモータの回転数などを決めるデータに変換する部分を担当しました。",
        tags: ["Python"],
        blogUrl: null,
        imgPath: "/img/meister2017.jpg",
        githubUrl: "https://github.com/teamET/2017.meister"
    },
    {
        term: "2019.06",
        timestamp: "2019/06", // ソート用
        title: "WebcamBot",
        subtitle: "Webカメラが写真をとって通知",
        discription: "RaspberryPiに接続したWebカメラが定期的orお願いしたときに写真を撮って、SlackやLINEグループに投稿するBOTを開発しました。",
        tags: ["Python",],
        blogUrl: "https://sho0126hiro.hatenablog.com/entry/2019/06/16/183000",
        imgPath: "/img/webcambot.jpg",
        githubUrl: "https://github.com/sho0126hiro/webcam_linebot"
    },
]