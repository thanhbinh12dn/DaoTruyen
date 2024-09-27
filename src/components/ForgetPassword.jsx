import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const fetchForgetPassword = async () => {
        try {
            const response = await axios.post(`https://daotruyenapi.onrender.com/authenticate/forget-password?${email}`)
            if(response) {
                console.log(response)
                // navigate("/")
            }
        } catch (error) {
            console.log("Invalid forget password", error)
        }
    }

    const handleSubmitForgetPassword = (e) => {
        e.preventDefault()
        fetchForgetPassword()
    }

    return (
        <div className="p-10 bg-bgMain w-full">
            <div className="w-[40%] mx-auto p-6 bg-white shadow-md rounded-md">
                <p>Bạn quên mật khẩu? Vui lòng nhập địa chỉ email của bạn. Bạn sẽ nhận được một mã đăng nhập gửi về email.</p>
                <div className="mt-5">
                    <label htmlFor="forgot_password">Email</label>
                    <input 
                        id="forgot_password" 
                        className="w-full mt-2 px-2 py-1 border border-solid border-black" 
                        type="text" 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-6 flex justify-end">
                    <button 
                        className="px-5 py-2 bg-main text-white rounded-md border border-solid border-main hover:text-main hover:bg-white"
                        onClick={handleSubmitForgetPassword}
                    >Gửi</button>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;