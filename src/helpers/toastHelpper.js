import { toast } from 'react-toastify';

export const toastError = error => {
    let message = null;
    // Hàm error.hasOwnProperty('message') kiểm tra đối tượng error có thuộc tính message không
    if (typeof error === 'object' && error.message) {
        ({ message } = error);
    }
    if (message !== null && typeof message !== 'undefined' && message !== '') {
        toast.error(message);
    }
}

export const toastSuccess = message => {
    if (message !== null && typeof message !== 'undefined' && message !== '') {
        toast.success(message);
    }
}