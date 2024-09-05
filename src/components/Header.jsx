import { useState } from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';

// import LOGO from '../img/logo.png'
import LOGO from '../img/daotruyen_logo.jpg';

import { IoSearch, IoMoonOutline, IoPeopleOutline, IoCloudUploadOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";


function Header() {

    const [showLogin, setShowLogin] = useState(false)
    const [turnOnLogin, setTurnOnLogin] = useState(false)
    const [toggleHiddenLogin, setToggleHiddenLogin] = useState(false)

    const handleTurnOnLogin = () => {
        setShowLogin(true)
        setTurnOnLogin(true)
        setToggleHiddenLogin(true)
    }

    const handleTurnOnRegister = () => {
        setShowLogin(true)
        setTurnOnLogin(true)
        setToggleHiddenLogin(false)
    }

    return (
        <header>
            <div className='border-b border-solid h-16'>
                <div className='mx-24'>
                    <nav className='w-full flex justify-start items-center px-6'>
                        <div className='h-16 -ml-3 pr-3 border-r border-solid'>
                            <a className='' href="#">
                                <img className='w-32 h-full p-1 object-contain' src={LOGO} alt="logo" />
                            </a>
                        </div>
                        <div className='px-3 w-[30%]'>
                            <form className='relative border border-solid border-[#ccc] rounded-lg'>
                                <i className='text-xl p-2 absolute top-0 left-0 bottom-0'><IoSearch/></i>
                                <input className='border-none py-1.5 pl-10 w-full rounded-lg' type="text" placeholder='Tìm truyện...'/>
                            </form>
                        </div>
                        <div className='h-16 pr-3 border-r border-solid'>
                                <img className='w-32 h-full' src={CHEAT} alt="" />
                        </div>
                        <div className='ml-auto text-xl'>
                            <i><IoMoonOutline/></i>
                        </div>
                        <div className='flex items-center ml-7'>
                            <button onClick={handleTurnOnLogin} className='px-2.5 py-1.5 bg-main text-white mr-1 rounded' to={"/login"}>Đăng nhập</button>
                            <button onClick={handleTurnOnRegister} className='px-2.5 py-1.5 bg-main text-white rounded' to={"/register"}>Đăng ký</button>

                            {turnOnLogin && <Login showLogin={showLogin} onSetShowLogin={setShowLogin} toggleHiddenLogin={toggleHiddenLogin} onSetToggleHiddenLogin={setToggleHiddenLogin}/>}
                        </div>
                    </nav>
                </div>
            </div>
            <div className='h-16 border-b border-solid'>
                <nav className='h-full flex mx-24 px-6'>
                    <ul className='flex items-center gap-5'>
                        <li>Trang chủ</li>
                        <li>Truyện mới</li>
                        <li className='flex items-center gap-1'>
                            <i>
                                <BiCategory />
                            </i>
                            <span>Thể loại</span>
                        </li>
                        <li>Truyện full</li>
                        <li className='flex items-center gap-1'>
                            <i>
                                <IoCloudUploadOutline />
                            </i>
                            <span>Truyện sáng tác</span>
                        </li>
                        <li className='flex items-center gap-1'>
                            <i>
                                <IoPeopleOutline />
                            </i>
                            <span>Team</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;