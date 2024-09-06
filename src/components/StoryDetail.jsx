import NEWUPDATE2 from "../img/newupdate2.jpg";


const chapters = ['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4', 'Chương 5', 'Chương 6', 'Chương 7', 'Chương 8', 'Chương 9',
    'Chương 10', 'Chương 11'
]

function StoryDetail() {
    return (
        <main className="p-6 bg-[#f7f7f7ff]">
            <div className="mx-20 px-4">
                <div>
                    <div className="bg-white mb-5">
                        <a className="relative inline-block px-4 py-2 text-white bg-main" href="/">
                            <h1>Trang chủ</h1>
                            <div className="after:absolute after:left-full after:top-0 after:content-[''] after:border-[20px] after:border-solid after:border-transparent after:border-l-main"></div>
                        </a>
                        <div className="ml-8 inline-block">Dưới ánh nắng mùa hạ</div>
                    </div>
                    <div>
                        <div className="p-6 bg-white rounded-md">
                            <div className="flex">
                                <div className="w-1/4">
                                    <img className="shadow-[0_0_8px_0_rgba(0,0,0,0.75)] rounded" src={NEWUPDATE2} alt="newuupdate2" />
                                    <a href="/story-detail/read-story" className="p-3 mt-3 inline-block bg-main text-white hover:opacity-85 rounded-md outline-none">Đọc truyện</a>
                                </div>
                                <div className="w-3/4 ml-3">
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
                                <div className="mx-16 px-5">
                                    <h1 className="mb-3 text-lg font-medium">Danh sách chương</h1>
                                    <div className="flex justify-center flex-wrap">
                                        {chapters.slice().reverse().map((chapter, index) => {
                                            return (
                                                <a key={index} className="p-2 w-[12.5%] border border-solid border-main text-center" href="#"><span>{chapter}</span></a>
                                            )
                                        })}
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