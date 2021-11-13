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
const lw = String(findDate());
const d = lw.split(" ");
const n = d.slice(1, 4);

const dateTable = {
	Jan: "1",
	feb: "2",
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
