export default function Navbar() {
	return (
		<div className="w-full p-8 rounded-lg flex justify-between items-center text-black bg-white ">
			<h1 className="font-logo font-bold mr-3 text-2xl">Frontpage</h1>
			<div className="flex justify-around items-center mr-3">
				<a href="#">About</a>
			</div>
			<div>
				<a href="#">View Other Projects </a>
			</div>
		</div>
	);
}
