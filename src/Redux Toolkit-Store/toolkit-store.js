import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Features/todoSlice";
import counterReducer from "./Features/counterSlice";
import productListReducer from "./Features/product-list-Slice";
import productReducer from "./Features/product-details-Slice";

const store = configureStore({
	reducer: {
		todo: todoReducer,
		counter: counterReducer,
		productsData: productListReducer,
		oneProduct: productReducer,
	},
});

export default store;
