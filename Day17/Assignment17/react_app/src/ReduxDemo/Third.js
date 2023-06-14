import {useDispatch} from "react-redux"
import {insert} from "./FriendsStateSlice"

function Third() {
	const dispatch = useDispatch()

	const handleSubmit = function(event){
		event.preventDefault()
		var name = event.target.name.value
		dispatch(insert(name))
		//dispatching the action
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				Enter name :<input type="text" name="name" />
				<button>Add to list</button>
			</form>
		</div>
	);
}
export default Third;
