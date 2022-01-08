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

export default date;

// export const PlusIcon = () => {
// 	return (
// 		<div>
// 			<svg
// 				className="w-6 h-6"
// 				fill="currentColor"
// 				viewBox="0 0 20 20"
// 				xmlns="http://www.w3.org/2000/svg"
// 			>
// 				<path
// 					fillRule="evenodd"
// 					d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
// 					clipRule="evenodd"
// 				/>
// 			</svg>
// 		</div>
// 	);
// };

// export const ExternalLink = () => {
// 	return (
// 		<div>
// 			<svg
// 				className="w-6 h-6"
// 				fill="currentColor"
// 				viewBox="0 0 20 20"
// 				xmlns="http://www.w3.org/2000/svg"
// 			>
// 				<path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
// 				<path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
// 			</svg>
// 		</div>
// 	);
// };
