import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const Register = () => {
	const {
		control,
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm({});

	const formSubmit = (data) => console.log(data);
	console.log("Errors", errors);

	const hobbies = [
		{ value: "hobby 1", label: "hobby 1" },
		{ value: "hobby 2", label: "hobby 2" },
		{ value: "hobby 3", label: "hobby 3" },
		{ value: "hobby 4", label: "hobby 4" },
		{ value: "hobby 5", label: "hobby 5" },
		{ value: "hobby 6", label: "hobby 6" },
	];
	const gender = [
		{ value: "Male", label: "Male" },
		{ value: "Female", label: "Female" },
	];
	return (
		<div className=" p-5 continer text-center ">
			<h1 className="pb-5">Form Validatoin</h1>
			<Form
				onSubmit={handleSubmit(formSubmit)}
				className="w-50 mx-auto p-5 border border-2 rounded-3"
			>
				<Form.Group className="mb-3 mx-auto w-75" controlId="formName">
					<Form.Label></Form.Label>
					<Form.Control
						{...register("Name", { required: true, maxLength: 20 })}
						type="text"
						placeholder="Name"
					/>
					{errors.Name?.type === "required" && (
						<p className="mt-2">Your name is required</p>
					)}
					{errors.Name?.type === "maxLength" && (
						<p className="mt-2">Your name can't be more than 20 letters</p>
					)}
				</Form.Group>
				<Form.Group className="mb-3 mx-auto w-75" controlId="formEmail">
					<Form.Label></Form.Label>
					<Form.Control
						{...register("Email", {
							required: true,
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						})}
						type="text"
						placeholder="Enter email"
					/>
					{errors.Email?.type === "required" && (
						<p className="mt-2">Your E-mail is required</p>
					)}
					{errors.Email?.type === "pattern" && (
						<p className="mt-2">Your E-mail is not valid !</p>
					)}
				</Form.Group>
				<Form.Group className="mb-3 mx-auto w-75" controlId="formPassword">
					<Form.Label></Form.Label>
					<Form.Control
						{...register("Password", {
							required: true,
							pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
						})}
						name="password"
						type="Password"
						placeholder="Password"
						className="mb-2"
					/>
					{errors.Password?.type === "required" && (
						<p className="mt-2">Your Password is required</p>
					)}
					{errors.Password?.type === "pattern" && (
						<p className="mt-2">
							{" "}
							Password must contain at least one Uppercase, number & special
							char [@,%,$,#,*] !
						</p>
					)}
				</Form.Group>
				<Form.Group
					className="pb-3 mx-auto w-75"
					controlId="formConfirmPassword"
				>
					<Form.Label></Form.Label>
					<Form.Control
						{...register("confirmPass", {
							required: true,
							validate: (val) => {
								if (watch("password") !== val) {
									console.log(val);
									console.log(watch("password"));
									return "Your passwords do no match";
								}
							},
						})}
						type="password"
						placeholder="Confirm Password"
						className="mb-2"
					/>

					{errors.confirmPass?.type === "required" && (
						<p>Your must confirm your Password</p>
					)}
					{errors.confirmPass?.type === "validate" && (
						<p>{errors.confirmPass.message}</p>
					)}
				</Form.Group>
				<Controller
					name="gender"
					rules={{ required: true }}
					control={control}
					controlId="formSelect"
					render={({ field }) => (
						<Select
							{...field}
							className="mb-5 w-75 mx-auto text-start"
							isSearchable
							options={gender}
						></Select>
					)}
				>
					<Form.Label>Your select menu</Form.Label>
				</Controller>
				<Controller
					name="hobbies"
					rules={{ required: true }}
					control={control}
					controlId="formSelect"
					render={({ field }) => (
						<Select
							{...field}
							className="mb-5 w-75 mx-auto text-start"
							isMulti
							isSearchable
							options={hobbies}
						></Select>
					)}
				>
					<Form.Label>Your select menu</Form.Label>
				</Controller>
				<Button
					className="mx-auto d-block mt-5"
					variant="primary"
					type="submit"
				>
					Submit
				</Button>
			</Form>
		</div>
	);
};
export default Register;
