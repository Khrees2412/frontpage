import { useState } from "react";

export default function Bookmark() {
	const [url, setUrl] = useState("");
	const [info, setInfo] = useState([]);
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
			setInfo(json.data);
			// console.log(json.data);
		} catch (error) {
			console.error("error: ", error);
			alert(error);
		}
	};
	const [icon, name] = info;
	const handleUrl = (e) => {
		setUrl(e.target.value);
	};
	const addBookmark = (bookmark) => {
		setBookmarks([...bookmarks, bookmark]);
	};

	return (
		<div className="flex flex-col items-center align-middle">
			<h1 className="my-5 font-extrabold text-lg text-center">
				Add a bookmark
			</h1>
			<input
				type="url"
				value={url}
				onChange={handleUrl}
				placeholder="Enter website url..."
				className="p-3 rounded-md font-bold"
			/>
			<button
				onClick={() => {
					fetchInfo();

					addBookmark({
						name,
						icon,
						url,
					});
				}}
				className="p-3 rounded-2xl font-bold"
			>
				ADD
			</button>

			<div>
				{bookmarks.map((bookmark) => (
					<a href={bookmark.url} className="p-4 w-3 rounded-md">
						<p className="rounded-full p-2 w-2">{bookmark.icon}</p>
						<p className="text-white font-medium">{bookmark.url}</p>
						<p className="font-bold text-lg text-white">
							{bookmark.name}
						</p>
					</a>
				))}
			</div>
		</div>
	);
}
