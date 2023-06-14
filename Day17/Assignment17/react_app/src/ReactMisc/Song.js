function Song(props) {
	return (
		<li className="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
			<div className="me-auto">
				<div className="fw-bold">{props.songItem.title}</div>
				<small className="text-muted">{props.songItem.artist}</small>
				<br/>
				<small className="text-muted">{props.songItem.album}</small>
			</div>
			<span className="badge bg-secondary p-2 rounded-pill">{props.songItem.year}</span>
		</li>
	);
}

// function Song(props) {
// 	return (
// 		<div className="d-flex justify-content-between align-items-start">
// 			<div className="me-auto">
// 				<div className="fw-bold">{props.songItem.title}</div>
// 				<small className="text-muted">{props.songItem.artist}</small>
// 				<br />
// 				<small className="text-muted">{props.songItem.album}</small>
// 			</div>
// 			<span className="badge bg-secondary p-2 rounded-pill">
// 				{props.songItem.year}
// 			</span>
// 		</div>
// 	);
// }

export default Song;
