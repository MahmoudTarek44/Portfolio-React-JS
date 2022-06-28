import { useState } from "react";

import Increment from "../Components/increment";
import Decrement from "../Components/decrement";

const Home = () => {
	const [number, setNumber] = useState(0);

	const increaseNumber = () => {
		setNumber(number + 1);
	};
	const decreaseNumber = () => {
		setNumber(number - 1);
	};

	return (
		<div className=" d-block text-center align-items-center">
			<h1>{number}</h1>
			<div className="d-block mx-auto">
				<Increment className="m-2" add={increaseNumber} />
				<Decrement className="m-2" less={decreaseNumber} />
			</div>
		</div>
	);
};

export default Home;
