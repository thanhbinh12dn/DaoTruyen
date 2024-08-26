import { useState, } from "react"

import axios from 'axios'

function Login() {

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
        <div className="bg-[#a1d5b2] h-screen flex items-center justify-center">
            <div className="w-80 h-96 bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                <div>
                <h1 className="text-[#8D493A] text-center font-semibold text-2xl mt-2 mb-6">
                    Đăng nhập
                </h1>
                <form method="get">
                    <div className="">
                    <label className="text-[#8D493A] text-sm block cursor-text" htmlFor="email">
                        Tài khoản
                    </label>
                    <input
                        className="p-1 border border-slate-500 outline-none focus:border-[#E8B86D] rounded"
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
                        className="p-1 border border-slate-500 outline-none focus:border-[#E8B86D] rounded"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <div className="text-center">
                    <button
                        className="mt-5 py-2 px-6 mx-auto bg-[#A28B55] text-white rounded"
                        onClick={handleSubmit}
                    >
                        Đăng nhập
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login