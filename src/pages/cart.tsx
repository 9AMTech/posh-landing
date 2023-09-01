import { CartContext } from "../Context";
import { useContext } from 'react';
import Checkout from "../components/Cart/Checkout/Checkout";
import Layout from "../components/Layout/Layout";
import Product from "../components/Cart/Cart List/Product";

const CartPage: React.FC = () => {
	const CartData = useContext(CartContext);

	return (
		<Layout>
			<section className="flex flex-col text-center w-11/12 max-w-2xl mx-auto my-24 gap-y-16">
				<h1 className="text-3xl">Your Cart</h1>

				<section className="">
					{CartData.cart.length > 0 ? (CartData.cart.map(product => {
						return (
							<Product
								id={product.id}
								name={product.name}
								image={product.image}
								price={product.price}
								quantity={product.quantity}
								description={product.description}
							/>
						)
					})) :
						(
							<section className="bg-primary-button min-h-[20rem] h-full w-full 
							flex items-center justify-center rounded-md text-3xl shadow-2xl
							lg:min-h-[25rem] lg:mt-16">
								<h1>ADD MORE PRODUCTS!</h1>
							</section>
						)
					}
				</section>
			</section>

			{CartData.cart.length > 0 ? (
				<section className="bg-background min-h-[12rem] bottom-0 w-full 
		border-zinc-600 bg-white shadow-lg border-t-2
			fixed flex flex-row flex-wrap content-evenly justify-center
			">
					<Checkout />
				</section>
			) : (null)
			}
		</Layout>
	);
};

export default CartPage;