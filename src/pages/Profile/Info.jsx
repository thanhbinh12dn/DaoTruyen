import { useEffect, useRef, useState } from "react";

import axios from "axios";

import TitleProfile from "./TitleProfile";
import AVATAR from '../../img/avatar_default.jpg'

function Info() {
    const nameRef = useRef(localStorage.getItem("name"))
    const emailRef = useRef(localStorage.getItem("email"))

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            {avatar && URL.revokeObjectURL(avatar.preview)}
        }
    }, [avatar])

    const fetchUploadAvatar = async () => {
        const response = axios.post("https://daotruyenapi.onrender.com/user/upload-avatar", {
            // token,
            file: avatar
        })

        if(response) {
            console.log("upload avatar: ", response)
        }
    }

    const handleAvatarPreview = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <div>
            <TitleProfile title={"Thông tin tài khoản"}/>
            <div className="bg-white p-8">
                <div className="grid grid-cols-[240px_minmax(auto,_1fr)]">
                    <div className="text-center">
                        {avatar ? 
                            <img className="w-60 h-60 object-cover rounded-full" src={avatar.preview} alt="avatar" /> : 
                            <img className="w-60 h-60 object-cover rounded-full" src={AVATAR} alt="avatar" />
                        }
                        <div className="mt-5 ">
                            <label htmlFor="avatar" className="inline-block px-3.5 py-2.5 text-white bg-main cursor-pointer rounded hover:opacity-90">Tải ảnh lên</label>
                            <input 
                                id="avatar" 
                                className="hidden" 
                                type="file" 
                                onChange={handleAvatarPreview}
                            />
                        </div>
                    </div>
                    <div className="p-6 w-full">
                        <h3 className="text-xl font-medium">{nameRef && JSON.parse(nameRef.current)}</h3>
                        <h5 className="mt-2 opacity-60">{emailRef && JSON.parse(emailRef.current)}</h5>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="px-8 py-2.5 text-white bg-main cursor-pointer rounded hover:opacity-90">Lưu thay đổi</button>
                </div>
            </div>
        </div>
        
    )
}
export default Info;