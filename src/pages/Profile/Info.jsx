import { useEffect, useRef, useState } from "react";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import TitleProfile from "./TitleProfile";
import { useUserContext } from "../../contexts/users_context";
import AVATAR from '../../img/avatar_default.jpg'
import { notify } from "../../notification/toast";

function Info() {
    const { avatarUserRef } = useUserContext()

    const nameRef = useRef(localStorage.getItem("name"))
    const emailRef = useRef(localStorage.getItem("email"))

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            {avatar && URL.revokeObjectURL(avatar.preview)}
        }
    }, [avatar])

    const fetchUploadAvatar = () => {
        const userToken = JSON.parse(localStorage.getItem("accessToken"))

        const formData = new FormData()

        formData.append("token", userToken)
        formData.append("file", avatar)

        fetch("https://daotruyenapi.onrender.com/user/upload-avatar", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${userToken}`
            },
            body: formData
        })
        .then((response) => {
            if(response.ok) {
                notify("Đổi ảnh đại diện thành công", "success")
                avatarUserRef.current = response.data
                console.log(response)
                console.log("avatarUserRef: ", avatarUserRef)
            } else {
                notify("Có lỗi", "warning")
            }
        })
        .catch((error) => {
            console.log("Invalid update avatar", error)
        })
    }

    const handleAvatarPreview = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    console.log("avatarUserRef", avatarUserRef)

    return (
        <div>
            <TitleProfile title={"Thông tin tài khoản"}/>
            <div className="bg-white p-8 shadow-md">
                <div className="grid grid-cols-[240px_minmax(auto,_1fr)]">
                    <div className="text-center">
                            {avatarUserRef.current ? 
                            <img className="w-60 h-60 object-cover rounded-full" src={avatarUserRef.current && avatarUserRef.current.imageSrc} alt="avatar" /> :
                            avatar ? 
                            <img className="w-60 h-60 object-cover rounded-full" src={avatar.preview} alt="avatar" /> : 
                            <img className="w-60 h-60 object-cover rounded-full" src={AVATAR} alt="avatar" />
                        }
                        <div className="mt-5 ">
                            <label htmlFor="avatar" className="inline-block px-3.5 py-2.5 text-white bg-main cursor-pointer rounded border border-solid border-main hover:bg-white hover:text-main">Tải ảnh lên</label>
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
                    <button 
                        className="px-8 py-2.5 text-white bg-main cursor-pointer rounded border border-solid border-main hover:bg-white hover:text-main"
                        onClick={fetchUploadAvatar}
                    >Lưu thay đổi</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
        
    )
}
export default Info;