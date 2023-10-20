import React, {useEffect, useState} from 'react';
import {Headings} from "@/components/drop/components/headings";
import {Answer} from "@/components/drop/components/answer";
import {v4 as uuidv4} from "uuid";
import {QuestionLayoutProps} from "@/components/drop/_types/QuestionLayoutProps";
import {RawQuestionLayoutJson} from "@/components/drop/_types/RawQuestionLayoutJson";
import {placeholders} from "@/components/drop/_data/placeholders";
import {TAnswer} from "@/components/drop/_types/Answers";
import {handleAnswerDelete} from "@/components/drop/_functions/handleAnswerDelete";
import {handleAddAnswer, makeNewAnswer} from "@/components/drop/_functions/handleAddAnswer";
import {handleChange} from "@/components/drop/_functions/handleChange";
import {ComponentSelector} from "@/components/drop/components";


function QuestionLayout({
	callBack,
	subHeading,
	heading,
	answers: _answers,
	contentId,
	order,
}: QuestionLayoutProps) {
	const [answers, setAnswers] = useState<TAnswer[]>([]);
	const [answerHistory, setAnswerHistory] = useState<TAnswer[] | null>(null);
	const [rawQuestionJson, setRawQuestionJson] = useState<RawQuestionLayoutJson | null>(null);

	useEffect(() => {
		if (!subHeading && !heading && !_answers) {
			const firstAnswer = makeNewAnswer();
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
			contentId,
			order,
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


	const handleAddNewPage = () => {
		callBack({
			save: true,
			id: contentId,
			data: rawQuestionJson,
			componentType: "QuestionLayout",
			order,
			contentId
		})
	}

	return (
		 <div>
			 <ComponentSelector
					component={"headings"}
					placeholder={{
						heading: placeholders.heading,
						subHeading: placeholders.subHeading
					}}
					id={uuidv4()}
					onContentChange={(evt) => {
						handleChange({
							id: evt.id,
							component: evt.component,
							content: evt.content,
							rawQuestionJson,
							setRawQuestionJson,
						})
					}}
					customValues={{
						values: {
							heading: heading || "",
							subHeading: subHeading || ""
						}
					}}
			 />

			 <div id={"answers"} className={"flex flex-wrap"}>
				 {answers.map((answer) => {
					 return (
							<ComponentSelector
								 component={"answer"}
								 key={answer.id}
								 id={answer.id}
								 onDelete={() => handleAnswerDelete({
									 id: answer.id,
									 answers,
									 setAnswers,
									 setRawQuestionJson,
									 setAnswerHistory
								 })}
								 onContentChange={(evt) => {
									 handleChange({
										 id: evt.id,
										 component: evt.component,
										 content: evt.content,
										 redirect: evt.redirect,
										 rawQuestionJson,
										 setRawQuestionJson,
									 })
								 }}
								 placeholder={placeholders.answer}
								 customValues={{
									 redirect: answer.redirect,
									 handleAddNewPage
								 }}
							/>
					 )
				 })}
			 </div>
			 <button
					onClick={() => {
						handleAddAnswer({
							answers,
							setAnswers,
							setRawQuestionJson,
							setAnswerHistory
						})
					}}
					className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"}
			 >
				 Add Answer
			 </button>
		 </div>
	);
}

export default QuestionLayout;
