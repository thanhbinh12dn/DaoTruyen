import { useState, useEffect } from 'react'

import { IoClose } from "react-icons/io5";

import validationForm from '../validation/validationForm';
import axios from 'axios';

function Register({ onSetShowRegister, formLoginOpen }) {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validationForm(values, "signUp"))
    }, [values, touched])

    const handleRegister = async (obj) => {
        const { name, email, password, confirmPassword } = obj
        const response = await axios.post("https://daotruyenapi.onrender.com/authentication/register", 
            {
                name, 
                email, 
                password, 
                confirmPassword 
            })
            .then((res) => {
                console.log('response', res)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    const handleInput = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleBlur = e => {
        setTouched({ ...touched, [e.target.name]: true })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(!Object.keys(errors).length  && values.name && values.email && values.password && values.confirmPassword ) {
            // handleRegister(values)
        } else {
            setErrors(validationForm(values, "signUp"))
            setTouched({ 
                name: true,
                email: true,
                password: true,
                confirmPassword: true
            })
        }
    }

    // console.log('errors', errors, 'input name: ', values.name)

    return (
        <div 
            className={`fixed top-0 right-0 bottom-0 left-0 z-50 bg-[rgba(0,0,0,0.4)] overflow-y-auto overflow-x-hidden flex items-center justify-center`}>
            <div className="min-h-[345px] relative w-96 bg-white rounded-2xl overflow-hidden">
                <div 
                    className="absolute right-3 top-3 p-1 cursor-pointer opacity-65 hover:text-main text-2xl"
                    onClick={() => onSetShowRegister(false)}
                >
                    <i><IoClose /></i>
                </div>
                <div className="px-8 pt-7 pb-7 flex flex-wrap">
                    <h1 className="w-full text-center font-semibold text-2xl mt-2 mb-6">
                        Đăng Ký
                    </h1>
                    <form className="w-full" noValidate onSubmit={handleSubmit}>
                        <div>
                            <label className="text-sm font-medium opacity-90 block cursor-text" htmlFor="name">
                                Tên người dùng
                            </label>
                            <input
                                className={`w-full py-1 px-2 border ${errors.name && touched.name ? `border-red-600` : !errors.name && touched.name && values.name !== "" ? `border-[#1EA71B]` : `border-gray-500`} outline-none rounded`}
                                id="name"
                                type="text"
                                name="name"
                                value={values.name}
                                placeholder="Tên người dùng"
                                onBlur={handleBlur}
                                onChange={handleInput}
                            />
                            {errors.name && touched.name && <span className="text-red-600 text-sm">{errors.name}</span>}
                        </div>
                        <div className="mt-6">
                            <label className="text-sm font-medium opacity-90 block cursor-text" htmlFor="email">
                                Tài khoản
                            </label>
                            <input
                                className={`w-full py-1 px-2 border ${errors.email && touched.email ? `border-red-600` : !errors.email && touched.email && values.email !== "" ? `border-[#1EA71B]` : `border-gray-500`} outline-none rounded`}
                                id="email"
                                type="email"
                                name="email"
                                value={values.email}
                                placeholder="VD: daotruyen@gmail.com"
                                onBlur={handleBlur}
                                onChange={handleInput}
                            />
                            {errors.email && touched.email && <span className="text-red-600 text-sm">{errors.email}</span>}
                        </div>
                        <div className="mt-6">
                            <label className="text-sm font-medium opacity-90 block cursor-text" htmlFor="password">
                                Mật khẩu
                            </label>
                            <input
                                className={`w-full py-1 px-2 border ${errors.password && touched.password ? `border-red-600` : !errors.password && touched.password && values.password !== "" ? `border-[#1EA71B]` : `border-gray-500`} outline-none rounded`}
                                id="password"
                                type="password"
                                name="password"
                                value={values.password}
                                placeholder="Mật khẩu"
                                onBlur={handleBlur}
                                onChange={handleInput}
                            />
                            {errors.password && touched.password && <span className="text-red-600 text-sm">{errors.password}</span>}

                        </div>
                        <div className="mt-6">
                            <label className="text-sm font-medium opacity-90 block cursor-text" htmlFor="confirmPassword">
                               Xác nhận mật khẩu
                            </label>
                            <input
                                className={`w-full py-1 px-2 border ${errors.confirmPassword && touched.confirmPassword ? `border-red-600` : !errors.confirmPassword && touched.confirmPassword && values.confirmPassword !== "" ? `border-[#1EA71B]` : `border-gray-500`} outline-none rounded`}
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={values.confirmPassword}
                                placeholder="Xác nhận mật khẩu"
                                onBlur={handleBlur}
                                onChange={handleInput}
                            />
                            {errors.confirmPassword && touched.confirmPassword && <span className="text-red-600 text-sm">{errors.confirmPassword}</span>}

                        </div>
                        <div className="text-center">
                            <button
                                className="mt-5 py-2 px-6 mx-auto bg-main text-white rounded"
                                
                            >
                                Đăng ký
                            </button>
                        </div>
                    </form>
                    <div className="mt-3 ml-auto hover:text-main">
                        <a href="#" onClick={formLoginOpen}>Đã có tài khoản</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;