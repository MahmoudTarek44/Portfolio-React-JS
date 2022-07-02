import { useDispatch } from "react-redux/es/exports";
// import { increaseCounter } from "../../Redux-Store/actions";
import { increment } from "../../Redux Toolkit-Store/Features/counterSlice";

const Increment = () => {
	const dispatch = useDispatch();

	const onIncrement = () => {
		dispatch(increment());
	};
	return (
		<div>
			<button onClick={onIncrement} className="btn btn-outline-info p-4 m-2">
				+
			</button>
		</div>
	);
};
export default Increment;
