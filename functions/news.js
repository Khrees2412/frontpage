const API_KEY = process.env.API_KEY;
const Newsapi = require("newsapi");
const key = API_KEY || "0bd08676cde543aaba5b47368094f5b2";
const newsapi = Newsapi(key);
const date = require("./utils/date.js");

exports.handler = async (event, context) => {
	try {
		const { general, cryptocurrrency, sports, technology } = fetchNews();
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
		q: "bitcoin, ethereum, DAO, metaverse, solana, blockchain, cryptocurrency, NFT, BNB",
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
	const g = res[0].data;
	const c = res[1].data;
	const s = res[2].data;
	const t = res[3].data;
	return {
		general: g,
		cryptocurrrency: c,
		sports: s,
		technology: t,
	};
}
