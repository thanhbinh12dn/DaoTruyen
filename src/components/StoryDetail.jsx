import { Link } from 'react-router-dom'

import { IoHome } from "react-icons/io5";

import NEWUPDATE2 from "../img/newupdate2.jpg";


const chapters = [
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 1'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 2'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 3'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 4'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 5'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 6'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 7'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 8'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 9'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 10'
    },
    {
        name: 'Sinh ra để chữa lành cho nhau',
        chapter: 'Chương 11'
    },
]

function StoryDetail() {
    return (
        <main className="md:p-6 bg-[#f7f7f7ff]">
            <div className="lg:mx-20 px-4 pt-3 md:pt-0">
                <div>
                    <ul className="flex items-center bg-white mb-5 py-1 pr-1">
                        <li className='relative px-2 py-2 text-white bg-main'>
                            <Link to={"/"}>
                                <i><IoHome/></i>
                                <div className="after:absolute after:left-full after:top-0 after:content-[''] after:border-[16px] after:border-solid after:border-transparent after:border-l-main"></div>
                            </Link>
                        </li>
                        <li className="ml-8">
                            <Link to={"/story-detail"}>
                                Dưới ánh nắng mùa hạ
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <div className="p-4 lg:p-6 bg-white rounded-md">
                            <div className="md:flex">
                                <div className="md:w-1/4">
                                    <img className="shadow-[0_0_8px_0_rgba(0,0,0,0.75)] rounded" src={NEWUPDATE2} alt="newuupdate2" />
                                    <Link to={"/story-detail/read-story"} className="p-3 mt-3 inline-block bg-main text-white hover:opacity-85 rounded-md outline-none">
                                        Đọc truyện
                                    </Link>
                                </div>
                                <div className="md:w-3/4 mt-4 md:mt-0 ml-3">
                                    <div>
                                        <h1 className="text-2xl font-medium capitalize">Sinh ra để chữa lành cho nhau</h1>
                                        <div className="mt-2 text-sm">
                                            <div className="flex py-2">
                                                <div className="w-1/4 font-medium">Cập nhật</div>
                                                <div className="w-3/4">1 ngày trước</div>
                                            </div>
                                            <div className="flex py-2">
                                                <div className="w-1/4 font-medium">Loại</div>
                                                <div className="w-3/4 flex">Truyện chữ</div>
                                            </div>
                                            <div className="flex py-2">
                                                <div className="w-1/4 font-medium">Tác giả</div>
                                                <div className="w-3/4">Quỳnh</div>
                                            </div>
                                            <div className="flex py-2">
                                                <div className="w-1/4 font-medium">Thể loại</div>
                                                <div className="w-3/4 flex">
                                                    <a className="mr-2 px-1 py-1.5 text-white bg-main rounded-lg" href="#">Tiểu thuyết</a>
                                                    <a className="mr-2 px-1 py-1.5 text-white bg-main rounded-lg" href="#">Ngôn tình</a>
                                                    <a className="mr-2 px-1 py-1.5 text-white bg-main rounded-lg" href="#">Chữa lành</a>
                                                </div>
                                            </div>
                                            <div className="flex py-2">
                                                <div className="w-1/4 font-medium">Lượt xem</div>
                                                <div className="w-3/4">9999</div>
                                            </div>
                                            <div className="flex py-2">
                                                <div className="w-1/4 font-medium">Team</div>
                                                <div className="w-3/4">Hoa Bỉ Ngạn</div>
                                            </div>
                                            <div className="flex py-2">
                                                <div className="w-1/4 font-medium">Lượt theo dõi</div>
                                                <div className="w-3/4">9999</div>
                                            </div>
                                            <div className="flex py-2">
                                                <div className="w-1/4 font-medium">Trạng thái</div>
                                                <div className="w-3/4">Đang phát hành</div>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <p className="font-medium">Nội dung: <span className="font-normal">Tôi được sinh ra trong gia đình không mấy là hạnh phúc cha thì nghiện ngập mẹ thì bỏ đi từ lúc tôi được 10 tuổi. Từ lúc bà ấy bỏ đi theo người đàn ông khác cũng là chính bỏ trốn người đàn ông tồi tệ ấy . Khi bà ấy bỏ đi là tôi thường xuyên bị ông ấy đánh đập đến chết đi sống lại vậy trên cơ thể tôi toàn là vết thương cũ chưa lành lại đến vết thương mới "hình như tôi là đứa trẻ bị ông trời cho ghẻ lạ "</span></p>
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
                                                <th className='p-2 text-left'>Chương</th>
                                                <th className='p-2 text-left'>Ngày đăng</th>
                                            </thead>
                                            <tbody>
                                                {chapters.slice().reverse().map((item, index) => (
                                                    <tr key={index} className='odd:bg-gray-100'>
                                                        <a href="#">
                                                            <td className='p-2'>{item.name} - {item.chapter}</td>
                                                        </a>
                                                        <td className='p-2'>1/1/24</td>
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

export default StoryDetail;