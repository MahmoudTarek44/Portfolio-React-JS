import errorScreen from "../../Assets/Images/undraw_page_not_found_re_e9o6.svg";

const NotFound = () => {
	return (
		<div className="text-center p-5">
			<img style={{ width: "50%" }} src={errorScreen} alt="homeScreen" />
		</div>
	);
};
export default NotFound;
