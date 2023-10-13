import {CheerioAPI} from "cheerio";

export function parseHeading($: CheerioAPI) {
	const $headings = $('[data-headding-conponent]');

	// get the h1 and h2 tags form $headings
	const $h1 = $headings.find('h1');
	const $h2 = $headings.find('h2');

	return {
		heading: $h1.text(),
		subheading: $h2.text()
	}
}