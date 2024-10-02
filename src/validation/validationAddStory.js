export default function validationAddStory(values) {
    const error = {}

    if(!values.name) {
        error.name = "Trường này không được để trống"
    } else {
        delete error.name
    }

    if(!values.authorName) {
        error.authorName = "Trường này không được để trống"
    } else {
        delete error.authorName
    }

    if(!values.category) {
        error.category = "Trường này không được để trống"
    } else {
        delete error.category
    }

    if(!values.description) {
        error.description = "Trường này không được để trống"
    } else {
        delete error.description
    }

    if(!values.image) {
        error.image = "Bạn chưa chọn ảnh"
    } else {
        delete error.image
    }

    values.chapters && values.chapters.forEach((chapter) => {
        if(!chapter.title) {
            error.title = "Trường này không được để trống"
        } else {
            delete error.title
        }

        if(!chapter.paragraph) {
            error.paragraph = "Trường này không được để trống"
        } else {
            delete error.paragraph
        }
    })

    return error
}