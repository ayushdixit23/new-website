import { createSlice } from "@reduxjs/toolkit";

const socialSlice = createSlice({
	name: "socialSlice",
	initialState: {
		name: "",
		offer: "",
		details: "",
		Likes: "",
		Shares: "",
		Comments: "",
	},
	reducers: {
		socialData: (state, action) => {
			const { name, offer, details, Likes, Shares, Comments } = action.payload
			state.name = name
			state.offer = offer
			state.details = details
			state.Likes = Likes
			state.Shares = Shares
			state.Comments = Comments
		}
	}
})

export const { socialData } = socialSlice.actions
export default socialSlice.reducer

