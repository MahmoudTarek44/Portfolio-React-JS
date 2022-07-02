import { useEffect } from "react";

import { getAllProducts } from "../../Redux Toolkit-Store/Features/product-list-Slice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

const ProductList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	const { products, loading } = useSelector((array) => array.productsData);

	return (
		<div className="container text-center mt-4 row mx-auto justify-content-center">
			<h1 className="mb-5">product-List</h1>
			{!loading && products ? (
				products.map((element, i) => {
					return (
						<Card key={i} className="col-3 m-2 mx-3 p-2">
							<Card.Img
								variant="top"
								src={element.image}
								className="card-image"
								style={{ width: "100%", height: "50%" }}
							/>
							<Card.Body>
								<Card.Title>{element.title}</Card.Title>
								<Card.Text>{element.description.slice(0, 60)}</Card.Text>
							</Card.Body>
							<ListGroup className="list-group-flush">
								<ListGroup.Item>Item price: {element.price} $</ListGroup.Item>
								<ListGroup.Item>Category: {element.category}</ListGroup.Item>
							</ListGroup>
							<Card.Body>
								<Link
									to={`/products/product/${element.id}`}
									className="text-decoration-none"
								>
									Card Details
								</Link>
							</Card.Body>
						</Card>
					);
				})
			) : (
				<Spinner animation="border" variant="info" />
			)}
		</div>
	);
};
export default ProductList;
