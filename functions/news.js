const Newsapi = require("newsapi");
const newsapi = new Newsapi(process.env.API_KEY);
// const date = require("././utils/date.js");
const date = "2021-11-10";

exports.handler = async (event, context) => {
	try {
		const { general, cryptocurrrency, sports, technology } =
			await fetchNews();
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "Successsfully fetched news articles",
				data: { general, cryptocurrrency, sports, technology },
			}),
		};
	} catch (error) {
		return {
			statusCode: 500,
			message: "An error occurred while fetching data",
			body: error.message,
		};
	}
};

async function fetchNews() {
	const general = newsapi.v2.topHeadlines({
		category: "general",
		from: date,
		language: "en",
		sortBy: "relevancy",
	});
	const cryptocurrrency = newsapi.v2.everything({
		q: "bitcoin, ethereum, blockchain, cryptocurrency, NFT",
		from: date,
		language: "en",
		sortBy: "relevancy",
	});
	const sports = newsapi.v2.topHeadlines({
		category: "sports",
		from: date,
		language: "en",
		sortBy: "relevancy",
	});
	const technology = newsapi.v2.topHeadlines({
		category: "technology",
		from: date,
		language: "en",
		sortBy: "relevancy",
	});
	const res = await Promise.all([
		general,
		cryptocurrrency,
		sports,
		technology,
	]);
	const g = res[0];
	const c = res[1];
	const s = res[2];
	const t = res[3];
	return {
		general: g,
		cryptocurrrency: c,
		sports: s,
		technology: t,
	};
}
