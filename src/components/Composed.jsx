import COMPOSED1 from '../img/composed1.jpg'
import COMPOSED2 from '../img/composed2.jpg'
import COMPOSED3 from '../img/composed3.jpg'
import COMPOSED4 from '../img/composed4.jpg'
import COMPOSED5 from '../img/composed5.jpg'

function Composed() {
    return (
        <section className="mt-12">
            <div>
                <div>
                    <div>
                        <div className='relative'>
                            <h5 className="text-xl font-medium uppercase">Truyện sáng tác</h5>
                            <button className='absolute top-0 right-0 px-2 py-1 border border-solid border-[#338f75] text-sm text-[#338f75] rounded-3xl'>Xem thêm</button>
                        </div>
                        <hr className="my-4"/>
                        <div className='mb-6'>
                            <div className='p-4 bg-white rounded-md shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                                <div className='grid grid-cols-5 gap-5'>
                                    <div>
                                        <div>
                                            <a href="#">
                                                <img className='w-[200px] h-[220px] object-cover rounded-tr-lg rounded-tl-lg' src={COMPOSED1} alt="" />
                                            </a>
                                        </div>
                                        <div className='py-2'>
                                            <a href="#">
                                                <h6 className='leading-normal font-medium'>Nhật ký theo đuổi vợ của phó thiếu</h6>
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <a href="#">
                                                <img className='w-[200px] h-[220px] object-cover rounded-tr-lg rounded-tl-lg' src={COMPOSED2} alt="composed2" />
                                            </a>
                                        </div>
                                        <div className='py-2'>
                                            <a href="#">
                                                <h6 className='leading-normal font-medium'>Năm tháng nhớ em</h6>
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <a href="#">
                                                <img className='w-[200px] h-[220px] object-cover rounded-tr-lg rounded-tl-lg' src={COMPOSED3} alt="composed3" />
                                            </a>
                                        </div>
                                        <div className='py-2'>
                                            <a href="#">
                                                <h6 className='leading-normal font-medium'>[Đồng Nhân Harry Potter/ Twilight Saga]</h6>
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <a href="#">
                                                <img className='w-[200px] h-[220px] object-cover rounded-tr-lg rounded-tl-lg' src={COMPOSED4} alt="composed4" />
                                            </a>
                                        </div>
                                        <div className='py-2'>
                                            <a href="#">
                                                <h6 className='leading-normal font-medium'>[Đồng Nhân Twilight] Tôi Luôn Có Cuộc Sống Hạnh Phúc</h6>
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <a href="#">
                                                <img className='w-[200px] h-[220px] object-cover rounded-tr-lg rounded-tl-lg' src={COMPOSED5} alt="composed5" />
                                            </a>
                                        </div>
                                        <div className='py-2'>
                                            <a href="#">
                                                <h6 className='leading-normal font-medium'>THANH ĐAN</h6>
                                            </a>
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

export default Composed;