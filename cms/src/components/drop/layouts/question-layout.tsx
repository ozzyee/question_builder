import React, {useEffect, useState} from 'react';
import {Heading} from "@/components/drop/components/heading";
import {Answer} from "@/components/drop/components/answer";
import {v4 as uuidv4} from "uuid";
import {OnContentChangeEvent} from "@/_types/onContentChange";

interface QuestionLayoutProps extends RawQuestionLayoutJson {
	callBack: ({
		data,
		componentType,
		id,
		order,
		contentId
	}: {
		data: RawQuestionLayoutJson
		componentType: string
		id: string
		order: number
		contentId: string
	}) => void
	contentId: string
	order: number
}

export type RawQuestionLayoutJson = {
	heading: string,
	subHeading: string,
	answers: {
		id: string,
		value: string
	}[]
}

function QuestionLayout({callBack, subHeading, heading, answers: _answers, contentId, order}: QuestionLayoutProps) {
	const placeholders = {
		heading: "Question Title...",
		subHeading: "Question Subtitle...",
		answer: "Answer..."
	}
	const [answers, setAnswers] = useState([]);
	const [answerHistory, setAnswerHistory] = useState([]);
	const [rawQuestionJson, setRawQuestionJson] = useState<RawQuestionLayoutJson>(null);

	useEffect(() => {
		if (!subHeading && !heading && !_answers) {
			const firstAnswer = {id: uuidv4()};
			setAnswers([firstAnswer]);
			setRawQuestionJson({
				order,
				contentId,
				heading: placeholders.heading,
				subHeading: placeholders.subHeading,
				answers: [
					{
						id: firstAnswer.id,
						value: placeholders.answer
					}
				]
			})
			return
		}

		setAnswers(_answers)
		setRawQuestionJson({
			heading: heading,
			subHeading: subHeading,
			answers: _answers
		})
	}, [])

	useEffect(() => {
		callBack({
			id: contentId,
			data: rawQuestionJson,
			componentType: "QuestionLayout",
			order,
			contentId
		})
	}, [rawQuestionJson])

	const onAnswerDelete = (id) => {
		const updatedAnswers = answers.filter((answer) => answer.id !== id);
		setAnswers(updatedAnswers);
		setAnswerHistory((prevHistory) => [...prevHistory, answers]);

		setRawQuestionJson((prevJson: RawQuestionLayoutJson) => {
			return {
				...prevJson,
				answers: prevJson.answers.filter((answer) => answer.id !== id)
			} as RawQuestionLayoutJson
		})
	}

	const addAnswer = () => {
		const newAnswer = {id: uuidv4()};
		setAnswers([...answers, newAnswer]);
		setAnswerHistory((prevHistory) => [...prevHistory, answers]);
		setRawQuestionJson((prevJson: RawQuestionLayoutJson) => {
			return {
				...prevJson,
				answers: [
					...prevJson.answers,
					{
						id: newAnswer.id,
						value: placeholders.answer
					}
				]
			} as RawQuestionLayoutJson
		})
	}

	const undo = () => {
		if (answerHistory.length < 1) return;

		const previousState = answerHistory.pop();
		setAnswers(previousState);
	}

	const handlerChange = ({id, component, content}: OnContentChangeEvent) => {
		if (component === "answer") {
			setRawQuestionJson((prevJson: any) => {
				return {
					...prevJson,
					answers: prevJson.answers.map((answer) => {

						if (answer.id === id) {
							return {
								...answer,
								value: content
							}
						}
						return answer
					})
				}
			})
		}

		if (component === "heading") {
			setRawQuestionJson((prevJson: any) => {
				return {
					...prevJson,
					heading: content
				}
			})
		}

		if (component === "subHeading") {
			setRawQuestionJson((prevJson: any) => {
				return {
					...prevJson,
					subHeading: content
				}
			})
		}
	}

	return (
		 <div>
			 <Heading
					placeholders={{
						heading: heading || placeholders.heading,
						subHeading: subHeading || placeholders.subHeading
					}}
					id={uuidv4()}
					onContentChange={handlerChange}
			 />

			 <div id={"answers"} className={"flex flex-wrap"}>
				 {answers.map((answer) => {
					 return (
							<Answer
								 key={answer.id}
								 id={answer.id}
								 onDelete={onAnswerDelete}
								 onContentChange={handlerChange}
								 placeholder={answer.value || placeholders.answer}
							/>
					 )
				 })}
			 </div>
			 <button onClick={addAnswer}>Add Answer</button>
		 </div>
	);
}

export default QuestionLayout;
