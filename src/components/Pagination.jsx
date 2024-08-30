import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

function Pagination() {
    return (
        <div className="flex justify-center">
            <nav className="mb-3">
                <ul className="flex border border-solid border-[#ccc] rounded">
                    <li className="px-3 py-1.5 border-l-[1px]">
                        <a href="#" className="block mt-[3px]">
                            <i><IoIosArrowBack/></i>
                        </a>
                    </li>
                    <li className="px-3 py-1.5 border-l-[1px] bg-[#338f75] text-white">
                        <a href="#">
                            1
                        </a>
                    </li>
                    <li className="px-3 py-1.5 border-l-[1px]">
                        <a href="#">
                            2
                        </a>
                    </li>
                    <li className="px-3 py-1.5 border-l-[1px]">
                        <a href="#">
                            3
                        </a>
                    </li>
                    <li className="px-3 py-1.5 border-l-[1px]">
                        <a href="#">
                            ...
                        </a>
                    </li>
                    <li className="px-3 py-1.5 border-l-[1px]">
                        <a href="#">
                            99
                        </a>
                    </li>
                    <li className="px-3 py-1.5 border-l-[1px]">
                        <a href="#" className="block mt-[3px]">
                            <i><IoIosArrowForward/></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;