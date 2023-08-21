import { useState } from "react";
import Friends from "../assets/images/stock images/group-of-friends-circle.jpg";

const Newsletter = () => {
	const [isSent, setIsSent] = useState(false);

	const emailNotif = () => {
		setIsSent(true);
		setTimeout(() => {
			setIsSent(false);
		}, 3000);
	};

	const disable = (event:any) => {
		if (event.code === "Enter") {
			event.preventDefault();
		}
	};

	return (
		// Wrapper
		<section className="relative z-0 ">
			<img
				src={Friends}
				alt="Group of friends laying in the grass in a circle, smiling."
			/>
			{/* White Opaque Box Overlay */}
			<section
				className="absolute grid grid-cols-1 grid-rows-5 opacity-90 bg-secondary-button 
				h-5/6 w-5/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
				[&>*]:mx-auto [&>*]:my-auto"
			>
				{/* Call to action */}
				<section className="text-center row-span-2">
					<h2 className="md:text-4xl"> Sign up to Our Newsletter!</h2>
					<h3
						className="
					text-sm italic
					md:text-2xl
					"
					>
						Get the latest deals right in your inbox!
					</h3>
				</section>

				{/* Info Box Message that says "Signed Up!" */}
				<h3
					className="
					text-bold text-lg
					md:text-2xl
					"
				>
					{isSent ? "Email Sent!" : ""}
				</h3>

				{/* Input Button w/ Submit Button */}
				<form
					className="row-span-2 flex flex-row gap-x-2 place-content-center"
					onKeyDown={disable}
				>
					<input
						type="text"
						className="border-primary-button w-1/2 border-2 rounded-lg
						md:w-full md:p-2
						"
					/>
					<input
						type="reset"
						value="SUBMIT"
						onClick={emailNotif}
						className="bg-primary-button text-text px-1 rounded-xl"
					/>
				</form>
			</section>
		</section>
	);
};

export default Newsletter;
