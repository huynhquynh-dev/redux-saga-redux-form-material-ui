import * as taskConstants from "./../constants/task";
import * as toastHelper from "./../helpers/toastHelpper";

const initialState = {
    listTask: [],
    taskEditing: null,
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case taskConstants.FETCH_TASK: {
            return {
                ...state,
                listTask: [],
            };
        }
        case taskConstants.FETCH_TASK_SUCSESS: {
            const { data } = action.payload;
            return {
                ...state,
                listTask: data,
            };
        }
        case taskConstants.FETCH_TASK_FAILED: {
            const { error } = action.payload;
            // Cài đặt react toastify để show error : npm install --save react-toastify
            // https://www.npmjs.com/package/react-toastify
            toastHelper.toastError(error);
            return {
                ...state,
                listTask: [],
            };
        }

        case taskConstants.FILTER_TASK_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listTask: data,
            };
        }

        case taskConstants.ADD_TASK: {
            return {
                ...state,
                // taskEditing: null,
            };
        }
        case taskConstants.ADD_TASK_SUCSESS: {
            const { data } = action.payload;
            toastHelper.toastSuccess("Thêm mới công việc thành công");
            return {
                ...state,
                // listTask: state.listTask.concat([data])
                // Đoạn trên phần tử thêm mới sẽ nằm dưới cùng. Vì vậy sử dụng đoạn dưới để nối phần tử
                listTask: [data].concat(state.listTask),
            };
        }
        case taskConstants.ADD_TASK_FAILED: {
            const { error } = action.payload;
            toastHelper.toastError(error);
            return {
                ...state,
            };
        }

        case taskConstants.SET_TASK_EDITING: {
            const { task } = action.payload;
            return {
                ...state,
                taskEditing: task,
            };
        }

        case taskConstants.UPDATE_TASK: {
            return {
                ...state,
            };
        }
        case taskConstants.UPDATE_TASK_SUCSESS: {
            const { data } = action.payload;
            const { listTask } = state;
            const index = listTask.findIndex((item) => item.id === data.id);
            if (index !== -1) {
                const newList = [
                    ...listTask.slice(0, index),
                    data,
                    ...listTask.slice(index + 1),
                ];
                toastHelper.toastSuccess("Cập nhật công việc thành công");
                return {
                    ...state,
                    listTask: newList,
                };
            }
            return {
                ...state,
            };
        }
        case taskConstants.UPDATE_TASK_FAILED: {
            const { error } = action.payload;
            toastHelper.toastError(error);
            return {
                ...state,
            };
        }

        case taskConstants.DELETE_TASK: {
            return {
                ...state,
            };
        }
        case taskConstants.DELETE_TASK_SUCSESS: {
            const { id } = action.payload;
            toastHelper.toastSuccess("Xóa công việc thành công");
            return {
                ...state,
                listTask: state.listTask.filter(item => item.id !== id),
            };
        }
        case taskConstants.DELETE_TASK_FAILED: {
            const { error } = action.payload;
            toastHelper.toastError(error);
            return {
                ...state,
            };
        }

        default:
            return state;
    }
};

export default taskReducer;
