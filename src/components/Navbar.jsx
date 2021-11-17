import Logo from "../assets/logo.png"

export default function Navbar() {
	return (
		<div className="w-full md:w-4/5 p-6 rounded-lg mx-5 md:my-6 flex justify-between items-center text-white bg-blue-600 ">
			<div className="w-[250px] h-full pointer">
				<img src={Logo} alt="brand-logo"/>
			</div>
			<ul  className="font-semibold flex justify-between items-center ">
			<li className="mr-3"><a href="https://khrees.netlify.app" target="_blank" rel="noreferrer noopener">About Developer</a> </li>

			<li> <a href="https://khrees2412.github.io/FM_tasks" target="_blank" rel="noreferrer noopener">Other Projects </a></li>	
			</ul>
		</div>
	);
}
