function Button(props) {
	return <button className="btn btn-primary btn-sm">{props.children}</button>;
}

//Whatever you pass between Component tag is accessed by children property
export default Button;
