import { Link } from 'react-router-dom'

import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const paragraphStory = `Mẹ tôi, Lý Yến Hoa, lao tới vặn mạnh cổ tay của em họ. Em họ tôi đau đớn kêu lên, điện thoại rơi xuống đất: “Bác ơi! Bác làm gì vậy?” 
Nó mở to mắt ra sức vùng vẫy, nhưng lại bị mẹ tôi bóp chặt sau gáy. “Còn dám giả vờ gọi tao là bác cơ à? Đúng là thứ vô dụng! Ông Vương ở đầu làng đang chờ để xung hỷ, mày phải ngoan ngoãn chờ đợi nghe chưa!”
Em họ tôi bị kéo lê mạnh đến nỗi cả người như muốn rã rời, nó nắm chặt khung cửa, kêu la thảm thiết: “Bác điên rồi, bác điên rồi! Bố mẹ ơi, mau cứu con với!”
Tôi nhìn vào điện thoại, thấy điểm thi đại học 250 của mình thì lắc đầu thở dài. 
Em họ à, em vẫn chưa hiểu được tình huống hiện tại hay sao? Đã dám đổi kết quả thi đại học của chị thì em cũng phải chịu đựng cuộc đời khốn khổ của chị mới công bằng chứ?
Dì và dượng tôi chạy từ bếp ra trong cơn hoảng loạn. Nhưng họ lại đứng chắn trước mặt tôi.
Dì kéo tay mẹ tôi nói: “Chị à, đừng đánh Ái Đệ nữa, thi đại học cũng đâu phải dễ, điểm của Ái Đệ như vậy là tốt lắm rồi.”
Dì vừa khuyên mẹ vừa dùng thân mình để che chắn cho tôi.
Ái Đệ là tên của tôi.
Em họ hoảng sợ khi thấy dì không nhận ra nó.
Nó lao về phía dì tôi hét to: “Mẹ! Mẹ đang làm gì vậy? Con là Kim Bảo mà! Con không phải là Trần Ái Đệ!”
Nhưng em họ còn chưa kịp lao tới thì đã bị mẹ tôi túm lấy tóc, kéo ngược trở lại.
Mẹ tôi tát mạnh vào mặt em họ: “Đồ đê tiện! Đến mẹ mày mà mày cũng không nhận ra à? Đáng lẽ tao phải vứt mày vào con hẻm tối tăm kia từ hồi cấp hai rồi, đúng là cái loại sinh ra chỉ được cái thân! Tao đã bảo mày phải giúp Dương Tổ gian lận mà mày lại không thèm giúp! Giờ thì thằng em mày đang ở nhà khóc lóc đập phá đồ đạc vì không có trường đại học nào nhận nó kia kìa!”
Mẹ tôi càng nói càng tức giận, lực trên tay càng ngày càng mạnh.
Em họ tôi không những không vùng vẫy nổi mà còn bị tát rách mặt.
Dượng tôi không chịu được nữa, kéo em họ lại: “Chị, đủ rồi. Ái Đệ cũng là con của chị mà! Chị làm vậy thì ra cái gì nữa?”
Em họ như tìm được chỗ dựa, nắm chặt tay dượng tôi: “Bố ơi! Bố ơi! Con mới là Kim Bảo, chị họ đang đứng phía sau lưng bố kìa!”
Nó chỉ tay vào tôi rồi gào thét ầm ĩ.
Dì tôi nhíu mày: “Chị à, em nghĩ chị nên đưa Ái Đệ đi khám đấy. Có phải áp lực từ kỳ thi đại học vẫn còn không?”
Dì tôi đưa tay ra sau, nắm lấy bàn tay lạnh như băng của tôi.
“Khám à? Khám cái gì mà khám! Đưa tiền đây rồi tao bảo nó cởi đồ ra cho mà khám! Muốn xem bao lâu thì cứ xem! Tao nghe nói chỉ cần có tiền là vào được đại học đấy.”
Lý Yến Hoa bấu chặt vào chỗ thịt mềm trên cánh tay em họ: “Đáng tiếc là con đê tiện này không biết quyến rũ người khác, lần trước còn đánh vỡ đầu cái người ở đầu làng, khiến nhà tao phải đền một khoản lớn! Đúng là thứ phá hoại! Nếu không phải nó có ích cho việc học hành của Dương Tổ thì tao đã bắt nó đi làm từ lâu rồi! Con gái thì học hành cái gì, sinh ra chỉ để bán thân mà thôi!”
Đột nhiên, bà ta quay sang nhìn tôi: “Phải chi nó giống Kim Bảo biết quyến rũ người khác thì tốt biết mấy, sao tao lại không có đứa con gái như Kim Bảo cơ chứ?”
Buồn cười thật đấy, mẹ tôi ghen tị với người khác chỉ vì con gái họ biết quyến rũ đàn ông để đổi lấy tiền.
Mẹ à, bây giờ thì mẹ toại nguyện rồi đấy.
Lý Yến Hoa lập tức kéo em họ tôi đi, lần này, nó vùng vẫy cỡ nào cũng không thể thoát ra được.
Em họ nhìn tôi chằm chằm rồi hét lớn, “Trần Ái Đệ, chắc chắn là mày giở trò! Mày chết chắc rồi! Tao sẽ không để mày sống yên ổn đâu!”`

