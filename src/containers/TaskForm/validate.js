// Validate theo name của Field. Dùng chung tất cả Field trong from
const validate = values => {
    const errors = {};
    const { title } = values;
    if(!title) {
        errors.title = 'Vui lòng nhập tiêu đề';
    }
    else if (title.trim() && title.length < 5) {
        errors.title = 'Tiêu đề phải lớn hơn 5 kí tự';
    }
    return errors;
}

export default validate;
