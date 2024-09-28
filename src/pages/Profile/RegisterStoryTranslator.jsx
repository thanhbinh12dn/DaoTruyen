import { useState } from "react";

import { useUserContext } from '../../contexts/users_context'
import TitleProfile from "./TitleProfile";

function RegisterStoryTranslator() {
    const { requestedRegister, fetchRegisterStoryTranslator } = useUserContext()

    const handleRegisterStoryTranslator = (e) => {
        e.preventDefault()
        const accessToken = localStorage.getItem("accessToken")
        const userToken = JSON.parse(accessToken)
        fetchRegisterStoryTranslator(accessToken, userToken)
    }

    console.log('requested register: ', requestedRegister)

    return (
        <div>
            <TitleProfile title={"Đăng ký làm nhà dịch truyện"} />
            <div className="bg-white p-4 md:p-6 shadow-md h-96">
                <div>
                    <p className="mb-4">Bạn có muốn trở thành người truyền tải những bộ truyện hay đến với mọi người? Đăng ký làm nhà dịch truyện ngay ^^</p>
                    {requestedRegister ? 
                        <p className="mt-4">Đã gửi yêu cầu đăng ký thành công! Bạn vui lòng chờ admin bọn tớ xác nhận nhé.</p> :
                        <button 
                            className="px-5 py-2 bg-main text-white border border-solid border-main hover:text-main hover:bg-white rounded-lg"
                            onClick={handleRegisterStoryTranslator}
                        >Đăng ký làm nhà dịch truyện</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default RegisterStoryTranslator;