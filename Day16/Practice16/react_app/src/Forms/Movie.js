import { useState } from "react";
import MovieTable from "./MovieTable";
function Movie() {
	const [users, setUsers] = useState([]);
	const handleSubmit = function (event) {
		event.preventDefault();
		var temp = {
			moviename: event.target.moviename.value,
			actor: event.target.actor.value,
            rdate: event.target.rdate.value,
			mtype: [...event.target.mtype]
				.filter((item) => item.checked)
				.map((ele) => ele.value),
            state: event.target.state.value,
		};
		console.log(temp);
		setUsers([...users, temp]);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				Enter Movie name: <input type="text" name="moviename" />
				<br />
				Enter Actor: <input type="text" name="actor" />
				<br />
				Release Date: <input type="date" name="rdate" /> <br />
				Movie Type:
				<input type="checkbox" name="mtype" value="2D" />2D
				<input type="checkbox" name="mtype" value="3D" /> 3D
				<input type="checkbox" name="mtype" value="IMAX" />IMAX
				<br />
                State: 
                <select name="state">
                    <option value="br">Bihar</option>
                    <option value="mh">Maharastra</option>
                    <option value="UP">Uatar Predesh</option>
                    <option value="MP">Madhya Pradesh</option>
                </select>
				<br />
                <br />

				<button>Save</button>
			</form>
			<hr />
			<br />
			<MovieTable data={users}/>
		</div>
	);
}

export default Movie;