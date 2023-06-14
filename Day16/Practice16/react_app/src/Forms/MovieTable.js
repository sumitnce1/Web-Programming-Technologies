function UserTable(props){
    return <div>
        <table border="1">
				<thead>
					<tr>
						<th>Movie Name</th>
						<th>Actor</th>
						<th>Release Date</th>
						<th>Movie Type</th>
                        <th>State</th>                        
					</tr>
				</thead>
				<tbody>
					{props.data.map((item) => (
						<tr>
							<td>{item.moviename}</td>
							<td>{item.actor}</td>
							<td>{item.rdate}</td>
							<td>{item.mtype.join(",")}</td>
                            <td>{item.state}</td>
						</tr>
					))}
				</tbody>
			</table>
    </div>
}
export default UserTable
