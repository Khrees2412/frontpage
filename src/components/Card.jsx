export default function Card({ data }) {
	return (
		<div className="">
			{data.map((d, i) => (
				<a
					key={d.url}
					href={d.url}
					_target="blank"
					class="w-full mx-auto max-w-md bg-pink-500 rounded-xl shadow-md overflow-hidden md:max-w-2xl my-3 border-indigo-200"
				>
					<div class="md:flex">
						<div class="md:flex-shrink-0">
							<img
								class="h-48 w-full object-cover md:w-48 rounded-lg"
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
								_target="blank"
								class="block mt-1 text-lg leading-tight font-medium text-indigo-500 hover:underline"
							>
								{d.description}
							</a>
							<p class="mt-2 text-gray-500">{d.content}</p>
							<div>
								{" "}
								<span className="text-gray-700 font-medium p-2">
									{d.author}
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

// source
// author
// description
// title
// url
// urlToImage
// content
// publishedAt
