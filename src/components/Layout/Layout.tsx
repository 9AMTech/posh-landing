import Nav from "./Nav";
import Footer from "./Footer";

export interface FakeStoreData {
	id: number;
	category: string;
	title: string;
	description: string;
	price: number;
	image: string;
}


export default function Layout({ children }: any) {
	return (
		<>
			<Nav />
			<section className="flex flex-col justify-between h-auto mb-auto">
				{children}
			</section>
			<Footer />
		</>
	);
}
