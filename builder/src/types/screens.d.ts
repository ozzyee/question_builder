import {Question, QuestionObj} from "./question";

export type TScreens = {
  questionsData: QuestionObj;
}

export type State = {
  currentOutcome: Outcome | undefined;
  currentScreen: string;
  questions: Question[];
  answers: { [k: string]: any }
  currentQuestion: number;
  currentAnswer: string | undefined
  form?: any;
}

export type TScreen = {
  state: {
    setState: (res: State) => void;
    state: State
  },
}