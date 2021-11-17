import { useState, useEffect, Suspense } from "react";
import { Tab } from "@headlessui/react";
import Card from "./Card";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Feed() {
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
		} catch (error) {
			console.error("error: ", error);
		}
	};

	useEffect(() => {
		fetchArticles();
	}, []);

	const { general, cryptocurrrency, sports, technology } = articles;
	const categories = ["General", "Cryptocurrency", "Sports", "Technology"];

	return (
		<Suspense fallback={<div>loading...</div>}>
			<div className="w-full px-2 py-16 sm:px-0">
				<Tab.Group>
					<Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl text-2xl font-semibold">
						{categories.map((category,i) => (
							<Tab
							key={i}
								className={({ selected }) =>
									classNames(
										"w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
										"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
										selected
											? "bg-white shadow"
											: "text-blue-100 hover:bg-white/[0.12] hover:text-white"
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
								" rounded-xl p-3",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
							)}
						>
							<Card key="12" data={general?.articles} />
						</Tab.Panel>
						<Tab.Panel
							className={classNames(
								" rounded-xl p-3",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
							)}
						>
							<Card key="15" data={cryptocurrrency?.articles} />
						</Tab.Panel>
						<Tab.Panel
							className={classNames(
								" rounded-xl p-3",
								"focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
							)}
						>
							<Card key="14" data={sports?.articles} />
						</Tab.Panel>
						<Tab.Panel
							className={classNames(
								" rounded-xl p-3",
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
