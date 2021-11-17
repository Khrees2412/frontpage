export default function Card({ data }) {
	const getPublishedAt = (dateString) => {
		const date = new Date(dateString)
		return date.toLocaleString()
	}
	return (
		<div className="">
			{data.map((d, i) => (
				<div className="mb-5 bg-blue-500 rounded-lg">
					<a
					key={d.url}
					href={d.url}
					target="_blank" rel="noreferrer"
					className="w-full h-[300px] mx-auto max-w-md rounded-xl shadow-md overflow-hidden md:max-w-2xl"
				>
					<div className="md:flex">
						<div className="md:flex-shrink-0">
							<img
								className="h-full w-full object-cover md:w-48 rounded-lg"
								src={d.urlToImage}
								alt="article's img"
							/>
						</div>
						<div className="p-6 md:p-8">
							<div className="uppercase tracking-wide text-sm text-black font-semibold">
								{d.title}
							</div>
							<p
								className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
							>
								{d.description}
							</p>
							{/* <p className="mt-2 text-gray-400">{d.content}</p> */}
							<div className="flex justify-between flex-end">
								<span className="text-gray-200 font-medium p-2">
									{d.author}
								</span>
                                <span className="text-gray-200 font-medium p-2">
									{getPublishedAt(d.publishedAt)}
								</span>{" "}
								<span className="mt-2 text-gray-400">{d.source.id}</span>
							</div>
						</div>
					</div>
				</a> </div>
			
			))}
		</div>
	);
}
