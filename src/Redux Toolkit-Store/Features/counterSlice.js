import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	counter: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.counter++;
		},
		decrement: (state) => {
			state.counter > 0
				? state.counter--
				: console.log("cant count less than zero");
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
