export default function Navbar() {
	return (
		<div className="w-full p-6 rounded-lg m-4 flex justify-between items-center text-black bg-white ">
			<h1 className="font-logo font-bold mr-3 text-2xl">Frontpage</h1>
			<div className="flex justify-around items-center mr-3">
				{/* <a href="#">About</a> */}
				<p>About</p>
			</div>
			<div>
				{/* <a href="#">View Other Projects </a> */}
				<p>View Other Projects </p>
			</div>
		</div>
	);
}
