import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { boolSwitch } from "../functions";
import Button from "../Button";
import CartPNG from "../../assets/images/cart.png";
import FullLogo from "../../assets/images/PL-Logo-Full.png";

const Nav = () => {
	const [open, setOpen] = useState(true);

	const onMenuClick = () => {
		const bool = boolSwitch(open);
		setOpen(bool);
	};

	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth > 1024) {
				setOpen(true);
			} else setOpen(false);
		};
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	});

	return (
		<nav
			className={`sticky top-0 pt-4 px-4 bg-background inline-flex w-full 
			${open ? "open" : "closed"} 
			`}
		>
			<section
				className="relative flex flex-col mx-auto w-full h-auto place-items-center justify-between
			md:w-10/12 
			lg:flex-row
			"
			>
				<section
					className="inline-flex w-full place-content-between
			lg:w-1/2
				"
				>
					<img
						src={FullLogo}
						alt="Full Posh Landing Logo w/ Plane"
						className="w-56"
					/>
					<button
						className="flex flex-col space-y-2 self-center
						lg:hidden
						"
						onClick={onMenuClick}
					>
						<section className="w-8 h-0.5 bg-gray-600" />
						<section className="w-8 h-0.5 bg-gray-600" />
						<section className="w-8 h-0.5 bg-gray-600" />
					</button>
				</section>
				{open ? (
					<section
						className={`inline-flex items-center mb-2 [&>*]:mx-2 
						${open ? "reappear" : "disappear"}
						`}
					>
						<Link to="/"> Home </Link>
						<Link to="/products">Products</Link>
						<Link to="/about">About</Link>
						<section className="flex h-full w-full justify-center">
							<Link to="/cart">
								<Button
									styles="flex w-10 h-10 self-center bg-gray-200 rounded-lg
								"
									content={
										<img
											className="w-3/5 h-3/5 m-auto"
											src={CartPNG}
											alt="Cart"
										/>
									}
								/>
							</Link>
						</section>
					</section>
				) : null}
			</section>
		</nav>
	);
};

export default Nav;
