"use client";
import {useState} from "react";
import {State, TScreens} from "../types/screens";
import {convertObjToArr} from "../_helper/convertObjToArr";
import QuestionsScreen from "./questions/questions.screen";
import OutcomeScreen from "./outcome/outcome.screen";

export const Screens = ({questionsData}: TScreens) => {
	const [_state, setState] = useState<State>({
		currentOutcome: undefined,
		currentScreen: "questions",
		questions: convertObjToArr(questionsData.questions || questionsData),
		answers: [],
		currentQuestion: 0,
		currentAnswer: undefined,
		form: questionsData.form || null,
	});
	const [screen, setScreen] = useState("questions");

	const _setState = (state: State) => {
		setScreen(state.currentScreen);
		setState(state);
	}

	const state = {
		setState: _setState,
		state: _state
	}

	if (screen === "questions") {
		return <QuestionsScreen state={state}/>
	}

	return <OutcomeScreen state={state}/>;
};