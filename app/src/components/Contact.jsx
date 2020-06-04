import React from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const h1WrapperStyle = "bg-blue-800 relative overflow-hidden lg:hidden"
const h1ImgStyle = "w-full object-cover h-56 opacity-50 overflow-hidden"
const h1TextStyle = "absolute bottom-0 right-0 mr-8 mb-4 text-gray-200 text-4xl font-bold"

const ErrorMessage = (props) => {
    let items = []
    props.errors.forEach((e, i) => {
        items.push(
            <>
                <i className="fas fa-exclamation-triangle text-red-600 text-xs inline-block"></i>
                <span key={i} className="text-left text-red-600 text-xs my-1 ml-2">{e}</span>
            </>
        )
    })
    return <div>
        {items}
    </div>
}

export default class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            success_page: false,
            name: "",
            email: "",
            content: "",
            errors: {
                name: [],
                email: [],
                content: [],
            }
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    handleContentChange = (event) => {
        this.setState({ content: event.target.value })
    }

    varidateRequired(prop, message) {
        if (prop === "") return [message]
        return []
    }

    varidateEmailFormat = (prop, message, errors) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(prop)) return
        if (errors.length != 1) errors.push(message)
    }


    varidate = () => {
        const nameErrors = this.varidateRequired(this.state.name, "名前を入力してください。")
        const emailErrors = this.varidateRequired(this.state.email, "メールアドレスを入力してください")
        const contentErrors = this.varidateRequired(this.state.content, "本文を入力してください。")
        this.varidateEmailFormat(this.state.email, "不正なメールアドレスです", emailErrors)
        console.log(nameErrors, emailErrors, contentErrors)
        this.setState({
            errors: {
                name: nameErrors,
                email: emailErrors,
                content: contentErrors
            }
        })
        if (nameErrors.length != 0 || emailErrors.length != 0 || contentErrors.length != 0) return false
        return true
    }

    sendMail = async () => {
        console.log("send")
        this.setState({ success_page: true })
        const data = {
            name: this.state.name,
            email: this.state.email,
            content: this.state.content,
            callback: true,
        }
        let endpoint = process.env.REACT_APP_EMAIL_API_URL
        fetch(endpoint, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify(data)
        }).then(res => res.json).then((resJson) => { console.log(resJson) })
    }

    handleSubmit = (event) => {
        if (this.varidate()) this.sendMail()
        else {
            return
        }
        event.preventDefault();
        this.setState({
            name: "",
            email: "",
            content: "",
            errors: {
                name: [],
                email: [],
                content: [],
            }
        })
    }

    render() {
        if (this.state.success_page) {
            return <div className="contact md:mx-auto md:w-10/12 lg:w-8/12 ">
                <div className={h1WrapperStyle}>
                    <img src="/img/contact.JPG" className={h1ImgStyle} alt="contact" />
                    <h1 className={h1TextStyle} >
                        CONTACT</h1>
                </div>
                <div className="hidden lg:flex">
                <div className="hidden lg:block lg:mx-10 lg:mt-10 lg:mr-5 lg:bg-blue-900 full relative">
                    <img src="/img/contact.JPG" className="w-full h-64 object-cover opacity-75" />
                    <label class="absolute bottom-0 right-0 mb-5 mr-10 text-white text-4xl font-bold">CONTACT</label>
                </div>
            </div>
                <div className=" mx-5 my-4 md:my-10 md:mx-20">
                    <h2 className="text-2xl font-bold md:text-3xl">送信完了</h2>
                    <p className="text-sm text-gray-700 md:text-base">お問い合わせありがとうございます。</p>
                    <p className="mt-5 text-sm md:text-base">三日以内にこちらからの連絡がない場合、以下の連絡先にお問い合わせいただければ幸いです。</p>
                    <ul className="mx-5 my-2 md:text-lg">
                        <CopyToClipboard text="sho0126hiro@gmail.com">
                            <li>sho0126hiro@gmail.com
                            <i class="far fa-copy ml-1 text-xs text-gray-700"></i>
                            </li>
                        </CopyToClipboard>
                        <CopyToClipboard text="s20613@tokyo.kosen-ac.jp" >
                            <li>s20613@tokyo.kosen-ac.jp<i class="far fa-copy ml-1 text-xs text-gray-700"></i></li>
                        </CopyToClipboard>
                    </ul>
                    <Link to="/" className="underline text-center block mt-4 md:text-lg md:mt-5">Homeに戻る</Link>
                </div>
            </div>
        }
        return <div className="contact lg:w-7/12 lg:mx-auto">
            <div className={`${h1WrapperStyle}`}>
                <img src="/img/contact.JPG" className={h1ImgStyle} alt="contact" />
                <h1 className={h1TextStyle} >
                    CONTACT
            </h1>
            </div>

            <div className="hidden lg:flex">
                <div className="hidden lg:block lg:mx-10 lg:mt-10 lg:mr-5 lg:bg-blue-900 full relative">
                    <img src="/img/contact.JPG" className="w-full h-64 object-cover opacity-75" />
                    <label class="absolute bottom-0 right-0 mb-5 mr-10 text-white text-4xl font-bold">CONTACT</label>
                </div>
            </div>

            <div className="mt-10 lg:mx-20">
                <div className="w-9/12 mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className={`border-2 rounded  w-full py-3 pl-3 ${this.state.errors.name.length ? "border border-red-400" : " mb-5 "}`}
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                    <ErrorMessage errors={this.state.errors.name} />
                </div>
                <div className="w-9/12 mx-auto pt-2">
                    <input
                        type="text"
                        placeholder="e-mail address"
                        className={`border-2 rounded  w-full py-3 pl-3 ${this.state.errors.email.length ? "border border-red-400" : "mb-5"}`}
                        value={this.state.email}
                        onChange={this.handleEmailChange} />
                    <ErrorMessage errors={this.state.errors.email} />
                </div>
                <div className="w-9/12 mx-auto pt-2">
                    <textarea
                        type="text"
                        placeholder="Inquery Contents"
                        className={`border-2 rounded  w-full h-56 py-3 pl-3 ${this.state.errors.content.length ? "border border-red-400" : "mb-5"}`}
                        value={this.state.content}
                        onChange={this.handleContentChange} />
                    <ErrorMessage errors={this.state.errors.content} />
                </div>
            </div>
            <div className={`text-center ${this.state.errors.content.length ? "mt-1" : ""}`}>
                <button className="bg-blue-700 hover:bg-blue-800 text-blue-100 font-bold py-2 px-10 mb-5 rounded"
                    onClick={this.handleSubmit}>
                    Submit
            </button>
            </div>
        </div>
    }
}
