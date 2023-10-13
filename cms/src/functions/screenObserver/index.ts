import cheerio, {CheerioAPI} from 'cheerio';
import {parseHeading} from "@/functions/screenObserver/methods/parseHeading";
import {parseAnswers} from "@/functions/screenObserver/methods/parseAnswers";

export class ScreenObserver {
	private static questionnaireJson: {};

	static observe() {
		const dropzone = document.getElementById('dropzone');
		const innerHtml = dropzone?.innerHTML;

		const $ = cheerio.load(innerHtml || '');

		if ($('[data-headding-conponent]').length > 0) {
			const headings = parseHeading($);
			ScreenObserver.questionnaireJson = {...ScreenObserver.questionnaireJson, ...headings};
		}

		if ($('[data-answer-component]').length > 0) {
			const answers = parseAnswers($);
			ScreenObserver.questionnaireJson = {...ScreenObserver.questionnaireJson, answers};
		}

		console.log(ScreenObserver.questionnaireJson)
	}
}
