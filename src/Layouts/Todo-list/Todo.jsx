import TodoForm from "../../Components/Todo-Items/Todo-form";
import TodoOutput from "../../Components/Todo-Items/todo-output";

const Todo = () => {
	return (
		<div className="todo d-block text-center align-items-center mx-auto mt-5  border-2 rounded-3">
			<h1 className="py-3">Todo-list App </h1>
			<div className="count-control d-flex flex-column justify-content-center mx-auto py-4 text-center">
				<TodoForm />
				<TodoOutput />
			</div>
		</div>
	);
};

export default Todo;
