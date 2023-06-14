import {useState} from "react"

function FriendList(){
	//var friends = ["Siddhant", "ANubhav", "neha","Rajat"]
	const [friends, setFriends] = useState([])

	const handleSubmit = function(event){
		event.preventDefault()
		var name = event.target.name.value
		//friends.push(name) // it will not re-render the component
		setFriends([...friends,name])
	}

	return <div>
			<form onSubmit={handleSubmit}>
				Enter friend name: <input type="text" name="name"/>
				<button>Add to list</button>
			</form>
			<ol>
				{friends.map(item =><li>{item}</li>)}
			</ol>
	</div>

}

export default FriendList;