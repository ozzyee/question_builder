import {ReactElement} from "react";

export type QuestionObj = {
  [k: string]: Question;
};

type Question = {
  title?: string;
  subtitle?: string;
  option_type?: string;
  footnote?: string;
  icon?: string;
  answer?: string;
  redirect?: string;
  value?: string;

  options?: Option[];

  multiple_option_props?: {
    redirect?: string;
    outcome?: Outcome;
    form?: any
  }
}

export type Option = {
  icon?: string;
  answer?: string;
  description?: string;
  value?: string;
  redirect?: string;
  title?: string;
  subtitle?: string;
  outcome?: Outcome;
  form?: ReactElement;
  sub_options?: Option[];
}