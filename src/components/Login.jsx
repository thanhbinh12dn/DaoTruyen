import { useState, } from "react"

import axios from 'axios'

import { IoClose } from "react-icons/io5";

function Login({ showLogin, onSetShowLogin, toggleHiddenLogin, onSetToggleHiddenLogin }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit() {
        try {
            await axios.post("https://daotruyenapi.onrender.com/authentication/authenticate/register", {
                email,
                password
            })
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log('error: ',error)
            })
        } catch (error) {
            console.log(error)
        }
    }
 
    return (
        
        <div 
            className={`${showLogin ? `` : `hidden`} fixed top-0 right-0 bottom-0 left-0 z-30 bg-[rgba(0,0,0,0.4)] overflow-y-auto overflow-x-hidden flex items-center justify-center`}>
            <div className={`${toggleHiddenLogin ? `h-[345px]` : `h-[423px]`} relative w-96 bg-white rounded-2xl overflow-hidden animate-loginFaceIn`}>
                <div 
                    className="absolute right-3 top-3 p-1 cursor-pointer opacity-65 hover:text-[#8D493A] text-2xl"
                    onClick={() => onSetShowLogin(false)}
                >
                    <i><IoClose /></i>
                </div>
                <div className="px-8 pt-7">
                    <h1 className={`${toggleHiddenLogin ? `` : `hidden`} text-[#8D493A] text-center font-semibold text-2xl mt-2 mb-6`}>
                        Đăng nhập
                    </h1>
                    <h1 className={`${toggleHiddenLogin ? `hidden` : ``} text-[#8D493A] text-center font-semibold text-2xl mt-2 mb-6`}>
                        Đăng Ký
                    </h1>
                    <form method="get">
                        <div className={toggleHiddenLogin ? `hidden` : ``}>
                            <label className="text-[#8D493A] text-sm block cursor-text" htmlFor="name">
                                Tên người dùng
                            </label>
                            <input
                                className="w-full p-1 border border-slate-500 outline-none focus:border-[#E8B86D] rounded"
                                type="name"
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <label className="text-[#8D493A] text-sm block cursor-text" htmlFor="email">
                                Tài khoản
                            </label>
                            <input
                                className="w-full p-1 border border-slate-500 outline-none focus:border-[#E8B86D] rounded"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <label className="text-[#8D493A] text-sm block cursor-text" htmlFor="password">
                                Mật khẩu
                            </label>
                            <input
                                className="w-full p-1 border border-slate-500 outline-none focus:border-[#E8B86D] rounded"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className={`${toggleHiddenLogin ? `` : `hidden`} text-center`}>
                            <button
                                className="mt-5 py-2 px-6 mx-auto bg-[#A28B55] text-white rounded"
                                onClick={handleSubmit}
                            >
                                Đăng nhập
                            </button>
                        </div>
                        <div className={`${toggleHiddenLogin ? `hidden` : ``} text-center`}>
                            <button
                                className="mt-5 py-2 px-6 mx-auto bg-[#A28B55] text-white rounded"
                                onClick={handleSubmit}
                            >
                                Đăng ký
                            </button>
                        </div>
                    </form>
                    <div className={`${toggleHiddenLogin ? `` : `hidden`} mt-3 float-right hover:text-[#8D493A]`}>
                        <a href="#" onClick={() => onSetToggleHiddenLogin(!toggleHiddenLogin)}>Bạn chưa có tài khoản?</a>
                    </div>
                    <div className={`${toggleHiddenLogin ? `hidden` : ``} mt-3 float-right hover:text-[#8D493A]`}>
                        <a href="#" onClick={() => onSetToggleHiddenLogin(!toggleHiddenLogin)}>Đã có tài khoản</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login