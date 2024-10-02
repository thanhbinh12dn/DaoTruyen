import { Link } from 'react-router-dom'

import { useUserContext } from '../../contexts/users_context'
import { useEffect } from 'react'

function SidebarProfile() {

    const { userInfo, fetchUser } = useUserContext()

    useEffect(() => {
        fetchUser()
    }, [])

    console.log('user info', userInfo)

    return (
        <div className="w-full md:w-1/5 px-1 pb-8">
            <div className="bg-white p-2 shadow-md">
                <div>
                    <h2 className="py-2 px-1 border-b border-solid border-[#ccc] font-medium">Tài khoản</h2>
                    <ul>
                        <li className="py-1 px-3 hover:text-main cursor-pointer">
                            <Link to={"/profile"}>Thông tin tài khoản</Link>
                        </li>
                        <li className="py-1 px-3 hover:text-main cursor-pointer">Truyện đang đọc</li>
                        <li className="py-1 px-3 hover:text-main cursor-pointer">Truyện yêu thích</li>
                        <li className="py-1 px-3 hover:text-main cursor-pointer">Thông báo</li>
                        <li className="py-1 px-3 hover:text-main cursor-pointer">
                            <Link to={'/profile/regis-story-translator'}>Đăng ký làm nhà dịch</Link>
                        </li>
                        <li className="py-1 px-3 hover:text-main cursor-pointer">
                            <Link to={'/profile/change-password'}>Đổi mật khẩu</Link>
                        </li>
                    </ul>
                </div>
                { (userInfo && userInfo.role === "TRANSLATOR") || (userInfo && userInfo.role === "COLLABORATOR") ?
                    <>
                        <div>
                            <h2 className="py-2 px-1 border-b border-solid border-[#ccc] font-medium">Tác giả / Dịch giả</h2>
                            <ul>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Tổng quan</li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">
                                    <Link to={'/profile/team-translate'}>Team Translate</Link>
                                </li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">
                                    <Link to={"/profile/manage-story"}>Quản lý truyện</Link>
                                </li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Danh tiếng</li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Người theo dõi</li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Donate</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="py-2 px-1 border-b border-solid border-[#ccc] font-medium">Ví của tôi</h2>
                            <ul>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Ví</li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Nạp / Rút</li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Phương thức thanh toán</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="py-2 px-1 border-b border-solid border-[#ccc] font-medium">Sự kiện</h2>
                            <ul>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Tác giả của tháng</li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Sự kiện đang diễn ra</li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Cuộc thi viết truyện</li>
                                <li className="py-1 px-3 hover:text-main cursor-pointer">Nhận thưởng</li>
                            </ul>
                        </div>
                    </> : null
                }
                {/* <div>
                    <h2 className="py-2 px-1 border-b border-solid border-[#ccc] font-medium">Collaborator</h2>
                    <ul>
                        <li className="py-1 px-3 hover:text-main cursor-pointer">Accept / Reject user</li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default SidebarProfile;