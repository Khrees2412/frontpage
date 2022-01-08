export default function Card({ data }) {
	const getPublishedAt = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleString();
	};
	const checkValidString = (str) => {
		if (str) {
			if (str.length > 0) {
				return true;
			}
		}
		return false;
	};
	return (
		<div className="">
			{data.map((d, i) => (
				<div
					className="w-full h-[300px] mx-auto max-w-md rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-5 bg-blue-500"
					key={d.url}
				>
					<div className="md:flex">
						<div className="md:flex-shrink-0">
							{checkValidString(d.urlToImage) ? (
								<img
									lazy="loading"
									className="h-full w-full object-cover md:w-48 rounded-lg"
									src={d.urlToImage}
									alt="article's img"
								/>
							) : (
								<p className="text-center text-2xl text-gray-200">
									Failed to fetch articles image
								</p>
							)}
						</div>
						<a
							href={d.url}
							target="_blank"
							rel="noreferrer"
							className=""
						>
							<div className="p-6 md:p-8">
								<div className="uppercase tracking-wide text-sm text-black font-semibold">
									{d.title}
								</div>
								<p className="block mt-1 text-lg leading-tight font-medium text-white hover:underline">
									{d.description}
								</p>
								<div className="flex justify-between flex-end">
									<div className="flex justify-between">
										<span className="text-gray-200 text-xs font-medium p-2">
											{d.author}
										</span>
										<span className="mt-2 text-gray-200">
											{d.source.id}
										</span>
									</div>
									<span className="text-gray-200 text-sm font-medium p-2">
										{getPublishedAt(d.publishedAt)}
									</span>{" "}
								</div>
							</div>
						</a>
					</div>
				</div>
			))}
		</div>
	);
}
