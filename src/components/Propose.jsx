import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'

import Banner from './Banner'

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
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoHeight={true}
                    autoplay={{
                        delay: 5000,
                        pauseOnMouseEnter: false
                    }}
                    speed={1700}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    className="propose-container"
                >
                    <SwiperSlide className="propose-swiper-slide">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-6'>
                            <div className="grid grid-rows-3">
                                <div className='flex px-2 pt-2'>
                                    <div className="lg:w-1/5">
                                        <Link to={"/story-detail"}>
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE1} alt="Propose1" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE2} alt="Propose2" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE3} alt="Propose3" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE1} alt="Propose1" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE2} alt="Propose2" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE3} alt="Propose3" />
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
                    </SwiperSlide>
                    <SwiperSlide className="propose-swiper-slide">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-6'>
                            <div className="grid grid-rows-3">
                                <div className='flex px-2 pt-2'>
                                    <div className="lg:lg:w-1/5">
                                        <Link to={"/story-detail"}>
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE1} alt="Propose1" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE2} alt="Propose2" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE3} alt="Propose3" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE1} alt="Propose1" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE2} alt="Propose2" />
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
                                            <img className='!w-32 !h-32 object-cover rounded' src={PROPOSE3} alt="Propose3" />
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
                    </SwiperSlide>
                </Swiper>
                <Banner />
            </div>
            
        </section>
    )
}

export default Propose;