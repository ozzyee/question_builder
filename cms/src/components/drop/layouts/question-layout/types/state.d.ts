import {RawQuestionLayoutJson} from "@/components/drop/layouts/question-layout/types/RawQuestionLayoutJson";
import {TAnswer} from "@/components/drop/layouts/question-layout/types/Answers";
import React, {Dispatch, SetStateAction} from "react";

export type SetRawQuestionJson = Dispatch<SetStateAction<RawQuestionLayoutJson | null>>

export type SetAnswerHistory = React.Dispatch<React.SetStateAction<TAnswer[] | null>>

export type SetAnswers = React.Dispatch<React.SetStateAction<TAnswer[]>>
