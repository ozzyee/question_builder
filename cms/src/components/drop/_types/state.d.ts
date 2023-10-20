import {RawQuestionLayoutJson} from "@/components/drop/_types/RawQuestionLayoutJson";
import {TAnswer} from "@/components/drop/_types/Answers";
import React, {Dispatch, SetStateAction} from "react";

export type SetRawQuestionJson = Dispatch<SetStateAction<RawQuestionLayoutJson | null>>

export type SetAnswerHistory = React.Dispatch<React.SetStateAction<TAnswer[] | null>>

export type SetAnswers = React.Dispatch<React.SetStateAction<TAnswer[]>>
