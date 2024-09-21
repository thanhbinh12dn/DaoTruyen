import { memo } from 'react'
import { IoEyeOutline, IoSaveOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Story({ storyContent }) {

    const { story, image } = storyContent

    return (
        <div className="px-2">
            <div className='mb-6 hover:-mt-2 transition-all hover:shadow-[0_8px_16px_0_rgba(0,0,0,.3)] rounded-lg overflow-hidden shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                <div className='relative'>
                    <Link to={`/story-detail/${story.id}`}>
                        <img className='w-full h-[260px] object-cover' src={image} alt="no image" />
                    </Link>
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
                    <div className='p-2 lg:p-4 bg-white'>
                        <a href="#">
                            <h6 className='line-clamp-2 font-medium mb-2 h-[50px]'>{story.name}</h6>
                        </a>
                        <div className='text-xs'>
                            <span>1351</span>
                            <span className='float-right'>12 giây</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Story);