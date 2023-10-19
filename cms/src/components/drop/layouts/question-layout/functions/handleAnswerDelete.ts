import {RawQuestionLayoutJson} from "@/components/drop/layouts/question-layout/types/RawQuestionLayoutJson";
import {TAnswer} from "@/components/drop/layouts/question-layout/types/Answers";
import {SetAnswerHistory, SetAnswers, SetRawQuestionJson} from "@/components/drop/layouts/question-layout/types/state";

export const handleAnswerDelete = ({id, answers, setAnswers, setAnswerHistory, setRawQuestionJson}: OnAnswerDelete) => {
	const updatedAnswers = answers.filter((answer) => answer.id !== id);
	setAnswers(updatedAnswers);

	setAnswerHistory((prevHistory) => {
		if (!prevHistory && !answers) return;

		if (prevHistory.length < 1 && answers) {
			return [
				answers
			]
		}

		return [
			...prevHistory,
			answers
		]
	});

	setRawQuestionJson((prevJson: RawQuestionLayoutJson) => {
		return {
			...prevJson,
			answers: prevJson.answers.filter((answer) => answer.id !== id)
		} as RawQuestionLayoutJson
	})
}


type OnAnswerDelete = {
	id: string,
	answers: TAnswer[],
	setAnswers: SetAnswers
	setAnswerHistory: SetAnswerHistory,
	setRawQuestionJson: SetRawQuestionJson
}