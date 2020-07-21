import {
    fork,
    take,
    call,
    put,
    delay,
    takeLatest,
    // select,
    takeEvery,
} from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { STATUS_CODE, STATUS } from "./../constants";

import { getListTask, addTask } from "./../apis/task";
import {
    fetchListTaskSuccess,
    fetchListTaskFailed,
    // filterTaskSuccess,
    addTaskSuccess,
    addTaskFailed,
    fetchListTask,
} from "../actions/task";
import { showLoading, hideLoading } from "./../actions/ui";
import { hideModal } from "../actions/modal";

/**
 * B1: Thực thi action fetch task
 * B2: Gọi api. (Hiển thị loading)
 * B3: Kiểm tra status code
 * Nếu thành công...
 * Nếu thất bại...
 * Tắt loading
 * Thực thi công việc tiếp theo
 */
function* watchFetchListTaskAction() {
    // Do take chỉ chạy 1 lần và ngừng luôn nên những dòng code sau nó sẽ chỉ chạy 1 lần như nó.
    // Dùng lặp vô tận để khắc phục
    while (true) {
        // task dùng để lắng nghe action. Khi action được gọi thì sẽ chạy các dòng lệnh sau task
        const action = yield take(taskTypes.FETCH_TASK);
        const { params } = action.payload;

        // showLoading phải nằm sau action taskTypes.FETCH_TASK để khi có action đó thì các hàm sau mới thực thi
        yield put(showLoading());

        // getList không được để dấu ngoặc đơn sẽ xảy ra lỗi
        const resp = yield call(getListTask, params); // Truyền params vào getListTask trong hàm call

        const { status, data } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            // Nếu gọi api thành công thì fetchListTaskSuccess (data response)
            yield put(fetchListTaskSuccess(data));
        } else {
            // Nếu gọi api thất bại thì fetchListTaskFailed (error response)
            yield put(fetchListTaskFailed(data));
        }
        yield delay(500);
        yield put(hideLoading());
    }
}

function* watchCreateTaskAction() {
    yield true;
    console.log("Task Action");
}

function* filterTaskSaga({ payload }) {
    yield delay(500);
    const { keyword } = payload;
    yield put(
        fetchListTask({
            // q là theo quy tắc đặt tên của json-server
            q: keyword,
        })
    );
    // const { keyword } = payload;
    // // select chỉ có nhiệm vụ lấy data store tại saga
    // const list = yield select((state) => state.task.listTask);
    // const listTaskFilter = list.filter((task) =>
    //     task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
    // );
    // // Trả dữ liệu về cho reducer
    // yield put(filterTaskSuccess(listTaskFilter));
}

function* addTaskSaga({ payload }) {
    const { title, description } = payload;
    // Hiển thị loading
    yield put(showLoading());
    const resp = yield call(addTask, {
        title,
        description,
        // Thêm mới thì mặt định vào READY nên status = 0
        status: STATUS[0].value,
    });
    const { status, data } = resp;
    if (status === STATUS_CODE.CREATED) {
        yield put(addTaskSuccess(data));
        // Đóng form lại. Chỉ cần gọi đến action đó
        yield put(hideModal());
    } else {
        yield put(addTaskFailed(data));
    }
    yield delay(500);
    yield put(hideLoading());
}

function* rootSaga() {
    // Dùng fork là các hàm sẽ chạy song song nhau. Luôn lắng nge action
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
    // Dùng takeLatest để khắc phục rẽ nhánh và lặp vô tận và thêm tính năng hơn so với fork. Luôn lắng nge action
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);

    yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}

export default rootSaga;
