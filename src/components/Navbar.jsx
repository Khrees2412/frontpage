export default function Navbar() {
	return (
		<div className="w-4/5 p-6 rounded-lg mx-5 my-6 flex justify-between items-center text-white bg-blue-600 ">
			<h1 className="font-logo font-bold mr-3 text-2xl">Frontpage</h1>
			<ul  className="font-semibold flex justify-between items-center ">
			<li className="mr-3"><a href="https://khrees.netlify.app" target="_blank" rel="noreferrer noopener">About Developer</a> </li>

			<li> <a href="https://khrees2412.github.io/FM_tasks" target="_blank" rel="noreferrer noopener">Other Projects </a></li>	
			</ul>
		</div>
	);
}
