// Actions import >>
import {
	ADD_TODO,
	REMOVE_TODO,
	INCREASE_COUNT,
	DECREASE_COUNT,
} from "./actions";

const initialState = {
	todoList: [],
	counter: 0,
};

export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todoList: [...state.todoList, action.input],
			};
		case REMOVE_TODO:
			return {
				...state,
				todoList: [
					...state.todoList.filter((e, i) => {
						return action.input !== i;
					}),
				],
			};
		default:
			console.log(state);
			return state;
	}
}
export function counterReducer(state = initialState, action) {
	switch (action.type) {
		case INCREASE_COUNT:
			return { ...state, counter: state.counter + 1 };
		case DECREASE_COUNT:
			if (state.counter > 0) {
				return { ...state, counter: state.counter - 1 };
			}
			break;
		default:
			console.log(state);
			return state;
	}
}
