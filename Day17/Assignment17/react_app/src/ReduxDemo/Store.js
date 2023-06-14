import {configureStore} from "@reduxjs/toolkit"
import FriendsReducer from "./FriendsStateSlice.js"

export default configureStore({
	reducer:{
		friends : FriendsReducer,
	}
})

/*
	1.Create store
	2.Apply Provider
	3.Create state slice
		a)Give initlial value to state
		b)Write reducers to change state using action (functions to change state)
		c)Export action,reducer 
		d)Register in store
	4.Use useSelector to access state wherever you want to access 
*/