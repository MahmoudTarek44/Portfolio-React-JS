// Action types >>
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

// Action declarations >>
export const addTodo = (input) => {
	return {
		type: ADD_TODO,
		input,
	};
};
export const removeTodo = (input) => {
	return {
		type: REMOVE_TODO,
		input,
	};
};
