import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../../Redux-Store/actions";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const TodoForm = () => {
	const dispatch = useDispatch();

	const [task, setTask] = useState("");
	const [description, setDescription] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		if (task && description) {
			dispatch(addTodo({ task, description }));
			setTask("");
			setDescription("");
		} else {
			alert("Enter your data in input sections below !!");
		}
		console.log(task, description);
	};
	return (
		<Form
			onSubmit={submitForm}
			className="w-50 border border-2 rounded-3 p-5 mx-auto"
		>
			<Form.Group className="mb-3" controlId="formInput">
				<Form.Label>Enter your Task</Form.Label>
				<Form.Control
					onChange={(event) => setTask(event.target.value)}
					type="text"
					placeholder=""
					value={task}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formText">
				<Form.Label>Task description</Form.Label>
				<Form.Control
					onChange={(event) => setDescription(event.target.value)}
					as="textarea"
					type="text"
					placeholder=""
					value={description}
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Add task
			</Button>
		</Form>
	);
};
export default TodoForm;
