import { useEffect, useRef, useState } from "react";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import { categories_url } from '../url/stories_url'


const Categories = ['Bách Hợp', 'BE', 'Chữ lành', 'Cổ Đại', 'Cung Đấu', 'Cưới trước yêu sau', 'Cường thủ hào đoạt',
    'Dị Năng', 'Dưỡng thê', 'Đam mỹ', 'Điền văn', 'Đô Thị', 'Đoản văn', 'Đọc tâm', 'Gả Thay', 'Gia đấu', 'Gia đình',
    'Hài Hước', 'Hành động', 'Hào môn thế gia', 'HE', 'Hệ Thống', 'Hiện đại', 'Hoán đổi thân xác', 'Học bá', 'Học đường',
    'Hư cấu kỳ ảo', 'Huyền huyễn', 'Không CP', 'Kinh dị', 'Linh dị', 'Mạt thế', 'Ngôn tình', 'Ngọt', 'Ngược', 'Ngược luyến tàn tâm',
    'Ngược nam', 'Ngược nữ', 'Nhân thú', 'Nữ cường', 'OE', 'Phép thuật', 'Phiêu lưu', 'Phương đông', 'Phương tây',
    'Quy tắc', 'SE', 'Showbiz', 'Sủng', 'Thanh xuân vườn trường', 'Tiên hiệp', 'Tiểu thuyết', 'Tổng tài', 'Trả thù',
    'Trọng sinh', 'Truy Thê', 'Vả mặt', 'Vô tri', 'Xuyên không', 'Xuyên sách'
]


function Category() {

    const [toggleCategory, setToggleCategory] = useState(true)
    const [categories, setCategories] = useState()

    useEffect(() => {
        function fetchCategories() {
            fetch(categories_url)
            .then((response) => {
                if(response.ok) {
                    setCategories(response.data)
                    console.log("categories response", response.data)
                }
            })
            .catch((error) => {
                console.log("Invalid fetch Categories", error)
            })
        }
        fetchCategories()
    }, [])


    console.log('Category', categories)

    return (
        <section>
            <div className="lg:mx-20 p-4">
                <div className="mb-6 flex justify-between">
                    <span className="px-4 py-2 font-bold bg-main text-white rounded-md">Thể loại</span>
                    <button 
                        className="p-3 border border-solid border-main rounded-md text-main" 
                        onClick={() => setToggleCategory(!toggleCategory)}
                    >
                        {toggleCategory ? <i><IoIosArrowDown/></i> : <i><IoIosArrowBack/></i>}
                        
                        
                    </button>
                </div>
                <div className={`${toggleCategory ? `` : `hidden`} p-3 border-2 border-solid border-main rounded`}>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {/* <div className="px-3">
                            <a className="flex items-center" href="#">
                                <i className="text-main text-xl"><IoMdArrowDropright/></i>
                                <h4 className="w-full capitalize font-medium">Bách hợp</h4>
                            </a>
                        </div> */}
                        {categories && categories.map((category) => {
                            return (
                                <div className="px-2.5 mb-2.5" key={category.id}>
                                    <a className="flex items-center" href="#">
                                        <i className="text-main text-xl"><IoMdArrowDropright/></i>
                                        <h4 className="w-full capitalize font-medium">{category.categoryName}</h4>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;