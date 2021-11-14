import { useState, useEffect } from "react";

export default function Categories() {
	const [articles, setArticles] = useState({
		general: "",
		cryptocurrrency: "",
		sports: "",
		technology: "",
	});
	useEffect(() => {
		fetchArticles();
	}, []);
	const fetchArticles = async () => {
		try {
			const res = await fetch("/.netlify/functions/news");
			const { data } = await res.json();
			setArticles(data);
			console.log(data);
		} catch (error) {
			console.error("error: ", error);
		}
	};
	console.log(articles.technology);
	const { general, cryptocurrrency, sports, technology } = articles;
	return (
		<div className="flex justify-around items-center">
			<div className="">
				General: <Card key="12" data={general?.articles} />
			</div>
			<div>
				Technology: <Card key="13" data={technology?.articles} />
			</div>
			<div>
				Sport: <Card key="14" data={sports?.articles} />
			</div>
			<div>
				Cryptocurrency:{" "}
				<Card key="15" data={cryptocurrrency?.articles} />
			</div>
		</div>
	);
}

function Card({ data }) {
	return (
		<div className="p-3 text-gray-300 bg-gray-800 rounded">
			{data.map((d, i) => (
				<p className="font-light">{d.author}</p>
			))}
		</div>
	);
}
// source
// author
// description
// title
// url
// urlToImage
// content
// publishedAt
