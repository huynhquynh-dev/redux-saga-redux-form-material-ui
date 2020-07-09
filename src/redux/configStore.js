import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./../reducers";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from './../sagas';

const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              shouldHotReload: false,
          })
        : compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Tạo func để sau này có thể truyền tham số vào
const configStore = () => {
    // middlewares sẽ sắp xếp theo thứ tự ưu tiên. Dòng code sau sẽ ưu tiên thunk hơn saga
    const middlewares = [thunk, sagaMiddleware];
    const enhancers = [applyMiddleware(...middlewares)];

    const store = createStore(rootReducer, composeEnhancers(...enhancers));

    // then run the saga
    sagaMiddleware.run(rootSaga);
    
    return store;
};

export default configStore;
