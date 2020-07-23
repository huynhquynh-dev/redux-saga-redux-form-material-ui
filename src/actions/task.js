// import * as taskApis from "./../apis/task";
import * as taskConstants from "./../constants/task";
import { STATUS } from './../constants'

// Show ===========================================================>
// Thêm params = {} vào để dùng cho chức năng search, sort,... Params lấy từ URL
export const fetchListTask = (params = {}) => {
    return {
        type: taskConstants.FETCH_TASK,
        payload: {
            params
        }
    };
};

export const fetchListTaskSuccess = data => {
    return {
        type: taskConstants.FETCH_TASK_SUCSESS,
        payload: {
            data,
        },
    };
};

export const fetchListTaskFailed = error => {
    return {
        type: taskConstants.FETCH_TASK_FAILED,
        payload: {
            error,
        },
    };
};

/**
 * B1: Gọi fetchListTaskRequest()
 * B2: Gọi fetchListTask => Reset: state tasks => []
 * B3: Gọi API
 * Nếu gọi api thành công thì fetchListTaskSuccess (data response)
 * Nếu gọi api thất bại thì fetchListTaskFailed (error response)
 */
// export const fetchListTaskRequest = () => {
//     return (dispatch) => {

//         // Reset: state tasks => []
//         dispatch(fetchListTask());
//         taskApis
//             .getList()
//             .then((response) => {
//                 const { data } = response;
//                 dispatch(fetchListTaskSuccess(data));
//             })
//             .catch((error) => {
//                 dispatch(fetchListTaskFailed(error));
//             });
//     };
// };

// Search ===========================================================>
export const filterTask = keyword => ({
    type: taskConstants.FILTER_TASK,
    payload: {
        keyword,
    },
});

export const filterTaskSuccess = data => ({
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
        data,
    },
});

// Add========================================================>
export const addTask = (title, description) => {
    return {
        type: taskConstants.ADD_TASK,
        payload: {
            title,
            description
        }
    };
};
export const addTaskSuccess = data => {
    return {
        type: taskConstants.ADD_TASK_SUCSESS,
        payload: {
            data,
        },
    };
};
export const addTaskFailed = error => {
    return {
        type: taskConstants.ADD_TASK_FAILED,
        payload: {
            error,
        },
    };
};

// Edit==============================================================>
export const setTaskEditing = task => {
    return {
        type: taskConstants.SET_TASK_EDITING,
        payload: {
            task,
        },
    };
};

// Update===========================================================>
export const updateTask = (title, description, status = STATUS[0].value ) => {
    return {
        type: taskConstants.UPDATE_TASK,
        payload: {
            title,
            description,
            status
        }
    };
};
export const updateTaskSuccess = data => {
    return {
        type: taskConstants.UPDATE_TASK_SUCSESS,
        payload: {
            data,
        },
    };
};
export const updateTaskFailed = error => {
    return {
        type: taskConstants.UPDATE_TASK_FAILED,
        payload: {
            error,
        },
    };
};

// Delete===========================================================>
export const deleteTask = id => {
    return {
        type: taskConstants.DELETE_TASK,
        payload: {
            id
        }
    };
};
export const deleteTaskSuccess = id => {
    return {
        type: taskConstants.DELETE_TASK_SUCSESS,
        payload: {
            id,
        },
    };
};
export const deleteTaskFailed = error => {
    return {
        type: taskConstants.DELETE_TASK_FAILED,
        payload: {
            error,
        },
    };
};
