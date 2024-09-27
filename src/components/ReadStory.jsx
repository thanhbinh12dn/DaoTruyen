import { useEffect, useState, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from 'axios';

import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import { useStoriesContext } from '../contexts/stories_context'
import { chapter_url } from '../url/stories_url'

function ReadStory() {

    const { id } = useParams()
    const { chaptersData } = useStoriesContext()

    const storyNameRef = useRef(JSON.parse(localStorage.getItem("story")))

    const [chapterData, setChapterData] = useState([])
    const [seletedChapter, setSelectedChapter] = useState(id)

    const { content: contentChapters, first, last } = chaptersData
    const { chapter, paragraphs } = chapterData

    useEffect(() => { 
        fetchChapter(`${chapter_url}?chapterId=${id}`)
    }, [id])

    useEffect(() => {
        if(seletedChapter !== id) {
            fetchChapter(`${chapter_url}?chapterId=${seletedChapter}`)
        }
    }, [seletedChapter])

    const fetchChapter = async (url) => {
        try {
            const response = await axios.get(url)
            const chapterRes = response.data
            setChapterData(chapterRes)
        }
        catch(error) {
            console.log('stories context errors', error)
        }
    }

    const handlePrevChapter = () => {
        if(first) {
            console.log('first: ', first)
            return id + 1
        }
    }

    console.log('chapterData: ',  chaptersData)
    console.log('id: ', id)

    return (
        <main className="px-0 py-6 lg:p-6 bg-[#f7f7f7f7]">
            <div className="lg:mx-16 px-4 md:px-6">
                <div>
                    <ul className="flex items-center bg-white mb-5 py-1 pr-1">
                        <li className='relative -mb-2 text-white'>
                            <Link className='p-2 inline-block bg-main after:absolute after:left-full after:top-0 after:content-[""] after:border-[16px] after:border-solid after:border-transparent after:border-l-main' to={"/"}>
                                <i><IoHome/></i>
                            </Link>
                        </li>
                        <li className="ml-8">
                            <Link to={`/story-detail/${storyNameRef.current && storyNameRef.current[0]}`}>
                                {storyNameRef.current && storyNameRef.current[1]}
                            </Link>
                        </li>
                        <li className="px-2"><i><IoIosArrowForward/></i></li>
                        <li>Chương {chapterData.chapter && chapterData.chapter.chapterNumber}</li>
                    </ul>
                    <div>
                        <div className="p-3 bg-slate-300 border-l-2 border-solid border-main">
                            <h1 className="text-2xl font-medium mb-2">Chương {chapterData.chapter && chapterData.chapter.chapterNumber}{chapterData.chapter && chapterData.chapter.title ? `: ${chapterData.chapter.title}` : null}</h1>
                            <p>Theo dõi <span className="font-bold text-main">Đảo truyện</span> trên facebook để trò chuyện, giao lưu và xem lịch cập nhật truyện mới nhất...</p>
                        </div>
                    </div>
                    <div className="mt-6 md:p-4">
                        {paragraphs && paragraphs.map((paragraph, i) => <p key={i} className="text-xl mb-4">{paragraph}</p>)}
                    </div>
                </div>
            </div>

            <div className="fixed right-0 bottom-0 left-0 z-50 h-16 md:px-10 md:-ml-10">
                <div className="flex justify-center items-center h-full">
                    <button 
                        className="px-3 py-3 text-white bg-main rounded-l-3xl"
                        onClick={handlePrevChapter}
                    >Chương trước</button>
                    <select 
                        className="py-[13px] px-2 cursor-pointer outline-none font-bold" 
                        name="chapter" id="chapter"
                        value={seletedChapter}
                        onChange={(e) => setSelectedChapter(e.target.value)}
                    >
                        {contentChapters && contentChapters.map((itemChapter, i) => 
                            <option value={itemChapter.id}>Chương {itemChapter.chapterNumber}</option>
                        )}
                        {/* <option value="2">Chương 2</option>
                        <option value="3">Chương 3</option>
                        <option value="4">Chương 4</option>
                        <option value="5">Chương 5</option>
                        <option value="6">Chương 6</option> */}
                    </select>
                    <button className="px-3 py-3 text-white bg-main rounded-r-3xl">Chương sau</button>
                </div>
            </div>
        </main>
    )
}

export default ReadStory;