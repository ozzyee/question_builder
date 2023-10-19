import {OnContentChangeEvent} from "@/_types/onContentChange";
import {SetRawQuestionJson} from "@/components/drop/layouts/question-layout/types/state";

export const handleChange = ({id, component, content, redirect, setRawQuestionJson}: HandlerChangeProps) => {
	console.log("answer content ", content)

	if (component === "answer") {
		setRawQuestionJson((prevJson: any) => {
			return {
				...prevJson,
				answers: prevJson.answers.map((answer) => {

					if (answer.id === id) {
						return {
							...answer,
							value: content,
							redirect
						}
					}
					return answer
				})
			}
		})
	}

	if (component === "heading") {
		setRawQuestionJson((prevJson: any) => {
			return {
				...prevJson,
				heading: content
			}
		})
	}

	if (component === "subHeading") {
		setRawQuestionJson((prevJson: any) => {
			return {
				...prevJson,
				subHeading: content
			}
		})
	}
}

interface HandlerChangeProps extends OnContentChangeEvent {
	setRawQuestionJson: SetRawQuestionJson
	id: string
	component: string
	redirect?: string
}
