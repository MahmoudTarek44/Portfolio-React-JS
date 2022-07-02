import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	loading: false,
	error: {},
};
const baseURL = "https://fakestoreapi.com/products";

export const getAllProducts = createAsyncThunk(
	"products/getAllProducts",
	() => {
		return fetch(baseURL)
			.then((res) => res.json())
			.then((json) => json);
	}
);

const ProductListSlice = createSlice({
	name: "Products",
	initialState,
	extraReducers: {
		[getAllProducts.pending]: (state) => {
			state.loading = true;
			console.log("request is pending");
		},
		[getAllProducts.fulfilled]: (state, action) => {
			state.loading = false;
			state.products = action.payload;
			console.log(action.payload);
		},
		[getAllProducts.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			console.log(action.payload);
		},
	},
});

export default ProductListSlice.reducer;
