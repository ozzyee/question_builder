import React, {useEffect, useState} from 'react';
import {Heading} from "@/components/drop/components/heading";
import {Answer} from "@/components/drop/components/answer";
import {v4 as uuidv4} from "uuid";
import {QuestionLayoutProps} from "@/components/drop/layouts/question-layout/types/QuestionLayoutProps";
import {RawQuestionLayoutJson} from "@/components/drop/layouts/question-layout/types/RawQuestionLayoutJson";
import {placeholders} from "@/components/drop/layouts/question-layout/_data/placeholders";
import {TAnswer} from "@/components/drop/layouts/question-layout/types/Answers";
import {handleAnswerDelete} from "@/components/drop/layouts/question-layout/functions/handleAnswerDelete";
import {handleAddAnswer, makeNewAnswer} from "@/components/drop/layouts/question-layout/functions/handleAddAnswer";
import {handleChange} from "@/components/drop/layouts/question-layout/functions/handleChange";


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
			 <Heading
					placeholders={{
						heading: heading || placeholders.heading,
						subHeading: subHeading || placeholders.subHeading
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
			 />

			 <div id={"answers"} className={"flex flex-wrap"}>
				 {answers.map((answer) => {
					 return (
							<Answer
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
								 placeholder={answer.value || placeholders.answer}
								 handleAddNewPage={handleAddNewPage}
								 redirect={answer.redirect}/>
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
