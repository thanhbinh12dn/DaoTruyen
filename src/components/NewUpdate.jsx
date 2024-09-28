import { useState, useEffect, memo } from 'react'

import axios from 'axios';

import { useStoriesContext } from '../contexts/stories_context'; 
import { stories_url } from '../url/stories_url'

import { IoEyeOutline, IoSaveOutline } from "react-icons/io5";

import Story from './Story';
import Pagination from "./Pagination";
import NewUpdateSkeleton from './NewUpdateSkeleton';
// import Composed from "./Composed";
// import Completed from "./Completed";
import BANGXEPHANG1 from '../img/bangxephang1.jpg'
import BANGXEPHANG2 from '../img/bangxephang2.jpg'
import BANGXEPHANG3 from '../img/bangxephang3.jpg'
import BANGXEPHANG4 from '../img/bangxephang4.jpg'
import BANGXEPHANG5 from '../img/bangxephang5.jpg'
import BANGXEPHANG6 from '../img/bangxephang6.jpg'

function NewUpdate() {


    const { storiesData, fetchStories } = useStoriesContext()

    const { content, totalPages } = storiesData

    const [pageNo, setPageNo] = useState(0)

    useEffect(() => {
        fetchStories(`${stories_url}?pageNo=${pageNo}&pageSize=8`)
    }, [pageNo])

    const handlePageChange = (newPage) => {
        console.log('newPage', newPage)
        setPageNo(newPage.selected)
    }

    console.log(pageNo)

    return (
        <section className="mt-12 mb-6">
            <div className="lg:mx-20">
                <div className="mb-6 lg:flex">
                    <div className="w-full lg:w-3/4">
                        <div className="px-3">
                            <h5 className="text-xl font-medium uppercase">Truyện mới cập nhật</h5>
                            <hr className="my-4"/>
                            <div className="-mx-2">
                                <div className="grid grid-cols-3 lg:grid-cols-4">
                                    {/* <NewUpdateSkeleton cards={8}/> */}
                                    {content && content.map((storyContent, i) => 
                                        <Story key={i} storyContent={storyContent}/>
                                    )}
                                </div>
                            </div>

                            <Pagination handlePageChange={handlePageChange} totalPages={totalPages}/>
                        </div>
                        {/* <Composed />
                        <Completed /> */}
                    </div>

                    <div className="px-4 pt-3 w-full lg:w-1/4 lg:pt-0">
                        <div className="rounded shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)] p-3 bg-white">
                            <div>
                                <h5 className="font-medium text-center my-2 uppercase">Bảng xếp hạng</h5>
                            </div>
                            <div className="p-2 bg-[#dad8d8] rounded">
                                <ul className="flex justify-around">
                                    <li className="py-1 px-1.5 text-sm text-white rounded bg-[#338f75]">Hôm nay</li>
                                    <li className="py-1 px-1.5 text-sm rounded">Tuần này</li>
                                    <li className="py-1 px-1.5 text-sm rounded">Tháng này</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <div className="p-2">
                                    <div className="flex p-2 border-b border-solid border-[#ccc]">
                                        <div className="leading-[80px] mr-2 text-sm font-bold">
                                            <span className="py-0.5 px-1.5 border-2 border-solid border-[#338f75]">1</span>
                                        </div>
                                        <div className="w-16 mr-2">
                                            <img className="w-full h-20 object-cover" src={BANGXEPHANG1} alt="bangxephang1" />
                                        </div>
                                        <div className="w-[60%]">
                                            <div>
                                                <a href="#">
                                                    <h3 className="text-sm font-medium uppercase">Mất trí nhớ</h3>
                                                </a>
                                            </div>
                                            <div className="mt-1 text-xs">
                                                <h6 className="mr-0.5 font-bold inline-block">Thể loại:</h6>
                                                <span>Báo thù, Cổ Đại, Cung Đấu, Hệ Thống, Hiện Đại, Ngược</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex p-2 border-b border-solid border-[#ccc]">
                                        <div className="leading-[80px] mr-2 text-sm font-bold">
                                            <span className="py-0.5 px-1.5 border-2 border-solid border-[#338f75]">2</span>
                                        </div>
                                        <div className="w-16 mr-2">
                                            <img className="w-full h-20 object-cover" src={BANGXEPHANG2} alt="bangxephang2" />
                                        </div>
                                        <div className="w-[60%]">
                                            <div>
                                                <a href="#">
                                                    <h3 className="text-sm font-medium uppercase">Tân nương mùa xuân</h3>
                                                </a>
                                            </div>
                                            <div className="mt-1 text-xs">
                                                <h6 className="mr-0.5 font-bold inline-block">Thể loại:</h6>
                                                <span>Báo thù, Cổ Đại, Cung Đấu, Hệ Thống, Hiện Đại, Ngược</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex p-2 border-b border-solid border-[#ccc]">
                                        <div className="leading-[80px] mr-2 text-sm font-bold">
                                            <span className="py-0.5 px-1.5 border-2 border-solid border-[#338f75]">3</span>
                                        </div>
                                        <div className="w-16 mr-2">
                                            <img className="w-full h-20 object-cover" src={BANGXEPHANG3} alt="bangxephang3" />
                                        </div>
                                        <div className="w-[60%]">
                                            <div>
                                                <a href="#">
                                                    <h3 className="text-sm font-medium uppercase">Hiệp khách trư kiếm sầu</h3>
                                                </a>
                                            </div>
                                            <div className="mt-1 text-xs">
                                                <h6 className="mr-0.5 font-bold inline-block">Thể loại:</h6>
                                                <span>Báo thù, Cổ Đại, Cung Đấu, Hệ Thống, Hiện Đại, Ngược</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex p-2 border-b border-solid border-[#ccc]">
                                        <div className="leading-[80px] mr-2 text-sm font-bold">
                                            <span className="py-0.5 px-1.5 border-2 border-solid border-[#338f75]">4</span>
                                        </div>
                                        <div className="w-16 mr-2">
                                            <img className="w-full h-20 object-cover" src={BANGXEPHANG4} alt="bangxephang4" />
                                        </div>
                                        <div className="w-[60%]">
                                            <div>
                                                <a href="#">
                                                    <h3 className="text-sm font-medium uppercase">Gió đến cuốn đi</h3>
                                                </a>
                                            </div>
                                            <div className="mt-1 text-xs">
                                                <h6 className="mr-0.5 font-bold inline-block">Thể loại:</h6>
                                                <span>Báo thù, Cổ Đại, Cung Đấu, Hệ Thống, Hiện Đại, Ngược</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex p-2 border-b border-solid border-[#ccc]">
                                        <div className="leading-[80px] mr-2 text-sm font-bold">
                                            <span className="py-0.5 px-1.5 border-2 border-solid border-[#338f75]">5</span>
                                        </div>
                                        <div className="w-16 mr-2">
                                            <img className="w-full h-20 object-cover" src={BANGXEPHANG5} alt="bangxephang5" />
                                        </div>
                                        <div className="w-[60%]">
                                            <div>
                                                <a href="#">
                                                    <h3 className="text-sm font-medium uppercase">Tiểu sư muội trà xanh</h3>
                                                </a>
                                            </div>
                                            <div className="mt-1 text-xs">
                                                <h6 className="mr-0.5 font-bold inline-block">Thể loại:</h6>
                                                <span>Báo thù, Cổ Đại, Cung Đấu, Hệ Thống, Hiện Đại, Ngược</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex p-2">
                                        <div className="leading-[80px] mr-2 text-sm font-bold">
                                            <span className="py-0.5 px-1.5 border-2 border-solid border-[#338f75]">6</span>
                                        </div>
                                        <div className="w-16 mr-2">
                                            <img className="w-full h-20 object-cover" src={BANGXEPHANG6} alt="bangxephang6" />
                                        </div>
                                        <div className="w-[60%]">
                                            <div>
                                                <a href="#">
                                                    <h3 className="text-sm font-medium uppercase">Khi bình hoa không còn nguyên vẹn</h3>
                                                </a>
                                            </div>
                                            <div className="mt-1 text-xs">
                                                <h6 className="mr-0.5 font-bold inline-block">Thể loại:</h6>
                                                <span>Báo thù, Cổ Đại, Cung Đấu, Hệ Thống, Hiện Đại, Ngược</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section> 
    )
}

export default memo(NewUpdate);