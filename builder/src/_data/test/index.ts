import {QuestionObj} from "../../types/question";
import Form from "./form";

export const test_quesions: QuestionObj = {
	"1": {
		"title": "what is the capital of france?",
		"options": [
			{
				"title": "paris",
				"answer": "paris",
				"redirect": "2"
			},
			{
				"title": "london",
				"answer": "london",
				"redirect": "2"
			}
		]
	},
	"2": {
		"title": "what is the capital of england?",
		"options": [
			{
				"title": "paris",
				"answer": "paris",
				"redirect": "non-eligible",
				"outcome": {
					title: "well done",
					"correct": "well done",
					form: Form
				}
			},
			{
				"title": "london",
				"answer": "london",
				"redirect": "non-eligible",
				"outcome": {
					title: "well done",
					"correct": "well done",
					form: Form
				}
			}
		]
	}
}