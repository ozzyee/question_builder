import {Option} from "../types/question";

export const getScreenFromResponse = ({outcome, redirect}: Option) => {
  if (outcome || (redirect == "contact-from" || redirect == "eligible" || redirect == "form")) {
    return "outcome"
  }

  return "questions"
}