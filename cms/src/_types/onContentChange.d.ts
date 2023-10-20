export type OnContentChangeEvent = {
	id: string,
	content: string,
	component: string,
	redirect?: string,
	customValues?: {
		[key: string]: OnContentChangeEvent
	}
};

export type OnContentChange = ({id, content, component, customValues}: OnContentChangeEvent) => void;