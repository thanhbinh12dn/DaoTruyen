import { IoEyeOutline, IoSaveOutline } from "react-icons/io5";

import OUTSTANDING1 from '../img/outstanding1.jpg'
import OUTSTANDING2 from '../img/outstanding2.jpg'
import OUTSTANDING3 from '../img/outstanding3.jpg'
import OUTSTANDING4 from '../img/outstanding4.jpg'
import OUTSTANDING5 from '../img/outstanding5.jpg'
import OUTSTANDING6 from '../img/outstanding6.jpg'

function Outstanding() {
    return (
        <section className="mt-12">
            <div className="mx-20 px-4">
                <div>
                    <div>
                        <div>
                            <div>
                                <h5 className="text-xl font-medium uppercase">Truyện hot</h5>
                                <hr className="my-4"/>
                            </div>
                            <div>
                                <div>
                                    <div className="p-4 bg-white shadow-md rounded-md">
                                        <div className="grid grid-cols-6 gap-5">
                                            <div>
                                                <div className="relative">
                                                    <a>
                                                        <img className="rounded h-56 object-cover" src={OUTSTANDING1} alt="outstanding1" />
                                                    </a>
                                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                                        <span className="flex items-center gap-1">
                                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                                            267,184
                                                        </span>
                                                        <span className="flex items-center gap-1 ml-3">
                                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                                            64
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="text-base uppercase font-medium my-2">Hưu thư</h3>
                                            </div>
                                            <div>
                                                <div className="relative">
                                                    <a>
                                                        <img className="rounded h-56 object-cover" src={OUTSTANDING2} alt="outstanding2" />
                                                    </a>
                                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                                        <span className="flex items-center gap-1">
                                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                                            267,184
                                                        </span>
                                                        <span className="flex items-center gap-1 ml-3">
                                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                                            64
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="text-base uppercase font-medium my-2">Hưu thư</h3>
                                            </div>
                                            <div>
                                                <div className="relative">
                                                    <a>
                                                        <img className="rounded h-56 object-cover" src={OUTSTANDING3} alt="outstanding3" />
                                                    </a>
                                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                                        <span className="flex items-center gap-1">
                                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                                            267,184
                                                        </span>
                                                        <span className="flex items-center gap-1 ml-3">
                                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                                            64
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="text-base uppercase font-medium my-2">Hưu thư</h3>
                                            </div>
                                            <div>
                                                <div className="relative">
                                                    <a>
                                                        <img className="rounded h-56 object-cover" src={OUTSTANDING4} alt="outstanding4" />
                                                    </a>
                                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                                        <span className="flex items-center gap-1">
                                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                                            267,184
                                                        </span>
                                                        <span className="flex items-center gap-1 ml-3">
                                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                                            64
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="text-base uppercase font-medium my-2">Hưu thư</h3>
                                            </div>
                                            <div>
                                                <div className="relative">
                                                    <a className="block">
                                                        <img className="rounded h-56 object-cover w-full" src={OUTSTANDING5} alt="outstanding5" />
                                                    </a>
                                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                                        <span className="flex items-center gap-1">
                                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                                            267,184
                                                        </span>
                                                        <span className="flex items-center gap-1 ml-3">
                                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                                            64
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="text-base uppercase font-medium my-2">Hưu thư</h3>
                                            </div>
                                            <div>
                                                <div className="relative">
                                                    <a>
                                                        <img className="rounded h-56 object-cover" src={OUTSTANDING6} alt="outstanding6" />
                                                    </a>
                                                    <div className="absolute left-0 right-0 bottom-0 flex bg-[#363636] text-white text-xs px-3 py-1.5 opacity-90">
                                                        <span className="flex items-center gap-1">
                                                            <i className="font-medium text-sm"><IoEyeOutline/></i>
                                                            267,184
                                                        </span>
                                                        <span className="flex items-center gap-1 ml-3">
                                                            <i className="font-medium text-sm"><IoSaveOutline/></i>
                                                            64
                                                        </span>
                                                    </div>
                                                </div>
                                                <h3 className="text-base uppercase font-medium my-2">Hưu thư</h3>
                                            </div>
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

export default Outstanding;