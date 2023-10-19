import {RawQuestionLayoutJson} from "@/components/drop/layouts/question-layout/types/RawQuestionLayoutJson";

export interface QuestionLayoutProps extends RawQuestionLayoutJson {
	callBack: ({
		data,
		componentType,
		id,
		order,
		contentId,
		save
	}: {
		data: RawQuestionLayoutJson
		componentType: string
		id: string
		order: number
		contentId: string
		save?: boolean
	}) => void
	contentId: string
	order: number
}
