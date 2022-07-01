import { useDispatch } from "react-redux/es/exports";
import { decreaseCounter } from "../../Redux-Store/actions";

const Decrement = () => {
	const dispatch = useDispatch();

	const decrement = () => {
		dispatch(decreaseCounter());
	};

	return (
		<div>
			<button onClick={decrement} className="btn btn-outline-warning p-4 m-2">
				-
			</button>
		</div>
	);
};
export default Decrement;
