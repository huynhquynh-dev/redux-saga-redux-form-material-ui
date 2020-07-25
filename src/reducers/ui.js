import * as uiConstants from "./../constants/ui";

const initialState = {
    showLoading: false,
    showSidebar: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case uiConstants.SHOW_LOADING:
            return {
                ...state,
                showLoading: true,
            };
        case uiConstants.HIDE_LOADING:
            return {
                ...state,
                showLoading: false,
            };
        case uiConstants.SHOW_SIDEBAR:
            return {
                ...state,
                showSidebar: true,
            };
        case uiConstants.HIDE_SIDEBAR:
            return {
                ...state,
                showSidebar: false,
            };

        default:
            return state;
    }
};

export default reducer;
