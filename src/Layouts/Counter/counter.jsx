import { useState } from "react";

import Increment from "../../Components/Counter/increment";
import Decrement from "../../Components/Counter/decrement";

const Counter = () => {
	const [number, setNumber] = useState(0);

	const increaseNumber = () => {
		setNumber(number + 1);
	};
	const decreaseNumber = () => {
		setNumber(number - 1);
	};

	return (
		<div className="counter d-block text-center align-items-center w-50 mx-auto mt-5 border border-2 rounded-3">
			<h1 className="py-3">Counter App </h1>
			<hr />
			<h2>{number}</h2>
			<div className="count-control d-flex justify-content-center mx-auto py-4">
				<Decrement less={decreaseNumber} />
				<Increment add={increaseNumber} />
			</div>
		</div>
	);
};

export default Counter;
