// Actions import >>
import { ADD_TODO } from "./actions";
import { REMOVE_TODO } from "./actions";

const initialState = {
	todoList: [],
};

function todoReducer(state = initialState, action) {
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
export default todoReducer;
