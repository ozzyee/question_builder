import {ContactForm} from "./contact.form";
import {LeaveEmailForm} from "./leave-email.form";
import {_questionsData} from "./pqq-data";
import {convertObjToArr} from "../../_helper/convertObjToArr";
import {QuestionObj} from "../../types/question";

const _data = convertObjToArr(_questionsData).map((question, index) => {
	const options = question.options.map((option) => {
		if (option.outcome?.description.includes("email")) {
			return {
				...option,
				outcome: {
					...option.outcome,
					form: LeaveEmailForm
				}
			}
		}
		return option
	})

	const isLastQuestion = Object.keys(_questionsData).length == index + 1

	// if the last question and is a multiple question
	if (isLastQuestion && question.option_type == "multiple_option") {
		return {
			...question,
			options,
			multiple_option_props: {
				outcome: {
					...question.multiple_option_props.outcome,
					form: ContactForm
				}
			}
		}
	}

	// if the last question
	if (isLastQuestion) {
		return {
			...question,
			options,
			outcome: {
				...question.outcome,
				form: ContactForm
			}
		}
	}

	return {
		...question,
		options,
	}
})

console.log(_data)

export const questionsData = _data as QuestionObj