import { IoMailUnreadOutline  } from "react-icons/io5";

function ConfirmEmail() {
    return (
        <div className="flex justify-center items-center bg-[#F3F7FA] h-[500px]">
            <div className="px-5">
                <div className="p-5 md:w-96 bg-white rounded-md shadow-md">
                    <div className="text-center">
                        <i className="inline-block text-main text-4xl p-2 border-2 border-solid border-main rounded-full"><IoMailUnreadOutline /></i>
                    </div>
                    <h1 className="w-full mt-5 text-lg font-medium opacity-90 text-center">Xác minh địa chỉ email của bạn</h1>
                    <div className="mt-6 text-center">
                        <input className="px-3 py-2 border-b border-solid placeholder:text-center outline-none" type="text" placeholder="Nhập mã tại đây" />
                    </div>
                    <p className="mt-3 text-sm text-center font-medium opacity-75">Để bắt đầu sử dụng tài khoản, bạn cần xác nhận đoạn mã gửi về địa chỉ email của mình</p>
                    <div className="mt-6">
                        <button className="w-full py-3 bg-main hover:opacity-90 text-white rounded-md">Xác minh địa chỉ email</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmEmail;