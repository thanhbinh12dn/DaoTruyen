
import Banner from './Banner'
import { Link } from 'react-router-dom'

import PROPOSE1 from '../img/propose1.jpg'
import PROPOSE2 from '../img/propose2.jpg'
import PROPOSE3 from '../img/propose3.jpg'
import HANDWRITING from '../img/hand_writing.png'

function Propose() {
    return (
        <section className="mt-12">
            <div className="lg:mx-20 px-4 pt-2">
                <h5 className="text-xl font-medium uppercase">Đề xuất truyện hay</h5>
                <hr className="my-4"/>
                <div className='shadow-lg rounded-md'>
                    <div className='p-4 bg-white mb-4'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className="grid grid-rows-3">
                                <div className='flex px-2 pt-2'>
                                    <div className="lg:lg:w-1/5">
                                        <Link to={"/story-detail"}>
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE1} alt="Propose1" />
                                        </Link>
                                    </div>
                                    <div className='ml-3 w-4/5 text-sm'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-white font-medium inline-block bg-[#7dbd5b] rounded uppercase">Full</span>
                                            <a className='font-bold opacity-90' href="/story-detail">MINH NGUYỆT CHIẾU TA</a>
                                        </div>
                                        <div className="opacity-85 mt-3">
                                            <div className="flex">
                                                <div className="w-2/3 line-clamp-2">Chương 4</div>
                                                <div className="w-1/3">3 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="w-2/3">Chương 3</div>
                                                <div className="w-1/3">3 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="mr-2 -scale-x-[1]">
                                                    <img src={HANDWRITING} alt="handwriting" />
                                                </div>
                                                <div>Mắm muối chanh đường</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-2 pt-2'>
                                    <div className='lg:w-1/5'>
                                        <a href="#">
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE2} alt="Propose2" />
                                        </a>                                    
                                    </div>
                                    <div className='ml-3 w-4/5 text-sm'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-white font-medium inline-block bg-[#7dbd5b] rounded uppercase">Full</span>
                                            <a className='font-bold opacity-90' href="#">Tân Di</a>
                                        </div>
                                        <div className="opacity-85 mt-3">
                                            <div className="flex">
                                                <div className="w-2/3 line-clamp-2">Chương 5: Ngoại Truyện - Cố Nguyên Sơ</div>
                                                <div className="w-1/3">3 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="w-2/3">Chương 3</div>
                                                <div className="w-1/3">4 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="mr-2 -scale-x-[1]">
                                                    <img src={HANDWRITING} alt="handwriting" />
                                                </div>
                                                <div>Trà đào không đào</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-2 pt-2'>
                                    <div className='lg:w-1/5'>
                                        <a href="#">
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE3} alt="Propose3" />
                                        </a>                               
                                    </div>
                                    <div className='ml-3 w-4/5 text-sm'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-sm text-white font-medium inline-block bg-[#7dbd5b] rounded uppercase">Full</span>
                                            <a className='text-sm font-bold opacity-90' href="#">Chưởng Châu</a>
                                        </div>
                                        <div className="opacity-85 mt-3">
                                            <div className="flex">
                                                <div className="w-2/3 line-clamp-2">Chương 4</div>
                                                <div className="w-1/3">3 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="w-2/3">Chương 3</div>
                                                <div className="w-1/3">4 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="mr-2 -scale-x-[1]">
                                                    <img src={HANDWRITING} alt="handwriting" />
                                                </div>
                                                <div>Trà sữa nóng</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-rows-3">
                                <div className='flex px-2 pt-2'>
                                    <div className='lg:w-1/5'>
                                        <a href='#'>
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE1} alt="Propose1" />
                                        </a>                                    
                                    </div>
                                    <div className='ml-3 w-4/5 text-sm'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-sm text-white font-medium inline-block bg-[#7dbd5b] rounded uppercase">Full</span>
                                            <a className='text-sm font-bold opacity-90' href="#">MINH NGUYỆT CHIẾU TA</a>
                                        </div>
                                        <div className="opacity-85 mt-3">
                                            <div className="flex">
                                                <div className="w-2/3 line-clamp-2">Chương 5: Ngoại Truyện - Cố Nguyên Sơ</div>
                                                <div className="w-1/3">3 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="w-2/3">Chương 3</div>
                                                <div className="w-1/3">4 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="mr-2 -scale-x-[1]">
                                                    <img src={HANDWRITING} alt="handwriting" />
                                                </div>
                                                <div>Chanh leo</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-2 pt-2'>
                                    <div className='lg:w-1/5'>
                                        <a href='#'>
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE2} alt="Propose2" />
                                        </a>                                    </div>
                                    <div className='ml-3 w-4/5 text-sm'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-sm text-white font-medium inline-block bg-[#7dbd5b] rounded uppercase">Full</span>
                                            <a className='text-sm font-bold opacity-90' href="#">Tân Di</a>
                                        </div>
                                        <div className="opacity-85 mt-3">
                                            <div className="flex">
                                                <div className="w-2/3 line-clamp-2">Chương 4</div>
                                                <div className="w-1/3">3 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="w-2/3">Chương 3</div>
                                                <div className="w-1/3">4 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="mr-2 -scale-x-[1]">
                                                    <img src={HANDWRITING} alt="handwriting" />
                                                </div>
                                                <div>Mắm muối chanh đường</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-2 pt-2'>
                                    <div className='lg:w-1/5'>
                                        <a href='#'>
                                            <img className='w-32 h-32 object-cover rounded' src={PROPOSE3} alt="Propose3" />
                                        </a>                                    </div>
                                    <div className='ml-3 w-4/5 text-sm'>
                                        <div>
                                            <span className="px-1 py-1 mr-1 text-sm text-white font-medium inline-block bg-[#7dbd5b] rounded uppercase">Full</span>
                                            <a className='text-sm font-bold opacity-90' href="#">Chưởng Châu</a>
                                        </div>
                                        <div className="opacity-85 mt-3">
                                            <div className="flex">
                                                <div className="w-2/3 line-clamp-2">Chương 5</div>
                                                <div className="w-1/3">3 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="w-2/3">Chương 3</div>
                                                <div className="w-1/3">4 giờ trước</div>
                                            </div>
                                            <div className="flex mt-2">
                                                <div className="mr-2 -scale-x-[1]">
                                                    <img src={HANDWRITING} alt="handwriting" />
                                                </div>
                                                <div>Mắm muối chanh đường</div>
                                            </div>
                                        </div>
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