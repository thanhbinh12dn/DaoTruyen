import { useState, useEffect } from "react"

import axios from 'axios'

import { IoClose } from "react-icons/io5";

function Login({ onSetShowLogin, formRegisterOpen, setIsLoggedIn }) {

    const [showPassword, setShowPassword] = useState(false)
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async (obj) => {
        try {
            const { email, password } = obj
            const response = await axios.post("https://daotruyenapi.onrender.com/authenticate/authenticate", {
                email,
                password
            })

            if(response) {
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("name", response.data.name)
                onSetShowLogin(false)
                setIsLoggedIn(true)
            }
        } catch(error) {
            console.log("Invalid login", error)
        }
    }

    const handleInput = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(values.email !== "" && values.password !== "") {
            handleLogin(values)
        }
    }

    console.log(values)
 
    return (
        
        <div 
            className={`fixed top-0 right-0 bottom-0 left-0 z-50 bg-[rgba(0,0,0,0.4)] overflow-y-auto overflow-x-hidden flex items-center justify-center`}>
            <div className="min-h-[345px] relative w-96 bg-white rounded-2xl overflow-hidden animate-loginFaceIn">
                <div 
                    className="absolute right-3 top-3 p-1 cursor-pointer opacity-65 hover:text-main text-2xl"
                    onClick={() => onSetShowLogin(false)}
                >
                    <i><IoClose /></i>
                </div>
                <div className="px-8 pt-7 pb-7 flex flex-wrap">
                    <h1 className="w-full text-center font-semibold text-2xl mt-2 mb-4">
                        Đăng nhập
                    </h1>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mt-6">
                            <label className="text-sm font-medium opacity-90 block cursor-text" htmlFor="email">
                                Tài khoản
                            </label>
                            <input
                                className="w-full p-1 border border-gray-500 outline-none rounded"
                                id="email"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mt-6">
                            <label className="text-sm font-medium opacity-90 block cursor-text" htmlFor="password">
                                Mật khẩu
                            </label>
                            <input
                                className="w-full p-1 border border-gray-500 outline-none rounded"
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleInput}
                            />
                            <div className="mt-3">
                                <input 
                                    id="showPassword"
                                    type="checkbox"
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                                <label htmlFor="showPassword" className="ml-2">Hiện mật khẩu</label>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                className="mt-5 py-2 px-6 mx-auto bg-main text-white rounded"
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 ml-auto hover:text-main">
                        <a href="#" onClick={formRegisterOpen}>Bạn chưa có tài khoản?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login