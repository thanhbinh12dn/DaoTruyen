import { useState } from "react";
import axios from "axios";

import TitleProfile from "./TitleProfile";

function RegisterStoryTranslator() {
    const [userToken, setUserToken] = useState(JSON.parse(localStorage.getItem("accessToken")))

    const fetchRegisterStoryTranslator = () => {
        
        if(userToken) {
            console.log('userToken: ', userToken)
            try {
                fetch(`https://daotruyenapi.onrender.com/user/regis-translator?token=${userToken}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    }
                })
                    .then((res) => {
                        console.log("response register user: ", res)
                    })
                    .catch((error) => {
                        console.log('error: ', error)
                    })
            } catch (error) {
                console.log('Invalid user token')
            }

        }
    }

    const handleRegisterStoryTranslator = (e) => {
        e.preventDefault()
        fetchRegisterStoryTranslator()
    }

    return (
        <div>
            <TitleProfile title={"Đăng ký làm nhà dịch truyện"} />
            <div className="bg-white p-4 md:p-6 shadow-md h-96">
                <div>
                    <p className="mb-4">Bạn có muốn trở thành người truyền tải những bộ truyện hay đến với mọi người? Đăng ký làm nhà dịch truyện ngay ^^</p>
                    <button 
                        className="px-5 py-2 bg-main text-white border border-solid border-main hover:text-main hover:bg-white rounded-lg"
                        onClick={handleRegisterStoryTranslator}
                    >Đăng ký làm nhà dịch truyện</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterStoryTranslator;