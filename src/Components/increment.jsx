const Increment = (props) => {
	return (
		<div>
			<button onClick={props.add} className="btn btn-outline-info p-4">
				+
			</button>
		</div>
	);
};
export default Increment;
