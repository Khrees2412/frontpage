export default function getUrl(urlPath) {
	return urlPath.match(/([^\/]*)\/*$/)[0];
}
