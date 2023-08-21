import { Link } from "react-router-dom";
import { FakeStoreData } from "../Layout/Layout";

interface CardProps {
	products: FakeStoreData[];
	index: number;
	id: number;
	image: string;
	name: string;
	price: string;
}

const Card: React.FC<CardProps> = (props) => {
	const product = props.products[props.index];

	return (
		<Link to={"/products/" + props.id.toString()} state={product}>
			<section
				className="flex flex-col justify-between place-self-center rounded-xl p-3
			m-5 min-h-full border-4 border-zinc-600 bg-white shadow-2xl"
			>
				<section className="">
					<img src={props.image} className="m-auto h-44 w-auto filter-none" />
				</section>
				<section className="flex flex-col min-h-full h-32 justify-between">
					<h1 className="overflow-hidden">{props.name}</h1>
					<h2 className="ml-auto font-bold">{props.price}</h2>
				</section>
			</section>
		</Link>
	);
};

export default Card;
