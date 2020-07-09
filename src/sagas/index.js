import {
    fork,
    take,
    call,
    put,
    delay,
    takeLatest,
    select,
} from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { STATUS_CODE } from "./../constants";

import { getList } from "./../apis/task";
import { fetchListTaskSuccess, fetchListTaskFailed, filterTaskSuccess } from "../actions/task";
import { showLoading, hideLoading } from "./../actions/ui";

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
        yield take(taskTypes.FETCH_TASK);
        yield put(showLoading());

        // getList không được để dấu ngoặc đơn sẽ xảy ra lỗi
        const resp = yield call(getList);
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
    // select chỉ có nhiệm vụ lấy data store tại saga
    const list = yield select((state) => state.task.listTask);
    const listTaskFilter = list.filter((task) =>
        task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
    );
    // Trả dữ liệu về cho reducer
    yield put(filterTaskSuccess(listTaskFilter));
}

function* rootSaga() {
    // Dùng fork là các hàm sẽ chạy song song nhau. Luôn lắng nge action
    yield fork(watchFetchListTaskAction);
    yield fork(watchCreateTaskAction);
    // Dùng takeLatest để khắc phục rẽ nhánh và lặp vô tận và thêm tính năng hơn so với fork. Luôn lắng nge action
    yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
