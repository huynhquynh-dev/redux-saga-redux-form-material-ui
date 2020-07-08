import axios from 'axios';

class AxiosService {
    // Khi được gọi sẽ new 1 class và contructor được khởi tạo
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess, this.handleError);
        // Khởi tạo biến dùng cho toàn class
        this.instance = instance;
    }

    handleSuccess(responce) {
        return responce;
    }

    handleError(error) {
        return Promise.reject(error);
    }

    get(url) {
        return this.instance.get(url);
    }
}

export default new AxiosService();