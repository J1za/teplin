import {
	SHOW_MODAL,
	HIDE_MODAL,
	SET_MODAL_TITLE, SET_MODAL_DATA,
} from "../../types/modals";

const initialState = {
	modalType: null,
	modalTitle: null,
	modalData: [],
}

const ModalReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				...state,
				modalType: action.payload
			}
		case HIDE_MODAL:
			return initialState
		case SET_MODAL_TITLE:
			return {
				...state,
				modalTitle: action.title
			}
		case SET_MODAL_DATA:
			return {
				...state,
				modalData: action.data,
			}
		default:
			return state
	}
}

export default ModalReducer;