function ReadStory() {
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
                            <Link to={"/story-detail"}>
                                Dưới ánh nắng mùa hạ
                            </Link>
                        </li>
                        <li className="px-2"><i><IoIosArrowForward/></i></li>
                        <li>Chương 1</li>
                    </ul>
                    <div>
                        <div className="p-3 bg-slate-300 border-l-2 border-solid border-main">
                            <h1 className="text-2xl font-medium mb-2">Chương 1</h1>
                            <h6>Lượt xem: 9999</h6>
                            <p>Theo dõi <span className="font-bold text-main">Đảo truyện</span> trên facebook để trò chuyện, giao lưu và xem lịch cập nhật truyện mới nhất...</p>
                        </div>
                    </div>
                    <div className="mt-6 md:p-4">
                        <p className="text-2xl ">Mẹ tôi, Lý Yến Hoa, lao tới vặn mạnh cổ tay của em họ. Em họ tôi đau đớn kêu lên, điện thoại rơi xuống đất: “Bác ơi! Bác làm gì vậy?” 
Nó mở to mắt ra sức vùng vẫy, nhưng lại bị mẹ tôi bóp chặt sau gáy. “Còn dám giả vờ gọi tao là bác cơ à? Đúng là thứ vô dụng! Ông Vương ở đầu làng đang chờ để xung hỷ, mày phải ngoan ngoãn chờ đợi nghe chưa!”
Em họ tôi bị kéo lê mạnh đến nỗi cả người như muốn rã rời, nó nắm chặt khung cửa, kêu la thảm thiết: “Bác điên rồi, bác điên rồi! Bố mẹ ơi, mau cứu con với!”
Tôi nhìn vào điện thoại, thấy điểm thi đại học 250 của mình thì lắc đầu thở dài. 
Em họ à, em vẫn chưa hiểu được tình huống hiện tại hay sao? Đã dám đổi kết quả thi đại học của chị thì em cũng phải chịu đựng cuộc đời khốn khổ của chị mới công bằng chứ?
Dì và dượng tôi chạy từ bếp ra trong cơn hoảng loạn. Nhưng họ lại đứng chắn trước mặt tôi.
Dì kéo tay mẹ tôi nói: “Chị à, đừng đánh Ái Đệ nữa, thi đại học cũng đâu phải dễ, điểm của Ái Đệ như vậy là tốt lắm rồi.”
Dì vừa khuyên mẹ vừa dùng thân mình để che chắn cho tôi.
Ái Đệ là tên của tôi.
Em họ hoảng sợ khi thấy dì không nhận ra nó.
Nó lao về phía dì tôi hét to: “Mẹ! Mẹ đang làm gì vậy? Con là Kim Bảo mà! Con không phải là Trần Ái Đệ!”
Nhưng em họ còn chưa kịp lao tới thì đã bị mẹ tôi túm lấy tóc, kéo ngược trở lại.
Mẹ tôi tát mạnh vào mặt em họ: “Đồ đê tiện! Đến mẹ mày mà mày cũng không nhận ra à? Đáng lẽ tao phải vứt mày vào con hẻm tối tăm kia từ hồi cấp hai rồi, đúng là cái loại sinh ra chỉ được cái thân! Tao đã bảo mày phải giúp Dương Tổ gian lận mà mày lại không thèm giúp! Giờ thì thằng em mày đang ở nhà khóc lóc đập phá đồ đạc vì không có trường đại học nào nhận nó kia kìa!”
Mẹ tôi càng nói càng tức giận, lực trên tay càng ngày càng mạnh.
Em họ tôi không những không vùng vẫy nổi mà còn bị tát rách mặt.
Dượng tôi không chịu được nữa, kéo em họ lại: “Chị, đủ rồi. Ái Đệ cũng là con của chị mà! Chị làm vậy thì ra cái gì nữa?”
Em họ như tìm được chỗ dựa, nắm chặt tay dượng tôi: “Bố ơi! Bố ơi! Con mới là Kim Bảo, chị họ đang đứng phía sau lưng bố kìa!”
Nó chỉ tay vào tôi rồi gào thét ầm ĩ.
Dì tôi nhíu mày: “Chị à, em nghĩ chị nên đưa Ái Đệ đi khám đấy. Có phải áp lực từ kỳ thi đại học vẫn còn không?”
Dì tôi đưa tay ra sau, nắm lấy bàn tay lạnh như băng của tôi.
“Khám à? Khám cái gì mà khám! Đưa tiền đây rồi tao bảo nó cởi đồ ra cho mà khám! Muốn xem bao lâu thì cứ xem! Tao nghe nói chỉ cần có tiền là vào được đại học đấy.”
Lý Yến Hoa bấu chặt vào chỗ thịt mềm trên cánh tay em họ: “Đáng tiếc là con đê tiện này không biết quyến rũ người khác, lần trước còn đánh vỡ đầu cái người ở đầu làng, khiến nhà tao phải đền một khoản lớn! Đúng là thứ phá hoại! Nếu không phải nó có ích cho việc học hành của Dương Tổ thì tao đã bắt nó đi làm từ lâu rồi! Con gái thì học hành cái gì, sinh ra chỉ để bán thân mà thôi!”
Đột nhiên, bà ta quay sang nhìn tôi: “Phải chi nó giống Kim Bảo biết quyến rũ người khác thì tốt biết mấy, sao tao lại không có đứa con gái như Kim Bảo cơ chứ?”
Buồn cười thật đấy, mẹ tôi ghen tị với người khác chỉ vì con gái họ biết quyến rũ đàn ông để đổi lấy tiền.
Mẹ à, bây giờ thì mẹ toại nguyện rồi đấy.
Lý Yến Hoa lập tức kéo em họ tôi đi, lần này, nó vùng vẫy cỡ nào cũng không thể thoát ra được.
Em họ nhìn tôi chằm chằm rồi hét lớn, “Trần Ái Đệ, chắc chắn là mày giở trò! Mày chết chắc rồi! Tao sẽ không để mày sống yên ổn đâu!”</p>
                    </div>
                </div>
            </div>

            <div className="fixed right-0 bottom-0 left-0 z-50 h-16 md:px-10 md:-ml-10">
                <div className="flex justify-center items-center h-full">
                    <button className="px-3 py-3 text-white bg-main rounded-l-3xl">Chương trước</button>
                    <select className="py-[13px] px-2 cursor-pointer outline-none font-bold" name="chapter" id="chapter">
                        <option value="1">Chương 1</option>
                        <option value="2">Chương 2</option>
                        <option value="3">Chương 3</option>
                        <option value="4">Chương 4</option>
                        <option value="5">Chương 5</option>
                        <option value="6">Chương 6</option>
                    </select>
                    <button className="px-3 py-3 text-white bg-main rounded-r-3xl">Chương sau</button>
                </div>
            </div>
        </main>
    )
}

export default ReadStory;