import {QuestionLayoutProps} from "./layout";

export const SingleOptionQuestion = ({options, onAnswerClick, currentQuestion}: QuestionLayoutProps) => {
  return (
     <>
       {
         options?.map((option, index) => {
           return (
              <button
                 style={{margin: "10px", width: "200px", height: "100px"}}
                 key={index}
                 onClick={() => {
                   onAnswerClick(option, currentQuestion!!.title, "single_option")
                 }}>
                {option.answer}
              </button>
           )
         })
       }
     </>
  )
}