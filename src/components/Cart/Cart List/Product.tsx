import { useContext } from "react";
import Button from "../../Button";
import { formatPrice } from "../../functions";
import { CartContext } from "../../../Context";

interface ICartProps {
	id: number;
	image: string;
	description: string;
	name: string;
	price: number;
	quantity: number;
}

const Product: React.FC<ICartProps> = (props) => {
	const CartData = useContext(CartContext);

	const handleIncrement = () => {
		const newCart = [...CartData.cart]
		// Check for the item to increment
		for (let i = 0; i < newCart.length; i++) {
			// Case : Item exists in cart
			if (props.id === newCart[i].id) {
				// Update cart state
				newCart[i].quantity++;
			}
		}
		CartData.setCart(newCart);
	};


	const handleDecrement = () => {
		const newCart = [...CartData.cart]
		// Check for the item to increment
		for (let i = 0; i < newCart.length; i++) {
			// Case : Item exists in cart
			if (props.id === newCart[i].id) {
				if (newCart[i].quantity === 1) {
					newCart.splice(i, 1);
				}
				else {
					// Update cart state
					newCart[i].quantity--;
				}
			}
		}
		CartData.setCart(newCart);
	};

	return (
		// Ideally a grid layout
		<section
			className={`inline-flex h-40 w-full mb-5 py-5 px-1
			rounded-xl min-h-full border-4 border-zinc-600 bg-white shadow-2xl 
			${CartData.cart.length > 0 ? `last-of-type:mb-72` : `first-of-type:mb-24`}`
		}
			>
			<section
				className="flex items-center basis-2/6 h-auto w-full">
				<img
					src={props.image}
					alt={props.description}
					className="min-h-16 max-h-24 min-w-2/3 max-w-[6rem] mx-auto my-auto"
				/>
			</section>
			<section className="flex flex-col basis-3/6 justify-between">
				<p
					className="text-left max-h-20 text-ellipsis overflow-clip
					md:text-lg
					">
					{props.name}</p>
				<p
					className="self-start md:text-lg">
					{formatPrice(props.price * props.quantity)}</p>
			</section>
			<section className="flex flex-col w-10 basis-1/6 text-xl self-center items-center gap-y-2 md:[&>*]:text-xl">
				<Button
					content={'+'}
					onButtonClick={handleIncrement}
					styles="round-button" />
				<input
					disabled
					type="number"
					value={props.quantity}
					className="w-9 text-center bg-background" />
				<Button
					content={'-'}
					onButtonClick={handleDecrement}
					styles="round-button" />
			</section>
		</section>
	)
}

export default Product;