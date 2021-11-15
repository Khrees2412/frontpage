import { useState, useEffect, Suspense } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Categories() {
	const [articles, setArticles] = useState({
		general: {
			articles: [],
		},
		cryptocurrrency: {
			articles: [],
		},
		sports: {
			articles: [],
		},
		technology: {
			articles: [],
		},
	});

	const fetchArticles = async () => {
		try {
			const res = await fetch("/.netlify/functions/news");
			const json = await res.json();
			setArticles(json.data);
			// console.log(json.data);
		} catch (error) {
			console.error("error: ", error);
		}
	};

	useEffect(() => {
		fetchArticles();
	}, []);

	// console.log(articles?.technology);
	const { general, cryptocurrrency, sports, technology } = articles;
	const categories = ["General", "Cryptocurrency", "Sports", "Technology"];

	return (
		<Suspense fallback={<div>loading...</div>}>
			<div className="w-full max-w-md px-2 py-16 sm:px-0">
				<Tab.Group>
					<Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
						{categories.map((category) => (
							<Tab
								className={({ selected }) =>
									classNames(
										"w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
										"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
										selected
											? "bg-white shadow"
											: "text-blue-100 hover:bg-white/[0.12] hover:text-black"
									)
								}
							>
								{category}
							</Tab>
						))}
					</Tab.List>
					<Tab.Panels className="mt-2">
						<Tab.Panel
							className={classNames(
								"bg-white rounded-xl p-3",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
							)}
						>
							<Card key="12" data={general?.articles} />
						</Tab.Panel>
						<Tab.Panel
							className={classNames(
								"bg-white rounded-xl p-3",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
							)}
						>
							<Card key="15" data={cryptocurrrency?.articles} />
						</Tab.Panel>
						<Tab.Panel
							className={classNames(
								"bg-white rounded-xl p-3",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
							)}
						>
							<Card key="14" data={sports?.articles} />
						</Tab.Panel>
						<Tab.Panel
							className={classNames(
								"bg-white rounded-xl p-3",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
							)}
						>
							<Card key="13" data={technology?.articles} />
						</Tab.Panel>
					</Tab.Panels>
				</Tab.Group>
			</div>
		</Suspense>
	);
}

function Card({ data }) {
	return (
		<div className="">
			{data.map((d, i) => (
				<a
					href={d.url}
					class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
				>
					<div class="md:flex">
						<div class="md:flex-shrink-0">
							<img
								class="h-48 w-full object-cover md:w-48"
								src={d.urlToImage}
								alt="article img"
							/>
						</div>
						<div class="p-8">
							<div class="uppercase tracking-wide text-sm text-black font-semibold">
								{d.title}
							</div>
							<a
								href={d.url}
								class="block mt-1 text-lg leading-tight font-medium text-indigo-500 hover:underline"
							>
								{d.description}
							</a>
							<p class="mt-2 text-gray-500">{d.content}</p>
						</div>
					</div>
				</a>
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

// 	<div className="">
// 					General: <Card key="12" data={general?.articles} />
// 				</div>
// 				<div>
// 					Technology: <Card key="13" data={technology?.articles} />
// 				</div>
// 				<div>
// 					Sport: <Card key="14" data={sports?.articles} />
// 				</div>
// 				<div>
// 					Cryptocurrency:{" "}
// 					<Card key="15" data={cryptocurrrency?.articles} />
// 				</div>

{
	/* <Tab>Cryptocurrency</Tab>
						<Tab>Sports</Tab>
						<Tab>Technology</Tab> */
}
