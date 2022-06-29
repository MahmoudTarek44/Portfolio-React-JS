const Increment = (props) => {
	return (
		<div>
			<button onClick={props.add} className="btn btn-outline-info p-4 m-2">
				+
			</button>
		</div>
	);
};
export default Increment;
