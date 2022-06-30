import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";

import Spinner from "react-bootstrap/Spinner";
import { removeTodo } from "../../Redux-Store/actions";

const TodoOutput = () => {
	const displayedArray = useSelector((array) => array.todoList);
	console.log(displayedArray);
	const dispatch = useDispatch();
	const removeTask = (index) => {
		dispatch(removeTodo(index));
	};

	return (
		<div className="w-50 border border-2 rounded-3 pt-3 mx-auto">
			<ul className="justify-content-between rounded-3 w-100 align-items-center px-5">
				{displayedArray.length > 0 ? (
					displayedArray.map((e, i) => {
						return (
							<li
								className="list-unstyled py-2 px-3 row justify-between align-items-center w-100 border rounded-pill my-2"
								key={i}
							>
								<p className="col-2 mb-0"># : {i}</p>
								<div className="col-8">
									<span className="px-5">{e.task}</span>
									<span className="px-5">{e.description}</span>
								</div>
								<button
									onClick={() => removeTask(i)}
									className="btn btn-danger col-2"
								>
									Remove
								</button>
							</li>
						);
					})
				) : (
					<div className="p-5">
						<h4 className="pb-4">load your tasks here !!</h4>
						<Spinner animation="border" variant="info" />
					</div>
				)}
			</ul>
		</div>
	);
};
export default TodoOutput;
