import * as modalConstants from "./../constants/modal";

const initialState = {
    showModal: false,
    component: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case modalConstants.SHOW_MODAL: {
            return {
                ...state,
                showModal: true,
            };
        }
        case modalConstants.HIDE_MODAL: {
            return {
                ...state,
                showModal: false,
                title: '',
                component: null,
            };
        }
        case modalConstants.CHANGE_MODAL_TITLE: {
            const { title } = action.payload;
            return {
                ...state,
                title,
            };
        }
        case modalConstants.CHANGE_MODAL_CONTENT: {
            const { component } = action.payload;
            return {
                ...state,
                component,
            };
        }

        default:
            return state;
    }
};

export default reducer;
