import * as modalConstants from "./../constants/modal";

export const showModal = () => ({
    type: modalConstants.SHOW_MODAL,
});

export const hideModal = () => ({
    type: modalConstants.HIDE_MODAL,
});

export const changeModalTitle = (title) => ({
    type: modalConstants.CHANGE_MODAL_TITLE,
    payload: {
        title,
    },
});

export const changeModalContent = (component) => ({
    type: modalConstants.CHANGE_MODAL_CONTENT,
    payload: {
        component,
    },
});
