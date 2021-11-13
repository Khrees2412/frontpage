export default function Navbar() {
	return (
		<div className="flex justify-around items-center  ">
			<h1 className="font-logo">Peddle</h1>
			<ul className="flex justify-around items-center">
				<li>About</li>
				<li>FAQs</li>
				<li>Testimonial</li>
				<li>Pricing</li>
			</ul>
			<div>
				<button>Sign In</button>
				<button>Sign Up</button>
			</div>
		</div>
	);
}
