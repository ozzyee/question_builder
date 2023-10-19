export type RawQuestionLayoutJson = {
	heading: string,
	subHeading: string,
	order: number,
	contentId: string,
	answers: {
		id: string,
		value: string
	}[]
}