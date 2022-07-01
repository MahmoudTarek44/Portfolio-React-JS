import { useDispatch } from "react-redux/es/exports";
import { increaseCounter } from "../../Redux-Store/actions";

const Increment = () => {
	const dispatch = useDispatch();

	const increment = () => {
		dispatch(increaseCounter());
	};
	return (
		<div>
			<button onClick={increment} className="btn btn-outline-info p-4 m-2">
				+
			</button>
		</div>
	);
};
export default Increment;
