import {useSelector} from "react-redux"
function Fourth(){
	//Arrow function in useSelector arg is used to fetch state
	var friends = useSelector(state => state.friends.value)

	return <div>
		<ol>
			{friends.map(item => <li>{item}</li>)}
		</ol>
	</div>
}
export default Fourth;