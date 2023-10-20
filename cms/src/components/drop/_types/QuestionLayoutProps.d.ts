import {RawQuestionLayoutJson} from "@/components/drop/_types/RawQuestionLayoutJson";

export interface QuestionLayoutProps extends RawQuestionLayoutJson {
	callBack: ({
		data,
		componentType,
		id,
		order,
		contentId,
		save
	}: {
		data: RawQuestionLayoutJson | null
		componentType: string
		id: string
		order: number
		contentId: string
		save?: boolean
	}) => void
	contentId: string
	order: number
}
