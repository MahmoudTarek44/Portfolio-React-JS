import { useDispatch } from "react-redux/es/exports";
import { decrement } from "../../Redux Toolkit-Store/Features/counterSlice";

const Decrement = () => {
	const dispatch = useDispatch();

	const onDecrement = () => {
		dispatch(decrement());
	};

	return (
		<div>
			<button onClick={onDecrement} className="btn btn-outline-warning p-4 m-2">
				-
			</button>
		</div>
	);
};
export default Decrement;
