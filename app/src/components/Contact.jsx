import React from 'react'
import { Link } from 'react-router-dom'
const h1WrapperStyle = "bg-blue-800 relative overflow-hidden"
const h1ImgStyle = "w-full object-cover h-56 opacity-50 overflow-hidden"
const h1TextStyle = "absolute bottom-0 right-0 mr-8 mb-4 text-gray-200 text-4xl font-bold"


export default class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            success_page: true,
            name: "",
            email: "",
            content: "",
            errors: {
                name: null,
                email: [],
                content: null,
            }
        }
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    varidateRequired(prop, message) {
        if (prop === "") return message
        return null
    }

    handleContentChange = (event) => {
        this.setState({ content: event.target.value })
    }

    validate = () => {
        const nameError = this.varidateRequired(this.state.name, "名前を入力してください。")
        const emailError = this.varidateRequired(this.state.name, "メールアドレスを入力してください")
        const contentError = this.varidateRequired(this.state.content, "本文を入力してください。")
        this.setState({
            errors: {
                name: nameError,
                email: emailError,
                content: contentError
            }
        })
    }

    handleSubmit = (event) => {
        alert("本当に送信しますか？")
        this.validate()
        event.preventDefault();
        this.setState({
            name: "",
            email: "",
            content: "",
            errors: {
                name: "",
                email: [],
                content: "",
            }            
        })
    }

    render() {
        if (this.state.success_page) {
            return <div className="contact">
                <div className={h1WrapperStyle}>
                    <img src="/img/contact.JPG" className={h1ImgStyle} alt="contact" />
                    <h1 className={h1TextStyle} >
                        CONTACT
            </h1>
                </div>
                <p>お問い合わせありがとうございます。</p>
                <p>三日以内にこちらからの連絡がない場合、以下の連絡先にお問い合わせいただければ幸いです。</p>
                <Link to="/" className="underline">home</Link>
            </div>
        }
        return <div className="contact">
            <div className={h1WrapperStyle}>
                <img src="/img/contact.JPG" className={h1ImgStyle} alt="contact" />
                <h1 className={h1TextStyle} >
                    CONTACT
            </h1>
            </div>
            <div className="text-center my-3">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="border-2 pr-24 pl-2 py-3 m-3"
                    value={this.state.name}
                    onChange={this.handleNameChange} />

                <input
                    type="email"
                    placeholder="e-mail address"
                    className="border-2  pr-24 pl-2 py-3 m-3"
                    value={this.state.email}
                    onChange={this.handleEmailChange} />
                <textarea
                    type="text"
                    placeholder="Inquery Contents"
                    className="border-2 pr-24 pl-2 py-3 m-3 h-64"
                    value={this.state.content}
                    onChange={this.handleContentChange} />
            </div>
            <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={this.handleSubmit}>
                    Submit
            </button>
            </div>
        </div>
    }
}