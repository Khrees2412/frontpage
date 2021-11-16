export default function Navbar() {
	return (
		<div className="flex justify-between items-center text-black bg-white ">
			<h1 className="font-logo font-bold mr-3">Frontpage</h1>
			<div className="flex justify-around items-center mr-3">
				<a href="/about">About</a>
			</div>
			<div>
				<a href="">View Other Projects </a>
			</div>
		</div>
	);
}
