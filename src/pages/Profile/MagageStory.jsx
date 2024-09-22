import { useState } from 'react'
import TitleProfile from "./TitleProfile";
import { FaPlus, FaMinus  } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";

function ManageStory() {
    const [addInputParagraph, setAddInputParagraph] = useState([])
    const [values, setValues] = useState({
        nameStory: '',
        author: '',
        categories: '',
        description: '',
        title: '',
        paragraph: ''
    })

    const handleInput = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleInputChange = (index, e) => {
        const newInputParagraph = [...addInputParagraph]
        newInputParagraph[index] = e.target.value
        setAddInputParagraph(newInputParagraph)
    }

    const handleAddInput = () => {
        setAddInputParagraph([...addInputParagraph, ''])
    }

    const handleDeleteTextArea = (index) => {
        if(addInputParagraph.length > 1) {
            const newTextArea = [...addInputParagraph]
            newTextArea.splice(index, 1)
            setAddInputParagraph(newTextArea)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    console.log(addInputParagraph)

    return (
        <div>
            <TitleProfile title={"Quản lý truyện"} />
            <div className="bg-white p-4 md:p-6 shadow-md">
                <div className="mx-0 md:mx-10 md:p-5">
                    <h1 className="text-center text-xl font-medium">Đăng truyện</h1>
                    <div className="mt-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block font-medium" htmlFor="nameStory">Tên của truyện</label>
                                    <input 
                                        className="w-full px-2 py-1 border border-solid border-black rounded" 
                                        id="nameStory" 
                                        name="nameStory" 
                                        type="text"
                                        onChange={handleInput} 
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="author">Tên tác giả</label>
                                    <input 
                                        className="w-full px-2 py-1 border border-solid border-black rounded" 
                                        id="author" name="author" 
                                        type="text"
                                        onChange={handleInput} 
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="categories">Thể loại</label>
                                    <input 
                                        className="w-full px-2 py-1 border border-solid border-black rounded" 
                                        id="categories"
                                        name="categories" 
                                        type="text"
                                        onChange={handleInput} 
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label 
                                    htmlFor="dropzone-file"
                                    className="flex justify-center items-center h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                                >
                                    <div className='flex flex-col justify-center items-center gap-5 opacity-70'>
                                        <i className="text-3xl"><IoCloudUploadOutline/></i>
                                        <p><span className="font-bold">Chạm vào để tải ảnh lên </span>hoặc kéo và thả vào</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden"/>
                                </label>
                            </div>
                            <div className="mt-6">
                                <label className="block font-medium" htmlFor="description">Nội dung</label>
                                <textarea 
                                    className="w-full px-2 py-1 border border-solid border-black rounded" 
                                    name="description" 
                                    id="description"
                                    onChange={handleInput}
                                ></textarea>
                            </div>
                            <div className="mt-6 p-3 md:p-6 border-2 border-dashed border-borderInput">
                                {addInputParagraph.map((_, index) => 
                                    <div key={index} className="mt-6">
                                        <div>
                                            <label className="font-medium" htmlFor={`title${index}`}>Tiêu đề</label>
                                            <input 
                                                className="w-full px-2 py-1 border border-solid border-black rounded" 
                                                id={`title${index}`} 
                                                name={`title${index}`} 
                                                type="text"
                                                // value={value.title || ''}
                                                onChange={e => handleInputChange(index, e)}
                                            />
                                        </div>
                                        <div className="mt-6">
                                            <label className="font-medium" htmlFor={`paragraph${index}`}>Đoạn văn của chương</label>
                                            <textarea 
                                                className="w-full px-2 py-1 border border-solid border-black rounded" 
                                                name={`paragraph${index}`} 
                                                id={`paragraph${index}`}
                                                // value={value.paragraph || ''}
                                                onChange={handleInputChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                )}
                                <div className="mt-6">
                                    <i 
                                        className="inline-block text-2xl opacity-75 cursor-pointer"
                                        onClick={handleAddInput}
                                    ><FaPlus/></i>
                                    <i
                                        className="inline-block ml-4 text-2xl opacity-75 cursor-pointer"
                                        onClick={handleDeleteTextArea}
                                    ><FaMinus/></i>
                                </div>
                            </div>
                        </form>
                        <div className="mt-6 flex justify-around">
                            <div>
                                <button className="px-6 py-1 text-white rounded-sm bg-red-500">Xóa</button>
                            </div>
                            <div>
                                <button className="px-6 py-1 text-white rounded-sm bg-yellow-500">Sửa</button>
                            </div>
                            <div>
                                <button className="px-6 py-1 text-white rounded-sm bg-main">Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageStory;