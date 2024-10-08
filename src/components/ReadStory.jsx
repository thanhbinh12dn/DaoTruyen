import { useEffect, useState, useRef } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import axios from 'axios';

import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import { useStoriesContext } from '../contexts/stories_context'
import { chapter_url } from '../url/stories_url'

function ReadStory() {

    const { id } = useParams()
    const navigate = useNavigate()
    const { chaptersData } = useStoriesContext()

    const storyNameRef = useRef(JSON.parse(localStorage.getItem("story")))
    
    const [chapterData, setChapterData] = useState([])
    const [seletedChapter, setSelectedChapter] = useState(id)
    const { content: contentChapters } = chaptersData
    
    const { chapter, paragraphs, chapterPreviousId, chapterNextId, first, last } = chapterData
    const timeoutPrevRef = useRef()
    const timeoutNextRef = useRef()
    const timeoutSelectedChapterRef = useRef()

    useEffect(() => { 
        fetchChapter(`${chapter_url}?chapterId=${id}`)
    }, [id])

    // useEffect(() => {
    //     if(seletedChapter !== id) {
    //         fetchChapter(`${chapter_url}?chapterId=${seletedChapter}`)
    //     }
    // }, [seletedChapter])

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

    const handleSelectedChapter = (e) => {
        setSelectedChapter(e.target.value)
        clearTimeout(timeoutSelectedChapterRef.current)
        timeoutSelectedChapterRef.current = setTimeout(() => {
            navigate(`/read-story/chapter/${e.target.value}`)
        }, 1500)
    }

    const handlePrevChapter = (e) => {
        if(chapterPreviousId > 0) {
            setSelectedChapter(chapterPreviousId)
            clearTimeout(timeoutPrevRef.current)
            timeoutPrevRef.current = setTimeout(() => {
                navigate(`/read-story/chapter/${chapterPreviousId}`)
                console.log('selected chapter', seletedChapter)
            }, 1000)
        }
            // setChaptersOption(chaptersOption)
            // navigate(`/read-story/chapter/${chapterPreviousId}`)
    }

    const handleNextChapter = (e) => {
        if(chapterNextId > 0) {
            setSelectedChapter(chapterNextId)
            clearTimeout(timeoutNextRef.current)
            timeoutNextRef.current = setTimeout(() => {
                navigate(`/read-story/chapter/${chapterNextId}`)
                console.log('next selected chapter', seletedChapter)
            }, 1000)
        }
    }

    const handleMouseDown = e => {
        e.preventDefault()
    }

    // console.log('chaptersOption ', chaptersOption)

    return (
        <>
            <main onMouseDown={handleMouseDown} className="px-0 py-6 lg:p-6 bg-[#f7f7f7f7]">
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
                        <div className="mt-6 md:p-4 select-none text-xl read_str_content">
                            {paragraphs && paragraphs.filter((paragraph) => paragraph !== '\r').map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                        </div>
                    </div>
                </div>

            </main>
            <div className="fixed right-0 bottom-0 left-0 z-[100] h-16 md:px-10 md:-ml-10">
                <div className="flex justify-center items-center h-full">
                    <button 
                        className={`px-3 py-3 text-white bg-main rounded-l-3xl ${chapterPreviousId === 0 ? 'opacity-40' : '' } hover:opacity-90`}
                        disabled={first}
                        onClick={handlePrevChapter}
                    >Chương trước</button>
                    <select 
                        className="py-[13px] px-2 cursor-pointer outline-none font-bold" 
                        name="chapter" id="chapter"
                        // value={seletedChapter}
                        value={seletedChapter}
                        // onChange={(e) => setSelectedChapter(e.target.value)}
                        onChange={handleSelectedChapter}
                    >
                        {contentChapters && contentChapters.map((itemChapter, i) => 
                            <option key={i} value={itemChapter.id}>Chương {itemChapter.chapterNumber}</option>
                        )}
                    </select>
                    <button 
                        className={`px-3 py-3 text-white bg-main rounded-r-3xl ${chapterNextId === 0 ? 'opacity-40' : ''} hover:opacity-90`}
                        disabled={last}
                        onClick={handleNextChapter}
                    >Chương sau</button>
                </div>
            </div>
        </>
    )
}

export default ReadStory;