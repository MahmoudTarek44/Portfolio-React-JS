import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	product: {},
	loading: false,
	error: {},
};
const baseURL = "https://fakestoreapi.com/products";

export const getOneProduct = createAsyncThunk("product/getOneProduct", (id) => {
	return fetch(`${baseURL}/${id}`)
		.then((res) => res.json())
		.then((json) => json);
});

const ProductSlice = createSlice({
	name: "Products",
	initialState,
	extraReducers: {
		[getOneProduct.pending]: (state) => {
			state.loading = true;
			console.log("request is pending");
		},
		[getOneProduct.fulfilled]: (state, action) => {
			state.loading = false;
			state.product = action.payload;
			console.log(action.payload);
		},
		[getOneProduct.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			console.log(action.payload);
		},
	},
});

export default ProductSlice.reducer;
