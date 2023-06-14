function UserTable(props){
    return <div>
        <table border="1">
				<thead>
					<tr>
						<th>Name</th>
						<th>date of birth</th>
						<th>Gender</th>
						<th>Language</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((item) => (
						<tr>
							<td>{item.name}</td>
							<td>{item.dob}</td>
							<td>{item.gender}</td>
							<td>{item.lang.join(",")}</td>
						</tr>
					))}
				</tbody>
			</table>
    </div>
}
export default UserTable
