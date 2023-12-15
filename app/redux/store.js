
import { configureStore } from "@reduxjs/toolkit";
import socialSlice from "./slice/socialSlice";

export const store = configureStore({
	reducer: {
		socialSlice: socialSlice
	},
})