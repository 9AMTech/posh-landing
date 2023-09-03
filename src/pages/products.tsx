import React, { useContext } from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Product/Card";
import { formatPrice } from "../components/functions";
import { ProductContext } from "../Context";


const ProductsPage: React.FC = () => {

	const products = useContext(ProductContext);

	return (
		<Layout>
			<section className="grid grid-cols-1 w-full max-w-sm gap-y-12 mx-auto my-24
			md:grid-cols-2 md:max-w-2xl
			lg:grid-cols-3 lg:max-w-4xl
			">
				<h1 className="text-3xl mx-auto
				md:col-span-2
				lg:col-span-3
				">Products</h1>
				{products.map((product, index) => {
					return (
						<Card
							products={products}
							id={product.id}
							index={index}
							name={product.title}
							image={product.image}
							price={formatPrice(product.price)}
						/>
					);
				})}
			</section>
		</Layout>
	);
};

export default ProductsPage;