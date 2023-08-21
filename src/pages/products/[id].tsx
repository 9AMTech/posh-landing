import React from "react";
import Layout from "../../components/Layout/Layout";
import Page from "../../components/Product/Page";
import { useLocation } from "react-router-dom";

const ProductPage: React.FC = () => {
	const { state } = useLocation();

	return (
		<Layout>
			<Page
				id={state.id}
				name={state.title}
				image={state.image}
				price={state.price}
				description={state.description}
			/>
		</Layout>
	);
};

export default ProductPage;