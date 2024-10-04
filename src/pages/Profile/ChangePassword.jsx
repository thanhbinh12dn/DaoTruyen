import { useState, useEffect } from 'react'

import TitleProfile from "./TitleProfile";

import validationForm from '../../validation/validationForm';
import { change_password } from '../../url/users_url'

function ChangePassword() {

    const [values, setValues] = useState({ 
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validationForm(values, "changePassword"))
    }, [values, touched])

    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validationForm(values, "changePassword"))

        if(!Object.keys(errors).length && values.oldPassword !== "" && values.newPassword !== "" && values.confirmNewPassword !== "") {
            const userToken = JSON.stringify(localStorage.getItem("accessToken"))
            fetch(change_password, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${userToken}`
                },
                body: {
                    token: userToken,
                    oldPassword: values.oldPassword,
                    newPassword: values.newPassword
                }
            })
            .then((res) => {
                console.log('response change password ', res)
            })
            .catch((error) => {
                console.log('error change password ', error)
            })
        }
    }

    console.log(values)

    return (
        <div>
            <TitleProfile title={"Thay đổi mật khẩu"}/>
            <div className="bg-white h-[28rem] pl-36 pt-14 shadow-md">
                <div className="">
                    <form className="w-64" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="oldPassword">Nhập mật khẩu cũ</label>
                            <input 
                                id="oldPassword"
                                name="oldPassword" 
                                className="w-full py-1 px-2 border border-solid border-black" 
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleInput}
                            />
                            {errors.oldPassword && touched.oldPassword && <span className="text-red-600">{errors.oldPassword}</span>}
                        </div>
                        <div className="mt-5">
                            <label htmlFor="newPassword">Nhập mật khẩu mới</label>
                            <input 
                                id="newPassword"
                                name="newPassword" 
                                className="w-full py-1 px-2 border border-solid border-black" 
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleInput}
                            />
                            {errors.newPassword && touched.newPassword && <span className="text-red-600">{errors.newPassword}</span>}
                        </div>
                        <div className="mt-5">
                            <label htmlFor="confirmNewPassword">Xác nhận mật khẩu mới</label>
                            <input 
                                id="confirmNewPassword"
                                name="confirmNewPassword" 
                                className="w-full py-1 px-2 border border-solid border-black" 
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleInput}
                            />
                            {errors.confirmNewPassword && touched.confirmNewPassword && <span className="text-red-600">{errors.confirmNewPassword}</span>}
                        </div>
                        <button className="mt-4 py-2 px-3 bg-main text-white float-right rounded-md border border-solid border-main hover:bg-white hover:text-main">Xác nhận</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;