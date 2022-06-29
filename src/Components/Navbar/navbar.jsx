import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light d-flex py-4">
			<div className="container-fluid">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mx-auto">
						<Link to="/" className="nav-link px-3">
							Home
						</Link>
						<Link to="/counter" className="nav-link px-3">
							Counter
						</Link>
						<Link to="/products" className="nav-link px-3">
							Product-List
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
