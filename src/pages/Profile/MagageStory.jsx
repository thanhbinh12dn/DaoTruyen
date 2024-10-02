import { useState, useEffect, useRef } from 'react'
import TitleProfile from "./TitleProfile";
import { FaPlus, FaMinus  } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { addStory_url } from '../../url/translator_url'
import validationAddStory from '../../validation/validationAddStory';

function ManageStory() {
    const [addInputParagraph, setAddInputParagraph] = useState([{ }])
    const [uploadImage, setUploadImage] = useState()
    const [errorMaxSize, setErrorMaxSize] = useState(false)
    const [values, setValues] = useState({
        name: '',
        authorName: '',
        category: '',
        description: ''
    })
    const [errorsAddStory, setErrorsAddStory] = useState({})
    const [btnDisabled, setBtnDisabled] = useState(false)

    const nameRef = useRef(null)
    const authorNameRef = useRef(null)
    const categoryRef = useRef(null)
    const descriptionRef = useRef(null)
    const titleRef = useRef(null)
    const paragraphRef = useRef(null)
    const fileInputRef = useRef(null)

    useEffect(() => {
        return () => {
            {uploadImage && URL.revokeObjectURL(uploadImage.preview)}
        }
    }, [uploadImage])

    const handleInput = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleInputChange = (index, e) => {
        const newInputParagraph = [...addInputParagraph]
        newInputParagraph[index].title = e.target.value
        setAddInputParagraph(newInputParagraph)
    }

    const handleTextAreaChange = (index, e) => {
        const newInputParagraph = [...addInputParagraph]
        newInputParagraph[index].paragraph = e.target.value
        setAddInputParagraph(newInputParagraph)
    }

    const handleAddInput = () => {
        setAddInputParagraph([...addInputParagraph, { }])
    }

    const handleDeleteTextArea = (index) => {
        if(addInputParagraph.length > 1) {
            const newTextArea = [...addInputParagraph]
            newTextArea.splice(index, 1)
            setAddInputParagraph(newTextArea)
        }
    }

    const handleUploadImage = (e) => {
        const maxSize = 10 * 1024 * 1024
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        if(file.size < maxSize) {
            setUploadImage(file)
        } else {
            setErrorMaxSize(true)
        }
    }

    const handleSubmitAddStory = (e) => {
        e.preventDefault()
        

        const formDataCheck = {...values, chapters: [...addInputParagraph], image: uploadImage}
        setErrorsAddStory(validationAddStory(formDataCheck))

        console.log('error adđ story',errorsAddStory)
        if(!Object.keys(errorsAddStory).length) {
            console.log('can call api...')
            setBtnDisabled(true)
            const emailStorage = localStorage.getItem("email")
            const userTokenStorage = localStorage.getItem("accessToken")
            const emailString = JSON.parse(emailStorage)
            const userToken = JSON.parse(userTokenStorage)

            // const formData = {email: emailString, teamTranslateId: "2", ...values, chapters: [...addInputParagraph]}
            const chapters = [...addInputParagraph]
            const formData = new FormData()

            formData.append('email', emailString)
            formData.append('teamTranslateId', '2')
            formData.append('name', values.name)
            formData.append('authorName', values.authorName)
            formData.append('category', values.category)
            formData.append('description', values.description)
            formData.append('image', uploadImage)
            // form data server nhan khong phai la 1 object ma la tung thanh phan
            // va dang loi la chuong dang generate ra tat ca cac chuong la 0

            chapters.forEach((chapter, index) => {
                formData.append(`chapters[${index}].title`, chapter.title)
                formData.append(`chapters[${index}].paragraph`, chapter.paragraph)
            })

            fetch(addStory_url, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${userToken}`
                },
                body: formData
            })
            .then((res) => {
                if(res.ok) {
                    console.log('response add story',res)
                    nameRef.current.value = ''
                    authorNameRef.current.value = ''
                    categoryRef.current.value = ''
                    descriptionRef.current.value = ''
                    titleRef.current.value = ''
                    paragraphRef.current.value = ''
                    fileInputRef.current.value = ''
                    setUploadImage(null)
                    setBtnDisabled(false)
                }
            })
            .catch((error) => {
                console.log('error add story', error)
                setBtnDisabled(false)
            })
        }

        // console.log("form data",formData)
        // console.log('uploadImage', uploadImage)
        // console.log('token', userToken)
    }

    console.log('values', values, 'addInputParagraph', addInputParagraph)

    return (
        <div>
            <TitleProfile title={"Quản lý truyện"} />
            <div className="bg-white p-4 md:p-6 shadow-md">
                <div className="mx-0 lg:mx-10 lg:p-5">
                    <h1 className="text-center text-xl font-medium">Đăng truyện</h1>
                    <div className="mt-6">
                        <form onSubmit={handleSubmitAddStory}>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <label className="block font-medium" htmlFor="nameStory">Tên của truyện</label>
                                    <input 
                                        ref={nameRef}
                                        className="w-full px-2 py-1 border border-solid border-black rounded" 
                                        id="nameStory" 
                                        name="name" 
                                        type="text"
                                        onChange={handleInput}
                                    />
                                    {errorsAddStory.name && <span className="text-red-600 text-sm">{errorsAddStory.name}</span>}
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="author">Tên tác giả</label>
                                    <input 
                                        ref={authorNameRef}
                                        className="w-full px-2 py-1 border border-solid border-black rounded" 
                                        id="author" name="authorName" 
                                        type="text"
                                        onChange={handleInput}
                                    />
                                    {errorsAddStory.authorName && <span className="text-red-600 text-sm">{errorsAddStory.authorName}</span>}
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="category">Thể loại</label>
                                    <input 
                                        ref={categoryRef}
                                        className="w-full px-2 py-1 border border-solid border-black rounded" 
                                        id="category"
                                        name="category" 
                                        type="text"
                                        onChange={handleInput} 
                                    />
                                    {errorsAddStory.category && <span className="text-red-600 text-sm">{errorsAddStory.category}</span>}
                                </div>
                            </div>
                            <div className="mt-6">
                                <label 
                                    htmlFor="dropzone-file"
                                    className="flex justify-center items-center h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                                >
                                    <div className='md:flex flex-col justify-center items-center text-center gap-5 opacity-70'>
                                        <i className="text-3xl flex justify-center"><IoCloudUploadOutline/></i>
                                        <p><span className="font-bold">Chạm vào để tải ảnh lên </span>hoặc kéo và thả vào</p>
                                    </div>
                                    <input 
                                        ref={fileInputRef}
                                        id="dropzone-file" 
                                        type="file" 
                                        className="hidden"
                                        onChange={handleUploadImage}
                                    />
                                </label>
                                {errorMaxSize && <span className="text-red-600">Kích thước ảnh lớn hơn 10MB, bạn vui lòng chọn ảnh khác nhé</span>}
                                {errorsAddStory.image && <span className="text-red-600 text-sm">{errorsAddStory.image}</span>}
                            </div>
                            {uploadImage && 
                            <div className="mt-3">
                                <span className="font-medium mb-5">Hình ảnh</span>
                                <img src={uploadImage.preview} className="w-52 object-cover rounded-lg"/>    
                            </div>}
                            <div className="mt-6">
                                <label className="block font-medium" htmlFor="description">Nội dung</label>
                                <textarea 
                                    ref={descriptionRef}
                                    className="w-full px-2 py-1 border border-solid border-black rounded" 
                                    name="description" 
                                    id="description"
                                    onChange={handleInput}
                                ></textarea>
                                {errorsAddStory.description && <span className="text-red-600 text-sm">{errorsAddStory.description}</span>}
                            </div>
                            <div className="mt-6 p-3 md:p-6 border-2 border-dashed border-borderInput">
                                {addInputParagraph.map((value, index) => 
                                    <div key={index} className="mt-6">
                                        <div className="mt-6">
                                            <label className="font-medium" htmlFor={`title${index}`}>Tiêu đề</label>
                                            <input 
                                                ref={titleRef}
                                                className="w-full px-2 py-1 border border-solid border-black rounded" 
                                                id={`title${index}`} 
                                                name={`title${index}`} 
                                                type="text"
                                                onChange={e => handleInputChange(index, e)}
                                            />
                                            {errorsAddStory.title && <span className="text-red-600 text-sm">{errorsAddStory.title}</span>}
                                        </div>
                                        <div className="mt-6">
                                            <label className="font-medium" htmlFor={`paragraph${index}`}>Đoạn văn của chương</label>
                                            <textarea 
                                            ref={paragraphRef}
                                                className="w-full px-2 py-1 border border-solid border-black rounded" 
                                                name={`paragraph${index}`} 
                                                id={`paragraph${index}`}
                                                onChange={e => handleTextAreaChange(index, e)}
                                            ></textarea>
                                            {errorsAddStory.paragraph && <span className="text-red-600 text-sm">{errorsAddStory.paragraph}</span>}
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
                            <div className="mt-6 flex justify-end">
                                <div>
                                    <button 
                                        className={`px-6 py-2 text-white rounded-sm bg-main border border-solid border-main hover:text-main hover:bg-white ${btnDisabled ? 'opacity-40' : ''}`}
                                        disabled={btnDisabled}
                                    >Đăng truyện</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageStory;