import { useState, useCallback } from 'react'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState({})

    async function handleRegister() {
        console.log('re-render')
        const response = await fetch("https://daotruyenapi.onrender.com/authentication/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: {
                "content-type": "Application/json",
                "Accept": "application/json"
            }
        });
        const responseJSON = await response.json();
        
        setData(responseJSON)
        // fetch("https://daotruyenapi.onrender.com/authentication/register", {
        //     method: "POST",
        //     body: JSON.stringify({ name, email, password }),
        //     headers: {
        //         "content-type": "Application/json",
        //         "Accept": "application/json"
        //     }
        // }).then((res) => {
        //     setData(res)
        // })
    }

    console.log(data)

    return (
        <div className="bg-[#a1d5b2] h-screen flex items-center justify-center">
            <div className="w-80 h-96 bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                <div>
                <h1 className="text-[#8D493A] text-center font-semibold text-2xl mt-2 mb-6">
                    Đăng Ký
                </h1>
                <form action='#'>
                    <div>
                        <label className="text-[#8D493A] text-sm block cursor-text" htmlFor="name">
                            Tên người dùng
                        </label>
                        <input
                            className="p-1 border border-slate-500 outline-none focus:border-[#E8B86D] rounded"
                            type="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <label className="text-[#8D493A] text-sm block cursor-text" htmlFor="email">
                            Tài khoản
                        </label>
                        <input
                            className="p-1 border border-slate-500 outline-none focus:border-[#E8B86D] rounded"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button
                            className="mt-5 py-2 px-6 mx-auto bg-[#A28B55] text-white rounded"
                            onClick={handleRegister}
                        >
                            Đăng ký
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register;