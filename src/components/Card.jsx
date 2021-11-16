export default function Card({ data }) {
	return (
		<div className="">
			{data.map((d, i) => (
				<a
					key={d.url}
					href={d.url}
					_target="blank"
					class="w-full h-[450px] mx-auto max-w-md rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6"
				>
					<div class="md:flex">
						<div class="md:flex-shrink-0">
							<img
								class="h-48 w-full object-cover md:w-48 rounded-lg"
								src={d.urlToImage}
								alt="article's img"
							/>
						</div>
						<div class="p-8">
							<div class="uppercase tracking-wide text-sm text-black font-semibold">
								{d.title}
							</div>
							<a
								href={d.url}
								_target="blank"
								class="block mt-1 text-lg leading-tight font-medium text-indigo-500 hover:underline"
							>
								{d.description}
							</a>
							<p class="mt-2 text-gray-500">{d.content}</p>
							<div className="flex justify-between flex-end">
								<span className="text-gray-800 font-medium p-2">
									{d.author}
								</span>
                                <span className="text-gray-800 font-medium p-2">
									{d.publishedAt}
								</span>{" "}
								<span>{d.source.name}</span>{" "}
							</div>
						</div>
					</div>
				</a>
			))}
		</div>
	);
}
