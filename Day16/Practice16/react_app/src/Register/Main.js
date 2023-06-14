import {useState} from "react"
import User from "./User.js"
import UserTable from "./UserTable"


function Main(){
	const [users, setUsers] = useState([])

	const saveUser = function(data){
		setUsers([...users, data])
	}

	return <div>
		<User saveUser={saveUser} />
		<UserTable users={users}/>
	</div>
}
export default Main;