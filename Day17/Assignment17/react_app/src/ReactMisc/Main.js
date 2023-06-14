import { useState } from "react";
import Song from "./Song";
// import Button from "./Button"
import { List, ListItem } from "./List";

function Main() {
	const [songsData, setSongsData] = useState([
		{
			rank: 1,
			title: "Like a Rolling Stone",
			artist: "Bob Dylan",
			album: "Highway 61 Revisited",
			year: "1965",
		},
		{
			rank: 2,
			title: "(I Can't Get No) Satisfaction",
			artist: "The Rolling Stones",
			album: "Out of Our Heads",
			year: "1965",
		},
		{
			rank: 3,
			title: "Imagine",
			artist: "John Lennon",
			album: "Imagine",
			year: "1971",
		},
	]);
	return (
		<div className="row">
			<div className="col-4">
				<div className="list-group">
					{songsData.map((songItem) => <Song key={songItem.rank} songItem={songItem}/>)}
				</div>
				{/*<Button>Save</Button>*/}
				{/*<List>
					{songsData.map((songItem) => (
						<ListItem>
							<Song songItem={songItem} />
						</ListItem>
					))}
				</List>*/}
			</div>
		</div>
	);
}


export default Main;
