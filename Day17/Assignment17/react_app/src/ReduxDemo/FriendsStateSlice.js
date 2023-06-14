import {createSlice} from "@reduxjs/toolkit"

export const friendsSlice = createSlice({
	name : "friends",
	initialState:{
		value:[]
	},
	reducers:{
		insert : function(state, action){
			state.value = [...state.value,action.payload]
			//state.push(action.payload)
		}
	}
})

export const {insert} = friendsSlice.actions
export default friendsSlice.reducer

//action is object with brings the data to reducer and also used to call the reducer
//action contains two properties
//payload -> contains the data
//type -> Decides which reducer to call

// x = [1,2]
// x = [...x,3]
// x.push(3)