import {TAnswer} from "@/components/drop/_types/Answers";
import {SetAnswerHistory, SetAnswers, SetRawQuestionJson} from "@/components/drop/_types/state";

export const handleAnswerDelete = ({id, answers, setAnswers, setAnswerHistory, setRawQuestionJson}: OnAnswerDelete) => {
	const updatedAnswers = answers.filter((answer) => answer.id !== id);
	setAnswers(updatedAnswers);

	setAnswerHistory((prevHistory) => {
		if (!answers) return prevHistory;

		return [...(prevHistory || []), ...answers];
	});

	setRawQuestionJson((prevJson) => {
		if(!prevJson) return null;

		return {
			...prevJson,
			answers: prevJson.answers.filter((answer) => answer.id !== id)
		}
	})
}


type OnAnswerDelete = {
	id: string,
	answers: TAnswer[],
	setAnswers: SetAnswers
	setAnswerHistory: SetAnswerHistory,
	setRawQuestionJson: SetRawQuestionJson
}