import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Card from "../components/Product/Card";
import { formatPrice } from "../components/functions";
import { FakeStoreData } from "../components/Layout/Layout";

const ProductsPage: React.FC = () => {
	const [products, setProducts] = useState<FakeStoreData[]>([]);

	useEffect(() => {
		const uri = "https://fakestoreapi.com/products/";
		fetch(uri)
			.then((res) => res.json() as Promise<FakeStoreData[]>)
			.then((json) => {
				const parsedProducts: FakeStoreData[] = [];
				json.map((product) => {
					if (product.category !== "electronics") {
						parsedProducts.push(product);
					}
				});
				setProducts(parsedProducts);
			});
	}, [products]);
	return (
		<Layout>
			<section className="grid grid-cols-1 w-full max-w-sm gap-y-12 mx-auto my-24
			md:grid-cols-2 md:max-w-2xl
			lg:grid-cols-3 lg:max-w-4xl
			">
				<h1 className="text-text text-4xl mx-auto
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
