import { useState, useRef } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMailUnreadOutline  } from "react-icons/io5";

function ConfirmEmail() {
    const emailConfirm = useRef(localStorage.getItem("email"))
    const [confirmCode, setConfirmCode] = useState('')

    const navigate = useNavigate()

    const handleConfirmEmail = async () => {
        try {
            const response = await axios.post("https://daotruyenapi.onrender.com/authenticate/confirm-email", 
                {
                    email: JSON.parse(emailConfirm.current),
                    confirmCode
                })

            if(response.status === 200) {
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("name", response.data.name)
                console.log(response)
                return navigate('/')
            }
        } catch (error) {
            console.log('Invalid register', error)
        }
    }


    const handleResendConfirmEmail = async () => {
        try {
            const response = await axios.post(`https://daotruyenapi.onrender.com/authenticate/resend-confirm-code?email=${JSON.parse(emailConfirm.current)}`)
            if(response.status === 200) {
                localStorage.setItem("accessToken", response.data.accessToken)
                localStorage.setItem("name", response.data.name)
                console.log(response.data.accessToken)
                return navigate('/')
            }
        } catch (error) {
            console.log('Invalid resend confirm code', error)
        }
    }

    const handleSubmitConfirm = e => {
        handleConfirmEmail()
    }

    const handleResendCode = e => {
        e.preventDefault()
        handleResendConfirmEmail()
    }

    return (
        <div className="flex justify-center items-center bg-[#F3F7FA] h-[500px]">
            <div className="px-5">
                <div className="p-5 md:w-96 bg-white rounded-md shadow-md">
                    <div className="text-center">
                        <i className="inline-block text-main text-4xl p-2 border-2 border-solid border-main rounded-full"><IoMailUnreadOutline /></i>
                    </div>
                    <h1 className="w-full mt-5 text-lg font-medium opacity-90 text-center">Xác minh địa chỉ email của bạn</h1>
                    <div className="mt-6 text-center">
                        <input 
                            className="px-3 py-2 border-b border-solid placeholder:text-center outline-none" 
                            type="text" placeholder="Nhập mã tại đây" 
                            onChange={(e) => setConfirmCode(e.target.value)}
                        />
                    </div>
                    <p className="mt-3 text-sm text-center font-medium opacity-75">Để bắt đầu sử dụng tài khoản, bạn cần xác nhận đoạn mã gửi về địa chỉ email <span>{emailConfirm.current}</span> của mình</p>
                    <div className="mt-6">
                        <button 
                            className="w-full py-3 bg-main text-white rounded-md border border-solid border-main hover:text-main hover:bg-white"
                            onClick={handleSubmitConfirm}
                        >Xác minh địa chỉ email</button>
                    </div>
                    <div className="mt-6 text-sm">
                        <span>Bạn không nhận được mã? </span>
                        <a href="" onClick={handleResendCode} className="text-main font-bold">Gửi lại mã</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmEmail;