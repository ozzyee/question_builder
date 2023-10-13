import {CheerioAPI} from "cheerio";

export function parseAnswers($: CheerioAPI) {
	const _answers = $('#answers').children()
	const answers = []

	_answers.each((index, element) => {
		const $answer = $(element);
		const $answerText = $answer.find("p")
		const $answerImage = $answer.find("img")
		const $answerRedirection = $answer.find('button').attr('data-redirect')

		answers.push({
			answer: $answerText.text(),
			image: $answerImage.attr('src'),
			redirection: $answerRedirection
		})
	})

	return answers
}