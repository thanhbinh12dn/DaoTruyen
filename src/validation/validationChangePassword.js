export default function validationChangePassword(values) {
    const errors = {}

    if(!values.oldPassword) {
        errors.oldPassword = "Không được để trống"
    } else {
        delete errors.oldPassword
    }

    if(values.newPassword === values.oldPassword) {
        errors.newPassword = "Mật khẩu mới không được trùng với mật khẩu cũ"
    } else if(values.newPassword <= 6) {
        errors.newPassword = "Mật khẩu tối thiểu 7 ký tự"
    } else {
        delete errors.newPassword
    }

    if(!values.confirmNewPassword) {
        errors.confirmNewPassword = "Xác nhận mật khẩu mới"
    } else if(values.confirmNewPassword !== values.newPassword) {
        errors.confirmNewPassword = "Mật khẩu xác nhận không chính xác"
    } else {
        delete errors.confirmNewPassword
    }

    return errors
}