import {useState} from "react"
import Friends from "./Friends.js"
import FriendList from "./FriendList.js"

function Main() {

	const [friends, setFriends] = useState([])

	const saveFriends = function(data){
		setFriends([...friends, data])
	}

	return <div>
		<Friends saveFriends={saveFriends}/>
		<FriendList friends={friends}/>
	</div>;
}

export default Main;

