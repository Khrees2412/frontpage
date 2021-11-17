import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feed from "../components/Feed";
// import Bookmark from "../components/Bookmark";

export default function Home() {
	return (
		<>
			<div className="min-h-screen flex flex-col justify-around items-center bg-gray-800">
				<Navbar />
				<Hero />
				{/* <Bookmark /> */}
				<div className="w-4/5 m-auto">
					<Feed />
				</div>
			</div>
		</>
	);
}
