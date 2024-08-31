import { IoEyeOutline, IoSaveOutline } from "react-icons/io5";

import COMPLETED1 from '../img/completed1.jpg'
import COMPLETED2 from '../img/completed2.jpg'
import COMPLETED3 from '../img/completed3.jpg'
import COMPLETED4 from '../img/completed4.jpg'
import COMPLETED5 from '../img/completed5.jpg'
import COMPLETED6 from '../img/completed6.jpg'
import COMPLETED7 from '../img/completed7.jpg'
import COMPLETED8 from '../img/completed8.jpg'

function Completed() {
    return (
        <section className="mt-12">
            <div>
                <div className='relative'>
                            <h5 className="text-xl font-medium uppercase">Truyện đã hoàn thành</h5>
                            <button className='absolute top-0 right-0 px-2 py-1 border border-solid border-[#338f75] text-sm text-[#338f75] rounded-3xl'>Xem thêm</button>
                        </div>
                <hr className="my-4"/>
                <div className="-mx-2">
                    <div className="grid grid-cols-4">
                        <div className="px-2">
                            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-[260px] object-cover' src={COMPLETED1} alt="completed1" />
                                    </a>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                            267,184
                                        </span>
                                        <span className="flex items-center gap-1 ml-3">
                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                            64
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4 bg-white'>
                                        <a href="#">
                                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>ÁNH TRĂNG KHÔNG HOÀN HẢO</h6>
                                        </a>
                                        <div className='text-xs'>
                                            <span>1351</span>
                                            <span className='float-right'>12 giây</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-[260px] object-cover' src={COMPLETED2} alt="completed2" />
                                    </a>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                            267,184
                                        </span>
                                        <span className="flex items-center gap-1 ml-3">
                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                            64
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4 bg-white'>
                                        <a href="#">
                                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>Một Đêm Xuân</h6>
                                        </a>
                                        <div className='text-xs'>
                                            <span>1351</span>
                                            <span className='float-right'>12 giây</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-[260px] object-cover' src={COMPLETED3} alt="completed3" />
                                    </a>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                            267,184
                                        </span>
                                        <span className="flex items-center gap-1 ml-3">
                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                            64
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4 bg-white'>
                                        <a href="#">
                                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>Thiên Kim Giả Là Mèo Chiêu Tài</h6>
                                        </a>
                                        <div className='text-xs'>
                                            <span>1351</span>
                                            <span className='float-right'>12 giây</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-[260px] object-cover' src={COMPLETED4} alt="completed4" />
                                    </a>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                            267,184
                                        </span>
                                        <span className="flex items-center gap-1 ml-3">
                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                            64
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4 bg-white'>
                                        <a href="#">
                                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>Yêu đương mù quáng</h6>
                                        </a>
                                        <div className='text-xs'>
                                            <span>1351</span>
                                            <span className='float-right'>12 giây</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-[260px] object-cover' src={COMPLETED5} alt="completed5" />
                                    </a>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                            267,184
                                        </span>
                                        <span className="flex items-center gap-1 ml-3">
                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                            64
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4 bg-white'>
                                        <a href="#">
                                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>Linh Thú Của Phản Diện Là Capybara</h6>
                                        </a>
                                        <div className='text-xs'>
                                            <span>1351</span>
                                            <span className='float-right'>12 giây</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-[260px] object-cover' src={COMPLETED6} alt="completed6" />
                                    </a>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                            267,184
                                        </span>
                                        <span className="flex items-center gap-1 ml-3">
                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                            64
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4 bg-white'>
                                        <a href="#">
                                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>Trùng Sinh Vào Vai Nữ Phụ Ở Mạt Thế</h6>
                                        </a>
                                        <div className='text-xs'>
                                            <span>1351</span>
                                            <span className='float-right'>12 giây</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-[260px] object-cover' src={COMPLETED7} alt="completed7" />
                                    </a>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                            267,184
                                        </span>
                                        <span className="flex items-center gap-1 ml-3">
                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                            64
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4 bg-white'>
                                        <a href="#">
                                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>Dược Dẫn</h6>
                                        </a>
                                        <div className='text-xs'>
                                            <span>1351</span>
                                            <span className='float-right'>12 giây</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-2">
                            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='relative'>
                                    <a href="#">
                                        <img className='w-full h-[260px] object-cover' src={COMPLETED8} alt="completed8" />
                                    </a>
                                    <div className="absolute top-2 right-2">
                                        <span className="px-1.5 py-1 bg-red-600 rounded text-sm text-white uppercase font-medium">Full</span>
                                    </div>
                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                        <span className="flex items-center gap-1">
                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                            267,184
                                        </span>
                                        <span className="flex items-center gap-1 ml-3">
                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                            64
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4 bg-white'>
                                        <a href="#">
                                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>Xuyên Sách, Tôi Thành Thái Tử Phi, Bạn Thân Là Thái Giám</h6>
                                        </a>
                                        <div className='text-xs'>
                                            <span>1351</span>
                                            <span className='float-right'>12 giây</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <a className="px-2.5 py-1.5 mb-4 bg-[#338f75] text-sm text-white rounded hover:opacity-85" href="#">Xem thêm</a>
                </div>
            </div>
        </section>
    )
}

export default Completed;