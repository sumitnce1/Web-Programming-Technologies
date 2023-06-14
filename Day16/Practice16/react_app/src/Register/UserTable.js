function UserTable(props){	
	return <div>
		<table border="1">
			<thead>
				<tr>
					<th>Name</th>
					<th>Dob</th>
					<th>Gender</th>
					<th>Language</th>
				</tr>
			</thead>
			<tbody>
				{props.users.map(item => <tr>
					<td>{item.name}</td>
					<td>{item.dob}</td>
					<td>{item.gender}</td>
					<td>{item.lang}</td>
				</tr>)}
			</tbody>
		</table>
	</div>
}

export default UserTable;