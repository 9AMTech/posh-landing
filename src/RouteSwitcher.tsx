import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContext, ProductContext } from "./Context";
import { useState, useEffect } from 'react';
import IndexPage from "./pages";
import ProductsPage from "./pages/products";
import ProductPage from "./pages/products/[id]";
import AboutPage from "./pages/about";
import CartPage from "./pages/cart";
import ScrollToTop from "./components/ScrollToTop";
import { FakeStoreData } from "./components/Layout/Layout";

export interface CartData {
	id: number;
	description: string;
	name: string;
	price: number;
	quantity: number;
	image: string;
}
const RouteSwitch = () => {
	const [cart, setCart] = useState<CartData[]>([]);
	const [products, setProducts] = useState<FakeStoreData[]>([]);

	useEffect(() => {
		const uri = "https://fakestoreapi.com/products/";
		let isCancelled = false;
		fetch(uri)
			.then((res) => res.json() as Promise<FakeStoreData[]>)
			.then((json) => {
				if (!isCancelled) {
					const parsedProducts: FakeStoreData[] = [];
					json.map((product) => {
						if (product.category !== "electronics") {
							parsedProducts.push(product);
						}
					}
					);
					setProducts(parsedProducts);
				}
				return () => {
					isCancelled = true;
				};
			});
	}, []);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			<ProductContext.Provider value={products}>
				<Router basename="/posh-landing/">
					<ScrollToTop />
					<Routes>
						<Route path="/" element={<IndexPage />} />
						<Route path="/products" element={<ProductsPage />} />
						<Route path="/products/:id" element={<ProductPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/cart" element={<CartPage />} />
					</Routes>
				</Router>
			</ProductContext.Provider>
		</CartContext.Provider>

	);
};

export default RouteSwitch;
