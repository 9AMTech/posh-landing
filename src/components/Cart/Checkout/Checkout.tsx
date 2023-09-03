import Button from "../../Button";
import { CartContext } from "../../../Context";
import { useContext, useState } from 'react';
import { formatPrice } from "../../functions";

const Checkout: React.FC = () => {
	const CartData = useContext(CartContext);
	const [freeShipping, _setFreeShipping] = useState(false);

	return (
		<section className="max-w-lg min-w-[20rem] flex flex-col justify-between
		gap-y-2 [&>section]:min-h-[3rem] [&>section]:flex [&>section]:justify-between
		[&>section]:items-center ">
			<section className="px-10 md:text-lg lg:[&>p]:text-xl lg:px-0">
				<p>SUBTOTAL</p>
				<p>{
					formatPrice(CartData.cart.reduce((accumulator, currentValue) =>
						accumulator + (currentValue.price * currentValue.quantity), 0)
					)}
				</p>
			</section>
			<section className="px-10 md:text-lg lg:[&>p]:text-xl lg:px-0">
				<p>SHIPPING</p>
				<p>{freeShipping ? 'FREE!' : formatPrice(6.99)}</p>
			</section>
			<section className="self-center">
				<Button
					content={'CHECKOUT'}
					styles="bg-[var(--primary-button)] min-w-[7rem] font-semibold text-lg rounded-md p-1" />
			</section>
		</section>
	)
}

export default Checkout;