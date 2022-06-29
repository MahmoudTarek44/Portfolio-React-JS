import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Layouts/Counter/counter.jsx";
import Navbar from "./Components/Navbar/navbar.jsx";
import Home from "./Layouts/Home/home.jsx";
import ProductDetails from "./Layouts/Product-Details/Product-Details.jsx";
import ProductList from "./Layouts/Product-List/Product-List.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/products" element={<ProductList />} />
					<Route path="/products/product/:id" element={<ProductDetails />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
