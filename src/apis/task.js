import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../constants';
import queryString from 'query-string';

const url = 'tasks';

export const getListTask = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length > 0) {
        // Chuyển object thành câu query dùng thư viên query-string
        queryParams = `?${queryString.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
}

export const addTask = data => {
    return axiosService.post(`${API_ENDPOINT}/${url}`, data);
}

export const updateTask = (data, taskId) => {
    return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
}