import LOGO from '../img/logo.png'

import { IoSearch, IoMoonOutline, IoPeopleOutline, IoCloudUploadOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";


function Header() {
    return (
        <header>
            <div className='border-b border-solid h-16'>
                <div className='mx-24'>
                    <nav className='w-full flex justify-start items-center px-6'>
                        <div className='h-16 pr-3 border-r border-solid'>
                            <a className='' href="#">
                                <img className='w-32 h-full' src={LOGO} alt="logo" />
                            </a>
                        </div>
                        <div className='px-3 w-[30%]'>
                            <form className='relative border border-solid border-[#ccc] rounded-lg'>
                                <i className='text-xl p-2 absolute top-0 left-0 bottom-0'><IoSearch/></i>
                                <input className='border-none py-1.5 pl-10 w-full rounded-lg' type="text" placeholder='Tìm truyện...'/>
                            </form>
                        </div>
                        <div className='ml-auto text-xl'>
                            <i><IoMoonOutline/></i>
                        </div>
                        <div className='flex items-center ml-7'>
                            <a className='px-2.5 py-1.5 bg-[#008cff] text-white mr-1 rounded' href="#">Đăng nhập</a>
                            <a className='px-2.5 py-1.5 bg-[#008cff] text-white rounded' href="#">Đăng ký</a>
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