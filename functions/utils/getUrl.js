function getUrl(urlPath) {
	return urlPath.match(/([^\/]*)\/*$/)[0];
}
module.exports = getUrl;
