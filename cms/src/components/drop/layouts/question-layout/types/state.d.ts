import {RawQuestionLayoutJson} from "@/components/drop/layouts/question-layout/types/RawQuestionLayoutJson";
import {TAnswer} from "@/components/drop/layouts/question-layout/types/Answers";

export type SetRawQuestionJson = (value: (((prevState: RawQuestionLayoutJson) => RawQuestionLayoutJson) | RawQuestionLayoutJson)) => void

export type SetAnswerHistory = (value: (((prevState: TAnswer[]) => TAnswer[]) | TAnswer[])) => void

type SetAnswers = (value: (((prevState: TAnswer[]) => TAnswer[]) | TAnswer[])) => void
