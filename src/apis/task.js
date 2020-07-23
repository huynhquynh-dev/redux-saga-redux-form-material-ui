import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../constants';
import queryString from 'query-string';

// const urlRead = 'tasks';
// const urlInsert = 'tasks';
// const urlUpdate = 'tasks';
// const urlDelete = 'tasks';
const urlRead = 'read.php';
const urlInsert = 'insert.php';
const urlUpdate = 'update.php';
const urlDelete = 'delete.php';

export const getListTask = (params = {}) => {
    let queryParams = '';
    if(Object.keys(params).length > 0) {
        // Chuyển object thành câu query dùng thư viên query-string
        queryParams = `?${queryString.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${urlRead}${queryParams}`);
}

export const addTask = data => {
    return axiosService.post(`${API_ENDPOINT}/${urlInsert}`, data);
}

export const updateTask = data => {
    return axiosService.put(`${API_ENDPOINT}/${urlUpdate}`, data);
}

export const deleteTask = id => {
    return axiosService.delete(`${API_ENDPOINT}/${urlDelete}/${id}`);
}