const cheerio = require("cheerio");
const axios = require("axios");
const getUrl = require("./utils/getUrl");

exports.handler = async (event, context) => {
	const siteUrl = getUrl(event.path);
	const { data } = await axios.get(`https://${siteUrl}`);
	const extract = cheerio.load(data);

	try {
		const link = extract("link");
		const meta = extract("meta");
		let icon;
		let name;

		link.each((index, element) => {
			const rel = extract(element).attr("rel");
			const type = extract(element).attr("type");
			if (
				rel === "shortcut icon" ||
				type === "image/x-icon" ||
				rel === "icon" ||
				type === "image/png"
			) {
				icon = extract(element).attr("href");
			}
		});

		meta.each((index, element) => {
			const property = extract(element).attr("property");
			if (property === "og:site_name") {
				name = extract(element).attr("content");
			}
		});

		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "Successsfully fetched favicon",
				data: {icon, name},
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
