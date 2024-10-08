export default function validationForm(values, type) {
    const errors = {}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/

    if(!values.email) {
        errors.email = "Trường này là bắt buộc"
    }else if(!emailRegex.test(values.email)) {
        errors.email = "Địa chỉ email không hợp lệ"
    } else {
        delete errors.email
    }

    if(!values.password) {
        errors.password = "Trường này là bắt buộc"
    } else if(values.password.length <= 6) {
        errors.password = "Mật khẩu tối thiểu 7 ký tự"
    } else {
        delete errors.password
    }

    if(type === "signUp") {
        if(!values.name.trim()) {
            errors.name = "Trường này là bắt buộc"
        } else {
            delete errors.name
        }

        if(!values.confirmPassword) {
            errors.confirmPassword = "Xác nhận mật khẩu"
        } else if(values.confirmPassword !== values.password) {
            errors.confirmPassword = "Mật khẩu xác nhận không chính xác"
        } else {
            delete errors.confirmPassword
        }
    }

    return errors
}