import QuestionLayout from "@/components/drop/layouts/question-layout";

type RenderComponentProps = {
	component: string
	callBack: (data: any) => void
	componentProps: any
	contentId: string
	order: number
}

export const RenderComponent = ({component, callBack, componentProps, contentId, order}: RenderComponentProps) => {
	const components = {
		QuestionLayout: QuestionLayout
	}

	if (!components[component as keyof typeof components]) {
		return;
	}

	const Component = components[component as keyof typeof components];

	return (<Component callBack={callBack} {...componentProps} contentId={contentId} order={order}/>)
};