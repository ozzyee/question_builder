import {v4 as uuidv4} from "uuid";
import {placeholders} from "@/components/drop/_data/placeholders";
import {TAnswer} from "@/components/drop/_types/Answers";
import {SetAnswerHistory, SetAnswers, SetRawQuestionJson} from "@/components/drop/_types/state";

export const makeNewAnswer = () => {
	return {id: uuidv4(), value: placeholders.answer};
}

export const handleAddAnswer = ({answers, setAnswers, setAnswerHistory, setRawQuestionJson}: AddAnswerProps) => {
	const newAnswer = makeNewAnswer();
	setAnswers([...answers, newAnswer]);
	setAnswerHistory((prevHistory) => {
		if (!prevHistory) return [newAnswer];
		return [...prevHistory, newAnswer]
	});
	setRawQuestionJson((prevJson) => {
		if (!prevJson) return null;

		return {
			...prevJson,
			answers: [
				...prevJson.answers,
				{
					id: newAnswer.id,
					value: placeholders.answer
				}
			]
		}
	})
}

type AddAnswerProps = {
	answers: TAnswer[]
	setAnswers: SetAnswers
	setRawQuestionJson: SetRawQuestionJson
	setAnswerHistory: SetAnswerHistory
}