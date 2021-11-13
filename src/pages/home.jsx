import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

export default function Home() {
	return (
		<div>
			<div className="ml-16 flex flex-col font-brand">
				<Navbar />
				<Hero />
				<Categories />
			</div>
		</div>
	);
}
