function Friends(props) {

	const handleSubmit = function(event){
		event.preventDefault()
		var name = event.target.name.value
		props.saveFriends(name)
	}

	return (
		<div>
			<form onSubmit = {handleSubmit}>
				Enter name
				<input type="text" name="name" />
				<button>Add to List</button>
			</form>
		</div>
	);
}

export default Friends;
