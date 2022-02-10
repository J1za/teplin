import {
	SHOW_MODAL,
	HIDE_MODAL,
	SET_MODAL_TITLE, SET_MODAL_DATA,
} from "../../types/modals";

export const showModal = (modalType) => ({
	type: SHOW_MODAL,
	payload: modalType
})

export const setModalTitle = (title) => ({
	type: SET_MODAL_TITLE,
	title
})

export const setModalData = (data) => ({
	type: SET_MODAL_DATA,
	data
})

export const hideModal = () => ({
	type: HIDE_MODAL
})