import { useState, Dispatch, SetStateAction } from "react";

interface IPromoCode {
	setShipping: Dispatch<SetStateAction<boolean>>;
}

const PromoCode: React.FC<IPromoCode> = (props) => {
	const [promoCode, setPromoCode] = useState("");
	const [promoMessage, setPromoMessage] = useState("");


	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		setPromoCode("");
		if (promoCode === "EARLYBIRD23") {
			props.setShipping(true);
			setPromoMessage(n => n ="CODE ACTIVATED : FREE SHIPPING");
		}
		else {
			props.setShipping(false);
			setPromoMessage(n => n = "INVALID CODE");
		}
		setTimeout(() => {
			setPromoMessage(n => n ="");
		}, 2500);
	}
	
	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		setPromoCode(event.currentTarget.value);
	}


	return ( 
		<section className="px-9">
			<form
				className="row-span-2 flex flex-row gap-x-2 place-content-center justify-between"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					placeholder="Enter Promo Code..."
					onChange={handleChange}
					value={promoCode}
					className="border-primary-button w-1/2 h-8 px-1 border-2 rounded-lg text-sm
						md:w-full md:p-2 
						"
				/>
				<input
					type="submit"
					value="APPLY"
					className="bg-primary-button text-text px-1 rounded-xl"
				/>
			</form>
			<p>{promoMessage}</p>
		</section>
	)
}

export default PromoCode;