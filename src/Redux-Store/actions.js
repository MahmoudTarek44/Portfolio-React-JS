// Action types >>
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";

// Todo Action declarations >>
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

// Counter Action declarations >>

export const increaseCounter = () => {
	return {
		type: INCREASE_COUNT,
	};
};
export const decreaseCounter = () => {
	return {
		type: DECREASE_COUNT,
	};
};
