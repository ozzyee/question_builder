import {useState} from "react";
import {QuestionLayoutProps} from "./layout";

export const MultiOptionQuestion = ({
	options: questions,
	onAnswerClick,
	handelMultiQuestionSubmission,
}: QuestionLayoutProps) => {
	const [questionsAnswered, setQuestionsAnswered] = useState<{ [k: string]: string }>({});


	return (
		 <div style={{
			 display: "flex",
			 flexDirection: "column",
		 }}>
			 <div>
				 {questions?.map((question, index) => {
					 return (
							<>
								<h1>{question.title}</h1>
								{
									question.sub_options?.map((subOption, subIndex) => {
										return (
											 <button
													style={{margin: "10px", width: "200px", height: "100px"}}
													key={subIndex}
													onClick={() => {
														onAnswerClick(subOption, question!!.title, "multi_option")
														setQuestionsAnswered({
															...questionsAnswered,
															[question.title]: true,
														})
													}}>
												 {subOption.answer}
											 </button>
										)
									})
								}
							</>
					 )
				 })}
			 </div>
			 <button
					disabled={Object.keys(questionsAnswered).length != questions?.length}
					onClick={handelMultiQuestionSubmission}
			 >
				 get some dynamic text here like next || submit
			 </button>
		 </div>
	);
}