import { IoPersonOutline } from "react-icons/io5";

import Banner from './Banner'

import PROPOSE1 from '../img/propose1.jpg'
import PROPOSE2 from '../img/propose2.jpg'
import PROPOSE3 from '../img/propose3.jpg'

function Propose() {
    return (
        <section className="mt-2">
            <div className="mx-20 px-4">
                <h5 className="text-xl font-medium uppercase">Đề xuất truyện hay</h5>
                <hr className="my-4"/>
                <div className='shadow-lg rounded-md'>
                    <div className='p-4 bg-white mb-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="grid grid-rows-3">
                                <div className='flex px-2 pt-2'>
                                    <div className="w-1/5">
                                        <a href="#">
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE1} alt="Propose1" />
                                        </a>                                   
                                    </div>
                                    <div className='ml-3 w-4/5'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-white font-bold inline-block bg-[#7dbd5b] rounded uppercase">Hết</span>
                                            <a className='text-sm font-bold opacity-90' href="#">MINH NGUYỆT CHIẾU TA</a>
                                        </div>
                                        <p className='text-sm opacity-85 mt-2'>Nhấn theo dõi truyện để nhận thông báo lên chương mới nhé các bác ơiiii [Truyện dài]Lịc..</p>
                                        <a className='mt-2 flex items-center text-sm opacity-90' href="#">
                                            <i className='mr-2 pb-0.5'><IoPersonOutline /></i>
                                            <span>Xoăn dịch truyện</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex px-2 pt-2'>
                                    <div className='w-1/5'>
                                        <a href="#">
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE2} alt="Propose2" />
                                        </a>                                    
                                    </div>
                                    <div className='ml-3 w-4/5'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-white font-bold inline-block bg-[#7dbd5b] rounded uppercase">Hết</span>
                                            <a className='text-sm font-bold opacity-90' href="#">Tân Di</a>
                                        </div>
                                        <p className='text-sm opacity-85 mt-2'>Team Dưa hấu không ngọt Giới thiệu Tôi đã mở một phòng phát sóng trực tiếp về huyền học...</p>
                                        <a className='mt-2 flex items-center text-sm opacity-90' href="#">
                                            <i className='mr-2 pb-0.5'><IoPersonOutline /></i>
                                            <span>Dưa hấu không ngọt</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex px-2 pt-2'>
                                    <div className='w-1/5'>
                                        <a href="#">
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE3} alt="Propose3" />
                                        </a>                               
                                    </div>
                                    <div className='ml-3 w-4/5'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-white font-bold inline-block bg-[#7dbd5b] rounded uppercase">Hết</span>
                                            <a className='text-sm font-bold opacity-90' href="#">Chưởng Châu</a>
                                        </div>
                                        <p className='text-sm opacity-85 mt-2'>Ta và bạch nguyệt quang cùng lúc bị ngã xuống nước, thái tử liền bảo. "Cứu trắc phi"..</p>
                                        <a className='mt-2 flex items-center text-sm opacity-90' href="#">
                                            <i className='mr-2 pb-0.5'><IoPersonOutline /></i>
                                            <span>Cẩm Hân</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-rows-3">
                                <div className='flex px-2 pt-2'>
                                    <div className='w-1/5'>
                                        <a href='#'>
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE1} alt="Propose1" />
                                        </a>                                    
                                    </div>
                                    <div className='ml-3 w-4/5'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-white font-bold inline-block bg-[#7dbd5b] rounded uppercase">Hết</span>
                                            <a className='text-sm font-bold opacity-90' href="#">MINH NGUYỆT CHIẾU TA</a>
                                        </div>
                                        <p className='text-sm opacity-85 mt-2'>Nhấn theo dõi truyện để nhận thông báo lên chương mới nhé các bác ơiiii [Truyện dài]Lịc..</p>
                                        <a className='mt-2 flex items-center text-sm opacity-90' href="#">
                                            <i className='mr-2 pb-0.5'><IoPersonOutline /></i>
                                            <span>Xoăn dịch truyện</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex px-2 pt-2'>
                                    <div className='w-1/5'>
                                        <a href='#'>
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE2} alt="Propose2" />
                                        </a>                                    </div>
                                    <div className='ml-3 w-4/5'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-white font-bold inline-block bg-[#7dbd5b] rounded uppercase">Hết</span>
                                            <a className='text-sm font-bold opacity-90' href="#">Tân Di</a>
                                        </div>
                                        <p className='text-sm opacity-85 mt-2'>Team Dưa hấu không ngọt Giới thiệu Tôi đã mở một phòng phát sóng trực tiếp về huyền học...</p>
                                        <a className='mt-2 flex items-center text-sm opacity-90' href="#">
                                            <i className='mr-2 pb-0.5'><IoPersonOutline /></i>
                                            <span>Dưa hấu không ngọt</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='flex px-2 pt-2'>
                                    <div className='w-1/5'>
                                        <a href='#'>
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE3} alt="Propose3" />
                                        </a>                                    </div>
                                    <div className='ml-3 w-4/5'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-white font-bold inline-block bg-[#7dbd5b] rounded uppercase">Hết</span>
                                            <a className='text-sm font-bold opacity-90' href="#">Chưởng Châu</a>
                                        </div>
                                        <p className='text-sm opacity-85 mt-2'>Ta và bạch nguyệt quang cùng lúc bị ngã xuống nước, thái tử liền bảo. "Cứu trắc phi"..</p>
                                        <a className='mt-2 flex items-center text-sm opacity-90' href="#">
                                            <i className='mr-2 pb-0.5'><IoPersonOutline /></i>
                                            <span>Cẩm Hân</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="mt-3">
                                <button>
                                    <span className="w-3 h-3 rounded-3xl bg-slate-300 block m-1.5"></span>
                                </button>
                                <button>
                                    <span className="w-3 h-3 rounded-3xl bg-slate-300 block m-1.5"></span>
                                </button>
                                <button>
                                    <span className="w-3 h-3 rounded-3xl bg-slate-300 block m-1.5"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Banner />
            </div>
            
        </section>
    )
}

export default Propose;