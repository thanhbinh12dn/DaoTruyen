import { useEffect, useRef, memo } from 'react';
import { Link, useParams } from 'react-router-dom'

import { useStoriesContext } from '../contexts/stories_context';

import { chapters_url } from '../url/stories_url'
import { formatDate } from '../format/date_format'

import { IoHome } from "react-icons/io5";

import NEWUPDATE2 from "../img/newupdate2.jpg";

function StoryDetail() {

    const {  id } = useParams()
    const { storiesData, getTitleStory, chaptersData, fetchChapters } = useStoriesContext()
    const { number, content } = storiesData
    const { content: contentChapters } = chaptersData

    let storyRef = useRef()
    let storyNameRef = useRef()

    useEffect(() => {
        if(content) {
            storyRef.current = getTitleStory(id)
            storyRef.current && localStorage.setItem("story", JSON.stringify([storyRef.current.story.id, storyRef.current.story.name]))
        }
        fetchChapters(`${chapters_url}?storyId=${id}&pageNumber=${number}`)
    }, [id])
    
    storyNameRef.current = JSON.parse(localStorage.getItem("story"))

    console.log('storyNameRef: ', storyNameRef)
    console.log('chaptersData: ', chaptersData)
    console.log('contentChapters: ', contentChapters)
    

    return (
        <main className="md:p-6 bg-[#f7f7f7ff]">
            <div className="lg:mx-20 px-4 pt-3 md:pt-0">
                <div>
                    <ul className="flex items-center bg-white mb-5 py-1 pr-1">
                        <li className='relative -mb-2 text-white'>
                            <Link className='p-2 inline-block bg-main after:absolute after:left-full after:top-0 after:content-[""] after:border-[16px] after:border-solid after:border-transparent after:border-l-main' to={"/"}>
                                <i><IoHome/></i>
                            </Link>
                        </li>
                        <li className="ml-8">
                                {storyNameRef.current && storyNameRef.current[1]}
                        </li>
                    </ul>
                    <div>
                        <div className="p-4 lg:p-6 bg-white rounded-md">
                            <div className="md:flex">
                                <div className="md:w-1/4">
                                    <img className="shadow-[0_0_8px_0_rgba(0,0,0,0.75)] rounded" src={NEWUPDATE2} alt="newuupdate2" />
                                    <Link href="#" className="p-3 mt-3 inline-block bg-main text-white hover:opacity-85 rounded-md outline-none">
                                        Đọc truyện
                                    </Link>
                                </div>
                                <div className="md:w-3/4 mt-4 md:mt-0 ml-3">
                                    <div>
                                        <h1 className="text-2xl font-medium capitalize">{storyNameRef.current && storyNameRef.current[1]}</h1>
                                        <div className="mt-2 text-sm">
                                            <div className="md:flex py-2">
                                                <div className="md:w-1/4 font-medium">Cập nhật</div>
                                                <div className="md:w-3/4">1 ngày trước</div>
                                            </div>
                                            <div className="md:flex py-2">
                                                <div className="md:w-1/4 font-medium">Loại</div>
                                                <div className="md:w-3/4 flex">Truyện chữ</div>
                                            </div>
                                            <div className="md:flex py-2">
                                                <div className="md:w-1/4 font-medium">Tác giả</div>
                                                <div className="md:w-3/4">Quỳnh</div>
                                            </div>
                                            <div className="md:flex py-2">
                                                <div className="md:w-1/4 font-medium">Thể loại</div>
                                                <div className="md:w-3/4 flex">
                                                    {storyRef.current && storyRef.current.categories.map((category, i) => 
                                                        <a key={i} className="mr-2 p-1.5 text-white bg-main rounded-lg capitalize hover:opacity-90" href="#">{category}</a>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="md:flex py-2">
                                                <div className="md:w-1/4 font-medium">Lượt xem</div>
                                                <div className="md:w-3/4">9999</div>
                                            </div>
                                            <div className="md:flex py-2">
                                                <div className="md:w-1/4 font-medium">Team</div>
                                                <div className="md:w-3/4">Hoa Bỉ Ngạn</div>
                                            </div>
                                            <div className="md:flex py-2">
                                                <div className="md:w-1/4 font-medium">Lượt theo dõi</div>
                                                <div className="md:w-3/4">9999</div>
                                            </div>
                                            <div className="md:flex py-2">
                                                <div className="md:w-1/4 font-medium">Trạng thái</div>
                                                <div className="md:w-3/4">Đang phát hành</div>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <p className="font-medium">Nội dung: <span className="font-normal">{storyRef.current && storyRef.current.story.description}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="lg:mx-16 md:px-5">
                                    <h1 className="relative mb-3 text-lg font-medium after:absolute after:left-0 after:bottom-0 after:w-[20%] md:after:w-[10%] after:h-0.5 after:bg-main">Danh sách chương</h1>
                                    <div>
                                        <table className='w-full'>
                                            <thead className='border-b-2 border-solid border-main'>
                                                <tr>
                                                    <th className='p-2 text-left'>Chương</th>
                                                    <th className='p-2 text-left'>Ngày đăng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {contentChapters && contentChapters.slice().reverse().map((item, index) => (
                                                    <tr key={index} className='odd:bg-gray-100'>
                                                        
                                                        <td className='p-2'>
                                                            <Link to={`/read-story/chapter/${item.id}`}>
                                                                {`Chương ${item.chapterNumber} ${item.title ? ` - ${item.title}`: ``}`}
                                                            </Link>
                                                        </td>
                                                        <td className='p-2'>{formatDate(item.createdAt)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default memo(StoryDetail);