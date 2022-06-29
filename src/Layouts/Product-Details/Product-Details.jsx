import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

const ProductDetails = () => {
	const urlParams = useParams();

	useEffect(() => {
		getProduct();
	});

	const [product, setProduct] = useState({});

	const getProduct = () => {
		console.log("get the products data from api");
		fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	};
	return (
		<div className="container text-center py-5">
			<h1 className="mb-5">Product Details</h1>
			{product.image ? (
				<Card className=" w-75 m-5 mx-auto p-5">
					<Card.Img
						variant="top"
						src={product.image}
						className="card-image mx-auto"
						style={{ width: "50%" }}
					/>
					<Card.Body>
						<Card.Title>{product.title}</Card.Title>
						<Card.Text>{product.description}</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroup.Item>Item price: {product.price} $</ListGroup.Item>
						<ListGroup.Item>Category: {product.category}</ListGroup.Item>
					</ListGroup>
				</Card>
			) : (
				<Spinner animation="border" variant="info" />
			)}
		</div>
	); 
};
export default ProductDetails;
