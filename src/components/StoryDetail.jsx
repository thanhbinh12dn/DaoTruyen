import NEWUPDATE2 from "../img/newupdate2.jpg";

function StoryDetail() {
    return (
        <main className="p-6 bg-[#f7f7f7ff]">
            <div className="mx-20 px-4">
                <div className="">
                    <div className="bg-white mb-5">
                        <a className="relative inline-block px-4 py-2 text-white bg-main" href="#">
                            <h1>Trang chủ</h1>
                            <div className="after:absolute after:left-full after:top-0 after:content-[''] after:border-[20px] after:border-solid after:border-transparent after:border-l-main"></div>
                        </a>
                        <div className="ml-8 inline-block">Dưới ánh nắng mùa hạ</div>
                    </div>
                    <div>
                        <div className="p-6 bg-white rounded-md">
                            <div>
                                <div>
                                    <img className="rounded" src={NEWUPDATE2} alt="newuupdate2" />
                                </div>
                                <div>
                                    
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