import {Option, Question} from "../../../types/question";

export interface QuestionLayoutProps extends Question {
	onAnswerClick: (option: Option, question: string, optionType: string) => void
	currentQuestion: Question | null
}