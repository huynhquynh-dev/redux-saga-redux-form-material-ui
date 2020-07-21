import * as taskConstants from "./../constants/task";
import * as toastHelper from "./../helpers/toastHelpper";

const initialState = {
    listTask: [],
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

        case taskConstants.ADD_TASK_SUCSESS: {
            const { data } = action.payload;
            return {
                ...state,

                // listTask: state.listTask.concat([data])
                // Đoạn trên phần tử thêm mới sẽ nằm dưới cùng. Vì vậy sử dụng đoạn dưới để nối phần tử
                listTask: [data].concat(state.listTask)
            };
        }
        case taskConstants.ADD_TASK_FAILED: {
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
