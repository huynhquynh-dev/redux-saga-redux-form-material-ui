import * as uiConstants from "./../constants/ui";

export const showLoading = () => {
    return {
        type: uiConstants.SHOW_LOADING,
    };
};

export const hideLoading = () => {
    return {
        type: uiConstants.HIDE_LOADING,
    };
};

export const showSidebar = () => {
    return {
        type: uiConstants.SHOW_SIDEBAR,
    };
};

export const hideSidebar = () => {
    return {
        type: uiConstants.HIDE_SIDEBAR,
    };
};
