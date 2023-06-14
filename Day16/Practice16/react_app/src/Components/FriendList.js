function FriendList(props) {
	return (
		<div>
			<ol>{props.friends.map(item => <li>{item}</li>)}</ol>
		</div>
	);
}
export default FriendList;
