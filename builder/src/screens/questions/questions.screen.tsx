import {useEffect, useState} from 'react';
import {Option, Question} from "../../types/question";
import {getScreenFromResponse} from "../../_helper/getScreenFromResponse";
import {SingleOptionQuestion} from "./layouts/single-option";
import {MultiOptionQuestion} from "./layouts/multi-option";
import {TScreen} from "../../types/screens";

const QuestionsScreen = ({state: {state, setState}}: TScreen) => {
	const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
	const [isSingleOption, setIsSingleOption] = useState(true)

	useEffect(() => {
		setCurrentQuestion(state.questions[state.currentQuestion]);
		if(!state.questions[state.currentQuestion]?.option_type) return;
		setIsSingleOption(state.questions[state.currentQuestion].option_type === "single_option")
	}, [state]);

	const onAnswerClick = (option: Option, question: string, optionType: string = "single_option") => {
		if (optionType !== "single_option") {
			setState({
				...state,
				answers: {...state.answers, [question]: option.answer},
			});
			return;
		}

		const screen = getScreenFromResponse(option);
		setState({
			...state,
			currentQuestion: state.currentQuestion + 1,
			answers: {...state.answers, [question]: option.answer},
			currentAnswer: option.answer,
			currentOutcome: option.outcome,
			currentScreen: screen,
		});
	}

	const handelMultiQuestionSubmission = () => {
		const option = currentQuestion?.multiple_option_props || null;
		const screen = getScreenFromResponse(option);

		setState({
			...state,
			currentQuestion: state.currentQuestion + 1,
			currentScreen: screen,
			currentOutcome: option?.outcome,
		});
	}

	const onBackClick = () => {
		setState({
			...state,
			currentQuestion: state.currentQuestion - 1,
		});
	}

	if (!currentQuestion) {
		return <div>loading...</div>
	}

	return (
		 <div>
			 <div>
				 {state.currentQuestion > 0 && <button onClick={onBackClick}>Back</button>}
			 </div>
			 <h1 style={{textAlign: "center"}}>{currentQuestion.title}</h1>
			 <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
				 {
					 isSingleOption ?
							<SingleOptionQuestion
								 options={currentQuestion.options}
								 currentQuestion={currentQuestion}
								 onAnswerClick={onAnswerClick}
							/>
							:
							<MultiOptionQuestion
								 options={currentQuestion.options}
								 currentQuestion={currentQuestion}
								 onAnswerClick={onAnswerClick}
								 handelMultiQuestionSubmission={handelMultiQuestionSubmission}
							/>
				 }
			 </div>
		 </div>
	);
};

export default QuestionsScreen;