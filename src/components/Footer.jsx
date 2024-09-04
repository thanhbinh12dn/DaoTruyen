import LOGOFOOTER from '../img/daotruyen_logo3.png'

function Footer() {
    return (
        <footer className='p-2 border-t border-solid border-[#ccc]'>
            <div className='py-2 px-3 mx-[99px]'>
                <div className='grid grid-cols-2'>
                    <div>
                        <div>
                            <img className='w-[300px] h-40' src={LOGOFOOTER} alt="logofooter" />
                        </div>
                        <div className='my-4 text-sm'>
                            <p className='mb-4'>Email: daotruyen.contact@gmail.com</p>
                            <p className='mb-4'>Liên hệ hỗ trợ: https://www.fb.com/daotruyen</p>
                            <button className='px-3 py-1.5 bg-main rounded-3xl text-white'>Báo cáo vi phạm bản quyền</button>
                        </div>
                    </div>
                    <div>
                        <p className='text-justify text-sm leading-6 opacity-90'>Mọi thông tin và hình ảnh trên website đều được bên thứ ba đăng tải, Daotruyen miễn trừ mọi trách nhiệm liên quan đến các nội dung trên website này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức. Các vấn đề liên quan đến bản quyền hoặc thắc mắc khác, vui lòng liên hệ fanpage: 
                            <a href="#" className='text-[#8D493A] opacity-100'> Daotruyen</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className='border-t border-solid border-[#ccc]'>
                <div className='text-center pt-1 text-sm'>
                    <div className='font-bold'>
                        <a href="#">Chính sách và quy định chung - </a>
                        <a href="#">Chính sách bảo mật - </a>
                        <a href="#">Sitemap</a>
                    </div>
                    <p className='opacity-70'>Copyright © 2024. All right reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;