import { useState } from 'react';
import { Link } from 'react-router-dom';

import { IoSearch, IoMoonOutline, IoPeopleOutline, IoCloudUploadOutline, IoLogIn, IoClose } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { BsList } from "react-icons/bs";

import Login from './Login';

// import LOGO from '../img/logo.png'
import LOGO from '../img/logo.png';


function Header() {

    const [showLogin, setShowLogin] = useState(false)
    const [turnOnLogin, setTurnOnLogin] = useState(false)
    const [toggleHiddenLogin, setToggleHiddenLogin] = useState(false)
    const [showMenu, setShowMenu] = useState(false) 

    const handleTurnOnLogin = () => {
        setShowLogin(true)
        // setTurnOnLogin(true)
        setToggleHiddenLogin(true)
    }

    const handleTurnOnRegister = () => {
        setShowLogin(true)
        // setTurnOnLogin(true)
        setToggleHiddenLogin(false)
    }

    return (
        <header>
            <div className='border-b border-solid h-16'>
                <div className='lg:px-24'>
                    <nav className='w-full flex justify-start items-center px-6'>
                        {/** Icon menu list */}
                        <div
                            className='text-3xl lg:hidden'
                            onClick={() => setShowMenu(true)}
                        >
                            <i><BsList/></i>
                        </div>
                        {/** Menu list mobile */}
                        <div className={`${showMenu ? '': 'hidden'} fixed top-0 right-0 bottom-0 left-0 z-40 bg-[rgba(0,0,0,0.4)]`}>
                            <div className='relative w-[80%] h-full p-2 pt-5 bg-white transition-all duration-[0.3s]'>
                                <div>
                                    <div className='flex'>
                                        <img className='w-48 h-32' src={LOGO} alt="logo" />
                                        <div 
                                            className='w-full text-4xl text-main'
                                            onClick={handleTurnOnLogin}
                                        >
                                            <i className='mt-[88px] p-0.5 float-right'><IoLogIn/></i>
                                        </div>
                                    </div>
                                    <div className='mt-2'>
                                        <ul className='p-2'>
                                            <li className='block p-2 border-b border-solid border-[#ccc]'>Trang chủ</li>
                                            <li className='block p-2 border-b border-solid border-[#ccc]'>Truyện mới</li>
                                            <li className='p-2 border-b border-solid border-[#ccc] flex items-center gap-1'>
                                                <i className='-mt-1'>
                                                    <BiCategory />
                                                </i>
                                                <span>Thể loại</span>
                                            </li>
                                            <li className='block p-2 border-b border-solid border-[#ccc]'>Truyện full</li>
                                            <li className='p-2 border-b border-solid border-[#ccc] flex items-center gap-1'>
                                                <i>
                                                    <IoPeopleOutline />
                                                </i>
                                                <span>Team</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/** Icon close */}
                                <div 
                                    className='absolute top-3 right-5 p-1 text-3xl opacity-50'
                                    onClick={() => setShowMenu(false)}
                                >
                                    <i><IoClose/></i>
                                </div>
                            </div>
                        </div>
                        <div className='h-16 lg:-ml-3 pr-3 border-r border-solid'>
                            <Link to={"/"}>
                                <img className='w-32 h-full p-1 object-contain' src={LOGO} alt="logo" />
                            </Link>
                        </div>
                        <div className='px-3 w-[55%] lg:w-[30%]'>
                            <form className='relative border border-solid border-[#ccc] rounded-lg'>
                                <i className='text-xl p-2 absolute top-0 left-0 bottom-0'><IoSearch/></i>
                                <input className='border-none py-1.5 pl-10 w-full rounded-lg' type="text" placeholder='Tìm truyện...'/>
                            </form>
                        </div>
                        {/* <div className='h-16 pr-3 border-r border-solid'>
                                <img className='w-32 h-full' src={CHEAT} alt="" />
                        </div> */}
                        {/* <div className='ml-auto text-xl'>
                            <i><IoMoonOutline/></i>
                        </div> */}
                        <div className='hidden ml-auto lg:flex items-center'>
                            <button onClick={handleTurnOnLogin} className='px-2.5 py-1.5 bg-main text-white mr-1 rounded'>Đăng nhập</button>
                            <button onClick={handleTurnOnRegister} className='px-2.5 py-1.5 bg-main text-white rounded'>Đăng ký</button>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='hidden lg:block h-16 border-b border-solid'>
                <nav className='h-full mx-24 px-6'>
                    <ul className='h-full flex justify-between items-center gap-5'>
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
            {/**Modal login */}
            {showLogin && <Login onSetShowLogin={setShowLogin} toggleHiddenLogin={toggleHiddenLogin} onSetToggleHiddenLogin={setToggleHiddenLogin}/>}
        </header>
    )
}

export default Header;