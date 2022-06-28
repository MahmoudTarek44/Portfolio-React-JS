const Decrement = (props) => {
	return (
		<div>
			<button onClick={props.less} className="btn btn-outline-warning p-4">-</button>
		</div>
	);
};
export default Decrement;
