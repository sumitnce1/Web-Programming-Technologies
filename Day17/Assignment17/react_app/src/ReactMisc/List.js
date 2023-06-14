export function List(props) {
	return <div className="list-group">{props.children}</div>;
}

export function ListItem(props){
	return <li className="list-group-item list-group-item-action">
		{props.children}
	</li>
}




