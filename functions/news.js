const Newsapi = require("newsapi");
const newsapi = new Newsapi(process.env.API_KEY);
// const date = require("./utils/date");
// const date = "2022-01-05";

const DAYS_LIMIT = 3; // past three days

const findDate = () => {
	const today = new Date();
	const days = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() - DAYS_LIMIT
	);
	return days;
};
const lw = findDate().toString();
const d = lw.split(" ");
const n = d.slice(1, 4);

const dateTable = {
	Jan: "1",
	Feb: "2",
	Mar: "3",
	Apr: "4",
	May: "5",
	Jun: "6",
	Jul: "7",
	Aug: "8",
	Sep: "9",
	Oct: "10",
	Nov: "11",
	Dec: "12",
};
function findMonthNumber(item) {
	for (const key in dateTable) {
		if (key === item) {
			return dateTable[key];
		}
	}
}
const r = n.reverse();
const theMonth = r[2];
const month = findMonthNumber(theMonth);
//re-arrange date properly to fit NewsAPI format
const arr = [r[0], month, r[1]];
const date = arr.join(",").replace(/,/g, "-");

exports.handler = async (event, context) => {
	try {
		const { general, cryptocurrrency, sports, technology } =
			await fetchNews();
		console.log(date);
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
