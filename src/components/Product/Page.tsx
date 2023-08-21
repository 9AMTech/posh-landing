import Button from "../Button";
import { useContext } from "react";
import { CartContext } from "../../Context";
import { formatPrice } from "../functions";

interface ProductProps {
	products?: object;
	id: number;
	image: string;
	name: string;
	description: string;
	price: number;
}

const Page: React.FC<ProductProps> = (props) => {
	let exists = false;
	const CartData = useContext(CartContext);
	const productIndex = CartData.cart.findIndex((i) => i.id === props.id);

	const addProduct = () => {
		const newCart = [...CartData.cart];
		const newItem = {
			id: props.id,
			name: props.name,
			price: props.price,
			quantity: 1,
			image: props.image,
		};

		if (CartData.cart.length === 0) {
			newCart.push(newItem);
		} else {
			for (let i = 0; i < newCart.length; i++) {
				console.log(`Props ID : ${props.id}`);
				console.log(`Loop Item ID : ${newCart[i].id}`);
				// Case : Item exists in cart
				if (props.id === newCart[i].id) {
					// Update cart state
					exists = true;
					newCart[i].quantity++;
					console.log(`New Quantity : ${newCart[i].quantity}`);
				}
			}
			if (exists === false) {
				newCart.push(newItem);
			}
		}
		console.log(newCart);
		CartData.setCart(newCart);
	};

	return (
		<section className="flex flex-col w-10/12 max-w-2xl gap-y-16 mx-auto my-20">
			<section>
				<img src={props.image} className="h-96 mx-auto" />
			</section>
			<section className="flex flex-col">
				<section
					className="grid grid-cols-2 grid-rows-2 w-30 justify-items-center self-center items-center mb-10 [&>*]:mx-2
				md:self-end
				"
				>
					<h2 className="text-xl">{formatPrice(props.price)}</h2>
					<Button
						styles="bg-primary-button rounded-xl p-2 col-span-1"
						content="ADD TO CART"
						onButtonClick={addProduct}
					/>
					<h3 className="text-xl row-start-2 col-start-1 col-end-3">
						Quantity in Cart :{" "}
						{productIndex === -1 ? 0 : CartData.cart[productIndex].quantity}
					</h3>
				</section>
				<h1 className="text-2xl font-semibold mb-3">{props.name}</h1>
				<h4 className="underline underline-offset-4 mb-2 font-semibold">
					Product Description
				</h4>
				<p>{props.description}</p>
			</section>
		</section>
	);
};

export default Page;
