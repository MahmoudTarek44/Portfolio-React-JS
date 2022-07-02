import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	taskList: [],
};

const todoSlice = createSlice({
	name: "Todo",
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.taskList.push(action.payload);
		},
		removeTask: (state, action) => {
			state.taskList.splice(action.payload, 1);
		},
	},
});
export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
