import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContext } from "./Context";
import { useState } from 'react';
import IndexPage from "./pages";
import ProductsPage from "./pages/products";
import ProductPage from "./pages/products/[id]";
import AboutPage from "./pages/about";
import CartPage from "./pages/cart";

export interface CartData {
	id: number;
	name: string;
	price: number;
	quantity: number;
	image: string;
}
const RouteSwitch = () => {
	const [cart, setCart] = useState<CartData[]>([]);

	return (
		<CartContext.Provider value={{ cart, setCart }}>
			<Router>
				<Routes>
					<Route path="/" element={<IndexPage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/products/:id" element={<ProductPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/cart" element={<CartPage />} />
				</Routes>
			</Router>
		</CartContext.Provider>

	);
};

export default RouteSwitch;
