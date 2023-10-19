import {OnContentChangeEvent} from "@/_types/onContentChange";
import {SetRawQuestionJson} from "@/components/drop/layouts/question-layout/types/state";
import {RawQuestionLayoutJson} from "@/components/drop/layouts/question-layout/types/RawQuestionLayoutJson";

export const handleChange = ({
	id,
	component,
	content,
	redirect,
	rawQuestionJson,
	setRawQuestionJson
}: HandlerChangeProps) => {
	const updateJson = (update: { [k: string]: any }) => {
		setRawQuestionJson((prevJson) => ({
			...prevJson,
			...update as any,
		}));
	};

	if (component === "answer" && rawQuestionJson) {
		updateJson(
			 {
				 answers: rawQuestionJson.answers.map((answer) =>
						answer.id === id ? {...answer, value: content, redirect} : answer
				 ),
			 },
		);
	}

	updateJson({
		[component]: content,
	})
}

interface HandlerChangeProps extends OnContentChangeEvent {
	setRawQuestionJson: SetRawQuestionJson
	id: string
	rawQuestionJson: RawQuestionLayoutJson | null
	component: string
	redirect?: string
}
