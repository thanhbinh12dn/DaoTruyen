import { useEffect, useState } from "react";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import { categories_url } from '../url/stories_url'
import { useStoriesContext } from "../contexts/stories_context";

function Category() {

    const [toggleCategory, setToggleCategory] = useState(true)
    const { categoriesData, fetchCategories } = useStoriesContext()

    useEffect(() => {
        fetchCategories(categories_url)
    }, [])


    console.log('Category', categoriesData)

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
                        {categoriesData && categoriesData.map((category) => {
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