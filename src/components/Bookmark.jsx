import { useState } from "react";

export default function Bookmark() {
	const [url, setUrl] = useState("");
	const [info, setInfo] = useState({
		icon:"",
		name:""
	});
	const [bookmarks, setBookmarks] = useState([
		{
			name: "",
			url: "",
			icon: "",
		},
	]);

	const fetchInfo = async () => {
		if (!url) return;
		try {
			const res = await fetch(`/.netlify/functions/favicon/${url}`);
			const json = await res.json();
			setInfo({
				icon: json.data.icon,
				name: json.data.name,
			});
			// console.log(json.data);
		} catch (error) {
			console.error("error: ", error);
		}
	};
	


	const handleUrl = (e) => {
		setUrl(e.target.value);
	};
	const clear = () => {
		setUrl("");
	};
	const addBookmark = async () => {
		await fetchInfo()
		setTimeout(() => {
			const bm = {
			name: info.name,
			icon: info.icon,
			url
		}
		console.log(bm)
		setBookmarks([...bookmarks, bm]);
		clear()
		}, 5000);
			
	};

	return (
		<div className="flex flex-col items-center align-middle">
			<h1 className="my-5 font-extrabold text-lg text-center text-white">
				Add a bookmark
			</h1>
			<input
				type="text"
				value={url}
				onChange={handleUrl}
				placeholder="Enter website url..."
				className="p-3 rounded-md font-bold"
			/>
			<button
			className="w-full p-4 rounded-full text-white"
				onClick={() => {

				// 
				addBookmark()
				}}
			>
				ADD
			</button>
{
	info.length > 0 &&
<div className="bg-brand p-4 w-full rounded-md">
				{bookmarks.map((bookmark, i) => (
					<a key={i} href={bookmark.url} className="rounded-md">
						<img className="rounded-full p-2 w-2 text-white" src={bookmark.icon} alt="favicon" />
						<p className="font-bold text-lg text-white">
							{bookmark.name}
						</p>
						<p className="text-white font-medium text-white">{bookmark.url}</p>

					</a>
				))}
			</div>
}
			
		</div>
	);
}
